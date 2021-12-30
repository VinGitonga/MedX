import { useState, createContext, useEffect } from 'react'
import {
    onSnapshot,
    collection,
    query,
    orderBy,
    where,
} from "@firebase/firestore";
import { db } from "../firebase";

export const UsersContext = createContext()

export const UsersContextProvider = ({children}) => {
    const [doctors, setDoctors] = useState([])

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "users"),
                    orderBy("created", "desc"),
                    where("isDoctor", "==", true)
                ),
                (snapshot) => {
                    setDoctors(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })));
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    const userListState = {
        doctors,
        setDoctors
    }

    return (
        <UsersContext.Provider value={userListState} >
            {children}
        </UsersContext.Provider>
    )
}