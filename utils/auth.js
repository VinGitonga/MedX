import { doc, getDoc } from '@firebase/firestore'
import { db } from '../firebase'

const logout = async () => {
    /**
     * Method That signouts user from the system
     */
    setLoading(true);
    signOut(auth)
        .then(() => {
            sessionStorage.removeItem('userInfo')
            router.push('/')
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
};

const isAuthenticated = () => {
    if (typeof window !== undefined) {
        if (sessionStorage.getItem('userInfo')) {
            return JSON.parse(sessionStorage.getItem('userInfo'))
        } else {
            return false
        }
    }
}

const authenticate = async (userInfo) => {
    if (typeof window !== undefined) {
        const userRef = doc(db, "users", userInfo.uid)
        const userSnap = await getDoc(userRef)
        if (userSnap.exists()){
            sessionStorage.setItem('userInfo', JSON.stringify({
                id: userSnap.id,
                ...userSnap.data()
            }))
            console.log('Just added',userSnap.data())
        }
    }
}

export {logout, isAuthenticated, authenticate}