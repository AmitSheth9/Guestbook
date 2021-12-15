import { useContext, useState, createContext } from "react";

const GuestContext = createContext();

const GuestProvider = ({ children }) => {
    const [guest, setGuest] = useState({});

    return (
        <GuestContext.provider value={{user, setUser}}>{children}</GuestContext.provider>
    )
}

const useGuest = () => {
    const context = useContext(GuestContext)
    if(context === undefined) {
        throw new Error('Error')
    }
    return context
}

export { GuestProvider, useGuest };