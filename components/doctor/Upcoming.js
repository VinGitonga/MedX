/* eslint-disable @next/next/link-passhref */
import { Box, Flex, Text, Avatar, Heading, IconButton } from "@chakra-ui/react";
import Link from "next/link";
// import { upcomingConsultation } from "../../utils/patients";
import Card from "../common/Card";
import { GrAdd } from "react-icons/gr";
import { useState, useEffect } from "react";
import {
    onSnapshot,
    collection,
    query,
    where,
    getDocs,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useAuthUser } from "../../context";
import { getUser } from '../../utils/utils'


/**
 * Returns the upcoming consultations for doctor
 */

const Upcoming = () => {
    const [appointments, setAppointments] = useState([]);
    const [users, setUsers] = useState([]);
    const { authUser } = useAuthUser();

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "appointments"),
                    where(authUser.isDoctor ? "doctorId" : "patientId", "==", authUser.id)
                ),
                (snapshot) => {
                    setAppointments(
                        snapshot.docs.map((doc1) => ({
                            id: doc1.id,
                            ...doc1.data(),
                        }))
                    );
                }
            ),
        [db]
    );

    useEffect(() => {
        const fetch = async () => {
            const allusers = await getDocs(collection(db, "users"));
            setUsers(
                allusers.docs.map((doc1) => ({
                    id: doc1.id,
                    ...doc1.data(),
                }))
            );
        };
        fetch();
    }, []);

    return (
        <Card>
            <Flex justify={"space-between"}>
                <Heading>Upcoming Consultations</Heading>
                <IconButton
                    size={"md"}
                    aria-label={"type"}
                    icon={<GrAdd />}
                    isRound
                    bg={"gray.300"}
                />
            </Flex>
            <Box px={7} py={14}>
                {appointments.length > 0 ? (
                    appointments.map((info) => (
                        <UpcomingItem
                            data={info}
                            userData={getUser(
                                authUser.isDoctor ? info?.patientId : info?.doctorId,
                                users
                            )}
                            key={info.id}
                        />
                    ))
                ) : (
                    <Text>No appointments yet</Text>
                )}
            </Box>
        </Card>
    );
};

const UpcomingItem = ({ data, userData }) => {
    return (
        <Box mb={3}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"}>
                    <Avatar size={"lg"} mr={5} src={userData?.image} />
                    <Link href={"/myprofile"}>
                        <Text
                            fontSize={"xl"}
                            _hover={{
                                borderBottom: "2px solid #4299e1",
                            }}
                        >
                            {userData?.isDoctor && "Dr."} {userData?.firstname}{" "}
                            {userData?.lastname}
                        </Text>
                    </Link>
                </Flex>
                <Text>{data.date}</Text>
                <Text>{data.time}</Text>
            </Flex>
            <br />
            <hr style={{ backgroundColor: "#cbd5e0", color: "#cbd5e0", height: 2 }} />
        </Box>
    );
};

export default Upcoming;
