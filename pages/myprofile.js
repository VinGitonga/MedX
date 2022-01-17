import React from 'react'
import { useEffect } from 'react'
// import useAuth from '../hooks/useAuth'
import DoctorProfile from '../components/doctor/index'
import PatientProfile from '../components/patient'
import { useRouter } from 'next/router'
import { useAuthUser } from '../context'
import Loader from '../components/common/Loader'

const MyProfile = () => {
    const router = useRouter()
    // const { isAuthenticated } = useAuth();
    const { loading, authUser } = useAuthUser()


    useEffect(() => {
        if (!loading && !authUser) {
            router.replace('/login')
        }
    }, [authUser, loading, router])

    // const userData = isAuthenticated()
    // console.log(userData)

    return loading ? (
        <Loader />
    ) : (
        authUser.isDoctor ? <DoctorProfile user={authUser} /> : <PatientProfile user={authUser} />
    )

    // return userData.isDoctor ? <DoctorProfile user={userData} /> : <PatientProfile user={userData} />
};



export default MyProfile;
