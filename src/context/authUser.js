import { createContext, useState, useEffect, useMemo } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            }),
        []
    );

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

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    );
};
