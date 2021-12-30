import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import DoctorProfile from "./DoctorProfile";
import PatientProfile from "./PatientProfile";
import { ModalContext } from '../context'

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const { userId } = useParams();
    const { setUserId } = useContext(ModalContext) //setUserId to be used in AddMedicalHistory

    useEffect(
        () =>
            onSnapshot(doc(db, "users", userId), (doc) => {
                setUserData(doc.data());
                setUserId(userId)
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
