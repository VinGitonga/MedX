import { useEffect } from 'react'
// import useAuth from '../hooks/useAuth'
import DoctorProfile from '../components/doctor'
import PatientProfile from '../components/patient'
import { useHistory } from 'react-router-dom'
import { useAuthUser } from '../context'
import Loader from '../components/common/Loader'

const MyProfile = () => {
    const history = useHistory()
    // const { isAuthenticated } = useAuth();
    const { loading, authUser } = useAuthUser()


    useEffect(() => {
        if (!loading && !authUser) {
            history.push('/login')
        }
    }, [authUser, loading, history])


    return loading ? (
        <Loader />
    ) : (
        authUser.isDoctor ? <DoctorProfile user={authUser} /> : <PatientProfile user={authUser} />
    )

};



export default MyProfile;
