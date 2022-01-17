import useAuth from '../hooks/useAuth'
import {useRouter} from 'next/router'


const PrivateRoute = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated } = useAuth();
    if (typeof window !== undefined){
        if (!isAuthenticated() && (window.location.pathname !== ('/login' || '/register' || '/register/doctor' || '/register/patient'))) {
            router.replace('/login')
        }
    }
    return children;
};

export default PrivateRoute;