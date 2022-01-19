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
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    onSnapshot,
    collection,
    query,
    orderBy,
    where,
} from "@firebase/firestore";
import { db } from "../firebase";
import { useAuthUser } from '../context'

export default function Doctors() {
    const { loading, authUser } = useAuthUser();
    const [doctors, setDoctors] = useState([]);
    const history = useHistory();
    console.log(authUser)

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
                    where("isDoctor", "==", true)
                ),
                (snapshot) => {
                    setDoctors(
                        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                }
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [db]
    );

    return (
        <Box>
            <Header />
            <Heading px={14} py={2}>
                Doctors
            </Heading>
            <Box px={14} py={14} mx="auto">
                <Card>
                    {doctors.map((doctor) => (
                        <Box mb={6} key={doctor.id}>
                            <Flex alignItems={"center"} justifyContent={"space-between"}>
                                <Flex alignItems={"center"}>
                                    <Avatar size="xl" mr={5} src={doctor.image} />
                                    {/* To add a push state */}
                                    <Text
                                        fontSize={"3xl"}
                                        _hover={{
                                            borderBottom: "2px solid #4299E1",
                                        }}
                                        cursor={"pointer"}
                                        onClick={() => history.push(`/userprofile/${doctor.id}`)}
                                    >
                                        {doctor.firstname} {doctor.lastname}
                                    </Text>
                                </Flex>
                                <Tag
                                    display={{ base: "none", lg: "flex" }}
                                    bg={"teal.400"}
                                    variant="subtle"
                                    size="lg"
                                    borderRadius={"full"}
                                >
                                    {doctor?.doctorInfo?.speciality}
                                </Tag>
                                <IconButton
                                    size={"md"}
                                    aria-label={"add doctor"}
                                    icon={<GrAdd />}
                                    isRound
                                    bg={"gray.300"}
                                />
                            </Flex>
                            <br />
                            <hr
                                style={{
                                    backgroundColor: "#CBD5E0",
                                    color: "#CBD5E0",
                                    height: 2,
                                }}
                            />
                        </Box>
                    ))}
                </Card>
            </Box>
        </Box>
    );
}
