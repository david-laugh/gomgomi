import React, { useState, createContext, useContext } from 'react';
import { ProgressContext } from './Progress';
import { requestJson } from '../utils/api';

const UserContext = createContext({
    user: { 
        email: null, 
        uid: null,
        token: null,
        name: null
    },
    login: () => {},
    signup: () => {},
    chatbot: () => {},
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

    const runWithLoading = async (callback) => {
        setIsLoading(true);
        spinner.start();
        try {
            return await callback();
        } finally {
            setIsLoading(false);
            spinner.stop();
        }
    };

    const login = async (email, password) => {
        try {
            const json = await runWithLoading(() => requestJson('/login/', {
                method: 'POST',
                body: {
                    id: email, //'user2',
                    password: password //'12345678',
                },
            }));
            console.log(json);
            const authenticatedUser = {
                email: email,
                uid: password,
                token: json.Token,
                name: json.name
            };
            setUser(authenticatedUser);
            await sentiment(authenticatedUser.token);
        } catch (error) {
            console.error(error);
        }
    };

    const signup = async (userName, password, email) => {
        try {
            const json = await runWithLoading(() => requestJson('/register/', {
                method: 'POST',
                body: {
                    id: email,
                    password: password,
                    email: userName
                },
            }));
            console.log(json);
            return json;
        } catch (error) {
            console.error(error);
        }
    };

    const chatbot = async (message) => {
        try {
            const json = await runWithLoading(() => requestJson('/api/chatbot/', {
                method: 'POST',
                token: user.token,
                body: {
                    sent : message
                },
            }));
            setChat(json);
            console.log(json);
            return json;
        } catch (error) {
            console.error(error);
        }
    };

    const sentiment = async (token = user.token) => {
        try {
            const json = await runWithLoading(() => requestJson('/api/sentiment/', {
                method: 'GET',
                token,
            }));
            console.log(json);
            setSenti(json);
            return json;
        } catch (error) {
            console.error(error);
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
