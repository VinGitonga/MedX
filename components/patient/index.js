import React from 'react'
import { SimpleGrid, Box, GridItem, Heading, Button } from "@chakra-ui/react";
import Header from "../common/Header";
import MedicalHistory from './MedicalHistory'
import Allergies from './Allergies'
import Medication from './Medication'
import Profile from './Profile'
import Feed from '../messaging/Feed'
import { medicalHistoryData } from "../../utils/patients";
import { GrAdd } from "react-icons/gr";
import { useAuthUser } from '../../context'

const PatientProfile = ({ user }) => {
    const { authUser } = useAuthUser()
    return (
        <>
            <Header />
            <Box px={20} py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Heading >
                    Patient
                </Heading>
                <Button size={"md"} leftIcon={<GrAdd />} borderRadius={'full'} colorScheme={'teal'}>
                    Add Note
                </Button>
            </Box>
            <Box px={8} py={14} mx="auto">
                <SimpleGrid
                    w={{ base: "full", xl: 11 / 12 }}
                    columns={{ base: 1, lg: 11 }}
                    gap={{ base: 0, lg: 16 }}
                    mx="auto"
                >
                    <GridItem colSpan={{ base: "auto", md: 4 }}>
                        <Profile user={user} />
                        <Allergies />
                        <Medication />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        {authUser.isDoctor && <Feed />}
                        <MedicalHistory data={medicalHistoryData} />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default PatientProfile;
