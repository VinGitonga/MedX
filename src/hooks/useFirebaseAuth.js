import { useState, useEffect, useMemo } from "react";
import { doc, getDoc } from "@firebase/firestore";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "@firebase/auth";
import { db, auth } from "../firebase";

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        const userRef = doc(db, "users", authState.uid);
        const userSnap = await getDoc(userRef);
        setAuthUser({ id: userSnap.id, ...userSnap.data() });
        sessionStorage.setItem('userInfo', JSON.stringify({ id: userSnap.id, ...userSnap.data() }))
        setLoading(false);
    };

    const signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    };

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        signOut(auth).then(() => {
            setAuthUser(null)
            setLoading(true)
            sessionStorage.removeItem('userInfo')
            document.location.href = '/login'
        })
    };

    useEffect(() => {
        if (!authUser && sessionStorage.getItem('userInfo')) {
            setAuthUser(JSON.parse(sessionStorage.getItem('userInfo')))
        }
    }, [authUser])

    useEffect(
        () => onAuthStateChanged(auth, (user) => authStateChanged(user)),
        []
    );

    return useMemo(
        () => ({
            authUser,
            loading,
            signin,
            register,
            logout
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [authUser, loading]
    )

}
