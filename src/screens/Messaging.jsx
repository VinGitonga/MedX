import { SimpleGrid, Box, GridItem } from "@chakra-ui/react";
import Navbar from "../comps/Navbar";
import {
    Feed,
    Consultation,
    Notes,
} from "../comps/messaging";

const Messaging = () => {
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
                        <Consultation />
                        <Notes />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        <Feed />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Messaging;
