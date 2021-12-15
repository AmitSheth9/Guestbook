import { useContext, useState, createContext } from "react";

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
    const [entry, setEntry] = useState([]);
    return (
        <EntryContext.Provider value={{ entry, setEntry }}>{children}</EntryContext.Provider>
    )
}

const useEntry = () => {
    const context = useContext(EntryContext)
    if(context === undefined) {
        throw new Error('Error something something')
    }
    return context
}

export { EntryProvider, useEntry }