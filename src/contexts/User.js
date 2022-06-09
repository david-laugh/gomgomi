import React, { useState, createContext } from 'react';

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
    const dispatch = ({ email, uid, token }) => {
        setUser({ email, uid, token });
    };
    const value = { user, dispatch };
    
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export { UserContext, UserProvider };
