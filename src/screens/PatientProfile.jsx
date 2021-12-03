import { SimpleGrid, Box, GridItem } from "@chakra-ui/react";
import Navbar from "../comps/Navbar";
import {
    MedicalHistory,
    Allergies,
    Medication,
    Profile,
} from "../comps/patient";
import { medicalHistoryData } from "../data/patients";

const PatientProfile = () => {
    return (
        <>
            <Navbar />
            <Box px={8} py={14} mx="auto">
                <SimpleGrid
                    w={{ base: "full", xl: 11 / 12 }}
                    columns={{ base: 1, lg: 11 }}
                    gap={{ base: 0, lg: 16 }}
                    mx="auto"
                >
                    <GridItem colSpan={{ base: "auto", md: 4 }}>
                        <Profile />
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
