import React from 'react'
import { SimpleGrid, Box, GridItem } from "@chakra-ui/react";
// import Navbar from "../common/Navbar";
import Header from "../common/Header";
import Bio from './Bio'
import DoctorInfo from './DoctorInfo'
import Contact from './Contact'
import Appointments from "./Appointments";


const DoctorProfile = ({ user }) => {
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
                        <Bio user={user} />
                        <DoctorInfo user={user} />
                        <Contact user={user} />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        <Appointments />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default DoctorProfile;
