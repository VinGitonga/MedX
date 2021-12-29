import useAuthListener from "../hooks/use-auth-listener";
import { SimpleGrid, Box, GridItem } from "@chakra-ui/react";
import Navbar from "../comps/Navbar";
import { Bio, DoctorInfo, Upcoming, Contact } from "../comps/doctor";
import {
    MedicalHistory,
    Allergies,
    Medication,
    Profile,
} from "../comps/patient";
import { medicalHistoryData } from "../data/patients";

const MyProfile = () => {
    const { user } = useAuthListener();

    const doctor = ({ user }) => (
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
                        <Bio user={user} />
                        <DoctorInfo user={user} />
                        <Contact user={user} />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        <Upcoming />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );

    const patient = ({ user }) => (
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
                        <Profile user={user} />
                        <Allergies user={user} />
                        <Medication />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        <MedicalHistory data={medicalHistoryData} />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );

    return user.isDoctor ? doctor({ user }) : patient({ user });
};

export default MyProfile;