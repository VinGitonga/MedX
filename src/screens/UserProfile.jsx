import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import DoctorProfile from "./DoctorProfile";
import PatientProfile from "./PatientProfile";

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const { userId } = useParams();

    useEffect(
        () =>
            onSnapshot(doc(db, "users", userId), (doc) => {
                setUserData(doc.data());
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    return userData?.isDoctor ? (
        <DoctorProfile user={userData} />
    ) : (
        <PatientProfile user={userData} />
    );
};

export default UserProfile;
