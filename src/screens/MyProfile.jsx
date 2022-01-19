import { SimpleGrid, Box, GridItem } from "@chakra-ui/react";
import Navbar from "../comps/Navbar";
import { Bio, DoctorInfo, Upcoming, Contact } from "../comps/doctor";
import {
    MedicalHistory,
    Allergies,
    Medication,
    Profile,
} from "../comps/patient";
import { medicalHistoryData } from "../data/patients";
// import useAppointments from '../hooks/use-appointments'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/use-auth'
import { onSnapshot, doc} from '@firebase/firestore'
import { db } from '../firebase'




const MyProfile = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    console.log(user)

    // const { appointments } = useAppointments()


    useEffect(
        () =>
            onSnapshot(doc(db, "users", user.uid), (snapshot) => {
                setLoading(true)
                setUserData({
                    id: snapshot.id,
                    ...snapshot.data(),
                });
                setLoading(false)
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    const doctor = ({ user }) => (
        <>
            {/* <Navbar /> */}
            <Box px={8} py={14} mx="auto">
                <SimpleGrid
                    w={{ base: "full", xl: 11 / 12 }}
                    columns={{ base: 1, lg: 11 }}
                    gap={{ base: 0, lg: 16 }}
                    mx="auto"
                >
                    <GridItem colSpan={{ base: "auto", md: 4 }}>
                        <Bio user={user} />
                        <DoctorInfo user={user} />
                        <Contact user={user} />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        <Upcoming />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );

    const patient = ({ user }) => (
        <>
            {/* <Navbar /> */}
            <Box px={8} py={14} mx="auto">
                <SimpleGrid
                    w={{ base: "full", xl: 11 / 12 }}
                    columns={{ base: 1, lg: 11 }}
                    gap={{ base: 0, lg: 16 }}
                    mx="auto"
                >
                    <GridItem colSpan={{ base: "auto", md: 4 }}>
                        <Profile user={user} />
                        <Allergies user={user} />
                        <Medication />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        <MedicalHistory data={medicalHistoryData} />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
    console.log(userData)

    return loading ? 'Loading' : (
        <>
        { userData.isDoctor ? doctor({ userData }) : patient({ userData }) }
        </>
    )
};

export default MyProfile;
