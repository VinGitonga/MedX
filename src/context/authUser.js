import { useState, createContext } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    // set up user as first time
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')));

    const authState = {
        user, setUser
    }

    return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}