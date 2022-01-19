import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth, db } from "../firebase";
/**
 * 
 * Custom Hook for authentication
 * @returns current user, logout method, loading state and associated error
 */

export default function useAuth(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(
        () =>{
            const unsub = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            })
            return unsub
        },[db]);

    const logout = async () => {
        /**
         * Method That signouts user from the system
         */
        setLoading(true);
        signOut(auth)
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    };

    /**
     * Create a memoed value that are return to by the context
     */
    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            logout,
        }),
        [user, loading, error]
    );

    return memoedValue;
}