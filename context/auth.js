import { createContext, useState, useMemo, useEffect } from "react";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { db, auth } from "../firebase";
import { useRouter } from 'next/router'
import { doc, getDoc } from '@firebase/firestore'

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter()

    useEffect(()=> 
        onAuthStateChanged(auth, user => {
            if (user){
                setUserId(user.uid)
            }
            else {
                setUserId("no id")
            }
        }),
        []
    )


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
        if (sessionStorage.getItem('userInfo')) {
            return JSON.parse(sessionStorage.getItem('userInfo'))
        } else {
            return false
        }
    }

    const authenticate = async (userInfo) => {
        if (typeof window !== undefined) {
            const userRef = doc(db, "users", userInfo.uid)
            const userSnap = await getDoc(userRef)
            if (userSnap.exists()){
                setUser({
                    id: userSnap.id,
                    ...userSnap.data()
                })
                sessionStorage.setItem('userInfo', JSON.stringify({
                    id: userSnap.id,
                    ...userSnap.data()
                }))
                console.log('Just added',userSnap.data())
            }
        }
    }

    /**
     * Create a memoed value that are return to by the context
     */
    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            logout,
            isAuthenticated,
            authenticate
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user, loading, error]
    );

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    );
};
