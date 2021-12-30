import {
    Box,
    Text,
    Flex,
    Tag,
    IconButton,
    Avatar,
    Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Card } from "../comps/patient";
import { GrAdd } from "react-icons/gr";
import Navbar from "../comps/Navbar";
import {
    onSnapshot,
    collection,
    query,
    orderBy,
    where,
} from "@firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from 'react'

const Patients = () => {
    const [patients, setPatients] = useState([])

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "users"),
                    orderBy("created", "desc"),
                    where("isDoctor", "==", false)
                ),
                (snapshot) => {
                    setPatients(snapshot.docs);
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );
    return (
        <>
            <Navbar />
            <Heading px={14} py={2}>
                Patients
            </Heading>
            <Box px={14} py={14} mx="auto">
                <Card>
                    {patients.map((patient) => (
                        <PatientItem data={patient.data()} id={patient.id} key={patient.id} />
                    ))}
                </Card>
            </Box>
        </>
    );
};

const PatientItem = ({data, id}) => (
    <Box mb={6}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
                <Avatar
                    size="xl"
                    mr={5}
                    src={data.image}
                />
                <Link to={`/profile/${id}`}>
                    <Text
                        fontSize={"3xl"}
                        _hover={{
                            borderBottom: "2px solid #4299E1",
                        }}
                    >
                        {data.firstname} {' '} {data.lastname}
                    </Text>
                </Link>
            </Flex>
            <Tag display={{base:'none', lg:'flex'}} bg={"teal.400"} variant="subtle" size="lg" borderRadius={"full"}>
                {data.gender}
            </Tag>
            <IconButton
                size={"md"}
                aria-label={"add patient"}
                icon={<GrAdd />}
                isRound
                bg={"gray.300"}
            />
        </Flex>
        <br />
        <hr style={{ backgroundColor: "#CBD5E0", color: "#CBD5E0", height: 2 }} />
    </Box>
);

export default Patients;
