import React from "react";
import { useState, useEffect } from "react";
import {
    Box,
    Text,
    Flex,
    Tag,
    IconButton,
    Avatar,
    Heading,
} from "@chakra-ui/react";
import Card from "../components/common/Card";
import { GrAdd } from "react-icons/gr";
import Header from "../components/common/Header";
import {
    onSnapshot,
    collection,
    query,
    orderBy,
    where,
} from "@firebase/firestore";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import { useAuthUser } from '../context'

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const { loading, authUser } = useAuthUser()
    const history = useHistory();


    useEffect(() => {
        if (!loading && !authUser) {
            history.push('/login')
        }
    }, [authUser, loading, history])



    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "users"),
                    orderBy("created", "desc"),
                    where("isDoctor", "==", false)
                ),
                (snapshot) => {
                    setPatients(
                        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    console.log(patients)


    return (
        <>
            <Header />
            <Heading px={14} py={2}>
                Patients
            </Heading>
            <Box px={14} py={14} mx="auto">
                <Card>
                    {patients.map((patient) => (
                        <PatientItem data={patient} key={patient.id} />
                    ))}
                </Card>
            </Box>
        </>
    );
};

const PatientItem = ({ data }) => {
    const history = useHistory();
    return (
        <Box mb={6}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"}>
                    <Avatar size="xl" mr={5} src={data.image} />
                    {/* Todo: add push state to profile */}
                    <Text
                        fontSize={"3xl"}
                        _hover={{
                            borderBottom: "2px solid #4299E1",
                        }}
                        cursor={"pointer"}
                        onClick={() => history.push(`/userprofile/${data.id}`)}
                    >
                        {data.firstname} {data.lastname}
                    </Text>
                </Flex>
                <Tag
                    display={{ base: "none", lg: "flex" }}
                    bg={"teal.400"}
                    variant="subtle"
                    size="lg"
                    borderRadius={"full"}
                >
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
};

export default Patients;
