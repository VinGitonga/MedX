import { useEffect, useContext } from "react";
import { UsersContext } from "../context";
import {
    onSnapshot,
    collection,
    query,
    orderBy,
    where,
} from "@firebase/firestore";
import { db } from "../firebase";

export default function useUsersList(target) {
    const { userList, setUserList } = useContext(UsersContext);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "users"),
                    orderBy("created", "desc"),
                    where("isDoctor", "==", target === "doctors" ? true : false)
                ),
                (snapshot) => {
                    setUserList(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })));
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    return { userList };
}
