import { useEffect } from 'react'
import { SimpleGrid, Box, GridItem } from "@chakra-ui/react";
import Header from "../components/common/Header";
import Upcoming from "../components/doctor/Upcoming";
import Notes from "../components/messaging/Notes";
import { useAuthUser } from '../context'
import {useHistory} from 'react-router-dom'

const Consultations = () => {
    const { authUser } = useAuthUser()
    const history = useHistory()
    
    useEffect(() => {
        if (!authUser){
            history.push('/login')
        }
    },[authUser, history])

    return (
        <>
            <Header />
            <Box px={8} py={8} mx="auto">
                <SimpleGrid
                    w={{ base: "full", xl: 11 / 12 }}
                    columns={{ base: 1, lg: 11 }}
                    gap={{ base: 0, lg: 16 }}
                    mx="auto"
                >
                    <GridItem colSpan={{ base: "auto", md: 4 }}>
                        <Notes />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", lg: 7 }}>
                        <Upcoming />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Consultations;
