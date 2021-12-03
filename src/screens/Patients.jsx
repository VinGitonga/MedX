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
import { PATIENTS } from "../data/patients";

const Patients = () => {
    return (
        <>
            <Navbar />
            <Heading px={14} py={2}>
                Patients
            </Heading>
            <Box px={14} py={14} mx="auto">
                <Card>
                    {PATIENTS.map((patient, index) => (
                        <PatientItem data={patient} key={index} />
                    ))}
                </Card>
            </Box>
        </>
    );
};

const PatientItem = ({data}) => (
    <Box mb={6}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
                <Avatar
                    size="xl"
                    mr={5}
                    src={data.imageUrl}
                />
                <Link to={"/patient"}>
                    <Text
                        fontSize={"3xl"}
                        _hover={{
                            borderBottom: "2px solid #4299E1",
                        }}
                    >
                        {data.name}
                    </Text>
                </Link>
            </Flex>
            <Tag display={{base:'none', lg:'flex'}} bg={"teal.400"} variant="subtle" size="lg" borderRadius={"full"}>
                Payment {data.paymentStatus}
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
