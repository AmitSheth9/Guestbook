import { createContext, useState } from "react";

export const authContext = createContext();

export function ProvideAuth({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        const loginSuccesful = username === process.env.AUTH_USERNAME && password === process.env.AUTH_PASSWORD;

        if(loginSuccesful) setUser({ username });
        return loginSuccesful;
    };
    const logout = (callback) => {
        setUser(null);
        callback();
    };

    return (
        <authContext.Provider value={{ user, login, logout }}>{children}</authContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(authContext);

    if (context === undefined) {
        throw new Error(
            'Error'
        )
    }
    return context;
}

export {useAuth}