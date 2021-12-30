import { useState, createContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, app } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // set up user as first time
    const [user, setUser] = useState({});

    useEffect(() => {
        const auth = getAuth(app);
        const listener = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // query user from the data base and return an array of one user
                const userData = query(
                    collection(db, "users"),
                    where("email", "==", user.email)
                );
                const userInfoSnap = await getDocs(userData);
                // setUser(userInfoSnap)
                // After getting the snapshot save the userinfo in the localstorage and also set the user
                userInfoSnap.forEach((doc) => {
                    localStorage.setItem("userData", JSON.stringify(doc.data()));
                    // console.log(doc.data())
                    setUser(doc.data());
                });
            } else {
                // Otherwise logoff user
                localStorage.removeItem("userData");
                setUser(null);
            }
        });

        return () => listener();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const authState = {
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
    );
};
