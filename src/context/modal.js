import { useState, createContext } from 'react'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [userId, setUserId] = useState(null)

    const modalState = {
        open,
        setOpen,
        userId,
        setUserId
    }

    return (
        <ModalContext.Provider value={modalState}>
            {children}
        </ModalContext.Provider>
    )
}