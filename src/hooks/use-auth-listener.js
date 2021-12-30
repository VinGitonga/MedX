import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, app } from "../firebase";

export default function useAuthListener() {
    // const { user, setUser } = useContext(AuthContext);
    const [user, setUser] = useState({})
    const [data, setData] = useState([])
    var users = []

    useEffect(() => {
        const auth = getAuth(app);
        const listener = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // query user from the data base and return an array of one user
                const userData = query(
                    collection(db, "users"),
                    where("email", "==", user.email)
                );
                console.log(userData)
                const userInfoSnap = await getDocs(userData);
                // setUser(userInfoSnap)
                // After getting the snapshot save the userinfo in the localstorage and also set the user
                userInfoSnap.forEach((doc) => {
                    // localStorage.setItem("userData", doc.data());
                    // console.log(doc.data())
                    users.push()
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
    console.log(user)

    return { user };
}
