import React, { useState, createContext, useContext } from 'react';
import { ProgressContext } from './';

const UserContext = createContext({
    user: { 
        email: null, 
        uid: null,
        token: null
    },
    dispatch: () => {},
});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [chat, setChat] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { spinner } = useContext(ProgressContext);

    const dispatch = ({ email, uid, token }) => {
        setUser({ email, uid, token });
    };
    // const value = { login, user, isLoading };

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            spinner.start;
            const response = await fetch('http://34.64.69.248:8100/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    id: email, //'user2',
                    password: password //'12345678',
                }),
            }, 3000);
            const json = await response.json();
            setUser({
                email: email,
                uid: password,
                token: json.Token
            });
            console.log(user);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            spinner.stop;
        }
    };

    const signup = () => {
        console.log(user);
    };

    const chatbot = async (message) => {
        setIsLoading(true);
        try {
            const response = await fetch('http://34.64.69.248:8100/api/chatbot/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Token ' + user.token
                },
                body: JSON.stringify({
                    sent : message
                }),
            }, 3000);
            const json = await response.json();
            console.log(1)
            console.log(json);
            setChat(json);
            console.log(chat);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <UserContext.Provider
            value={{ 
                login, 
                user,
                chat,
                isLoading,
                dispatch,
                signup,
                chatbot
            }}
        >{children}</UserContext.Provider>
    );
};

export { UserContext, UserProvider };
