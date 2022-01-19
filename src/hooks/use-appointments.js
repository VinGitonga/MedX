import { useState, useEffect } from 'react'
import {
    onSnapshot,
    collection,
    query,
    doc,
    where,
    getDoc
} from '@firebase/firestore'
import { db } from "../firebase";
import useAuth from '../hooks/use-auth'

export default function useAppointments() {
    const [appointments, setAppointments] = useState([])

    const { user } = useAuth();

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'appointments'),
                    where(user?.data?.isDoctor ? "doctorId" : "patientId", "==", user?.id)
                ),
                (snapshot) => {
                    const appsList = []
                    snapshot.forEach(async (doc1) => {
                        const userRef = doc(db, "users", user?.data?.isDoctor ? doc1.data().patientId : doc1.data().doctorId)
                        const userSnap = await getDoc(userRef)
                        const userInfo = {
                            firstname: userSnap.data().firstname,
                            lastname: userSnap.data().lastname,
                            image: userSnap.data().image,
                            appointmentDate: doc1.data().date,
                            appointmentTime: doc1.data().time,
                            userId: userSnap.id
                        }
                        appsList.push(userInfo)
                    })
                    setAppointments(appsList)
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    )

    return { appointments }

}