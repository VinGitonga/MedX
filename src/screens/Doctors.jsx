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
import { useContext } from 'react'
import { UsersContext } from '../context'

const Doctors = () => {
    const { doctors } = useContext(UsersContext)

    return (
        <>
            <Navbar />
            <Heading px={14} py={2}>
                Doctors
            </Heading>
            <Box px={14} py={14} mx="auto">
                <Card>
                    {doctors.map((doctor) => (
                        <DoctorItem data={doctor} key={doctor.id} />
                    ))}
                </Card>
            </Box>
        </>
    );
};

const DoctorItem = ({ data }) => (
    <Box mb={6}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
                <Avatar
                    size="xl"
                    mr={5}
                    src={data.image}
                />
                <Link to={`/profile/${data.id}`}>
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
            <Tag display={{ base: 'none', lg: 'flex' }} bg={"teal.400"} variant="subtle" size="lg" borderRadius={"full"}>
                {data.doctorInfo.speciality}
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
        <hr style={{ backgroundColor: "#CBD5E0", color: "#CBD5E0", height: 2 }} />
    </Box>
);

export default Doctors;
