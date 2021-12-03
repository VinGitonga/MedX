import {
    Box,
    GridItem,
    SimpleGrid,
} from "@chakra-ui/react";

import {
    MedicalHistory,
    Allergies,
    Medication,
    Profile,
} from "../comps/profile";

const Hero = () => {
    return (
        <Box px={8} py={24} mx="auto">
            <SimpleGrid
                w={{ base: "full", xl: 11 / 12 }}
                columns={{ base: 1, lg: 11 }}
                gap={{ base: 0, lg: 24 }}
                mx="auto"
            >
                <GridItem
                    colSpan={{ base: "auto", md: 4 }}
                >
                    <Profile />
                    <Allergies />
                    <Medication />
                </GridItem>
                <GridItem
                    colSpan={{ base: "auto", lg: 7 }}
                >
                    <MedicalHistory />
                </GridItem>
            </SimpleGrid>
        </Box>
    );
};

export default Hero;
