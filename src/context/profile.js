import { createContext, useState, useEffect } from 'react'
import { onSnapshot, doc } from '@firebase/firestore'
import { db, auth } from '../firebase'
import useAuth from '../hooks/use-auth'


export const ProfileContext = createContext({})

export const ProfileContextProvider = ({ children }) => {
    const { user } = useAuth()
    const [userData, setUserData] = useState(null);

    useEffect(
        () =>
            onSnapshot(doc(db, "users", user.uid), (snapshot) => {
                setUserData({
                    id: snapshot.id,
                    ...snapshot.data(),
                });
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    return (
        <ProfileContext.Provider value={{ userData }}>
            {children}
        </ProfileContext.Provider>
    )
}