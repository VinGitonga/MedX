import { useEffect, useState } from 'react'

import { onSnapshot, doc, getDoc } from '@firebase/firestore'
import { db } from '../firebase'

/**
 * 
 * Custom Hook for authentication
 * 
 */

export default function useProfile(userId) {

    const [userData, setUserData] = useState(null)

    useEffect(
        () =>
            onSnapshot(doc(db, "users", userId), (snapshot) => {
                setUserData({
                    id: snapshot.id,
                    ...snapshot.data(),
                });
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    useEffect(()=> {
        const fetchUser = async () => {
            const userRef = doc(db, "users", userId)
            const userSnap = await getDoc(userRef)

            if (userSnap.exists()){
                console.log("User Data", userSnap.data())
                setUserData({
                    id: userSnap.id,
                    ...userSnap.data()
                })
            } else {
                console.log("No such data")
            }
        }
        fetchUser()
    }, [db])

    console.log("hi",userData)

    return { userData }
}