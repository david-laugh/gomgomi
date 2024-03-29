import React, { useState, createContext, useContext} from 'react';
import { ProgressContext } from './';
import ip_address from './../utils/ip_address';

const UserContext = createContext({
    user: { 
        email: null, 
        uid: null,
        token: null,
        name: null
    },
    dispatch: () => {},
});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [chat, setChat] = useState("");
    const [senti, setSenti] = useState({});
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
            const response = await fetch(`http://${ip_address}/login/`, {
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
            console.log(json);
            setUser({
                email: email,
                uid: password,
                token: json.Token,
                name: json.name
            });
            console.log(user);
            sentiment();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            spinner.stop;
        }
    };

    const signup = async (userName, password, email) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://${ip_address}/register/`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    id: email,
                    password: password,
                    email: userName
                }),
            }, 3000);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const chatbot = async (message) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://${ip_address}/api/chatbot/`, {
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
            setChat(json);
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const sentiment = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://${ip_address}/api/sentiment/`, {
                method: 'GET',
                headers: {
                    'Authorization' : 'Token ' + user.token
                },
            }, 3000);
            const json = await response.json();
            console.log(json);
            setSenti(json);
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
                chatbot,
                senti
            }}
        >{children}</UserContext.Provider>
    );
};

export { UserContext, UserProvider };
