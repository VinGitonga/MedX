import React from 'react'
import { SimpleGrid, Box, GridItem } from "@chakra-ui/react";
import Header from "../common/Header";
import MedicalHistory from './MedicalHistory'
import Allergies from './Allergies'
import Medication from './Medication'
import Profile from './Profile'
import { medicalHistoryData } from "../../utils/patients";

const PatientProfile = ({ user }) => {
    return (
        <>
            <Header />
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
                        <MedicalHistory data={medicalHistoryData} />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default PatientProfile;
