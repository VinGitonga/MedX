import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "@firebase/auth";
import { db, auth } from "../firebase";
import { useRouter } from 'next/router'

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

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
            router.replace('/')
        })
     };

    useEffect(
        () => onAuthStateChanged(auth, (user) => authStateChanged(user)),
        []
    );

    return {
        authUser,
        loading,
        signin,
        register,
        logout
    };
}
