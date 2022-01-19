import React from 'react'
import { useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import DoctorProfile from '../components/doctor/index'
import PatientProfile from '../components/patient'
import { useHistory, useParams } from 'react-router-dom'
import { db } from '../firebase'
import { Spinner } from '@chakra-ui/react'
import { useAuthUser } from '../context'

const UserProfile = () => {
    const history = useHistory()
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const { loading: fetching, authUser } = useAuthUser();
    const { userId } = useParams()


    useEffect(() => {
        if ((!fetching && !authUser) || !authUser) {
            history.push('/login')
        }
    }, [authUser, fetching, history])

    useEffect(
        () =>
            onSnapshot(doc(db, "users", userId), (doc) => {
                setUserData({ id: doc.id, ...doc.data() });
                setLoading(false);
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    console.log(userData)

    return loading ? (
        <Loader />
    ) : (
        userData.isDoctor ? <DoctorProfile user={userData} /> : <PatientProfile user={userData} />
    )

};

const Loader = () => (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.3 }}>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    </div>
)



export default UserProfile;
