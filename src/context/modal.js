import { useState, createContext } from 'react'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
    const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
    const [showMedModal, setShowMedModal] = useState(false)
    const [noteModalOpen, setNoteModalOpen] = useState(false)

    const modalState = {
        appointmentModalOpen,
        setAppointmentModalOpen,
        showMedModal,
        setShowMedModal,
        noteModalOpen,
        setNoteModalOpen
    }

    return (
        <ModalContext.Provider value={modalState}>
            {children}
        </ModalContext.Provider>
    )
}