/* eslint-disable @next/next/link-passhref */
import React from "react";
import { Box, Flex, Text, Avatar, Heading, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { upcomingConsultation } from "../../utils/patients";
import Card from "../common/Card";
import { GrAdd } from "react-icons/gr";
import { useState, useEffect } from "react";
import {
    onSnapshot,
    collection,
    query,
    where,
    doc,
    getDoc,
    getDocs,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useAuthUser } from "../../context";

function getUser(id, users) {
    return users.filter(function (obj){
        if (obj.id == id){
            return obj
        }
    })[0]
}

/**
 * Returns the upcoming consultations for doctor
 *
 */

const Upcoming = () => {
    const [appointments, setAppointments] = useState([]);
    const [users, setUsers] = useState([])
    const { authUser } = useAuthUser();

    const someDoc = async (id) => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        const docInfo = docSnap.data();
        return docInfo;
    };

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "appointments"),
                    where("patientId", "==", authUser.id)
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
            const allusers = await getDocs(collection(db, "users"))
            setUsers(
                allusers.docs.map((doc1)=> ({
                    id: doc1.id,
                    ...doc1.data()
                }))
            ) 
        }
        fetch()
    }, [])

    console.log(appointments);
    console.log(users);
    console.log(getUser("QfEC1KFwh8NxGvzIuls4HeEw7dm2", users))

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
                    appointments.map((info) => <UpcomingItem data={info} userData={getUser(info?.doctorId, users)} key={info.id} />)
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
                            Dr. {userData?.firstname} {userData?.lastname} {data?.name}
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
