import { useState, createContext } from 'react'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [noteModalOpen, setNoteModalOpen] = useState(false)

    const modalState = {
        open,
        setOpen,
        show,
        setShow,
        noteModalOpen,
        setNoteModalOpen
    }

    return (
        <ModalContext.Provider value={modalState}>
            {children}
        </ModalContext.Provider>
    )
}