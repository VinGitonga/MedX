import { useState, createContext } from 'react'

export const UsersContext = createContext()

export const UsersContextProvider = ({children}) => {
    const [userList, setUserList] = useState([])

    const userListState = {
        userList,
        setUserList
    }

    return (
        <UsersContext.Provider value={userListState} >
            {children}
        </UsersContext.Provider>
    )
}