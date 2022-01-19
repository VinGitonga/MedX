import { useContext } from 'react'
import { SimpleGrid, Box, GridItem, Heading, Button } from "@chakra-ui/react";
import Header from "../common/Header";
import Bio from './Bio'
import DoctorInfo from './DoctorInfo'
import Contact from './Contact'
import Upcoming from "./Upcoming";
import Feed from '../messaging/Feed'
import { GrAdd } from 'react-icons/gr'
import { useAuthUser, UserIdContext, ModalContext } from '../../context'
import AddAppointment from './AddAppointment'


const DoctorProfile = ({ user }) => {
    const { authUser } = useAuthUser();
    const { setUserId } = useContext(UserIdContext)
    const { setAppointmentModalOpen } = useContext(ModalContext)
    return (
        <>
            <Header />
            <AddAppointment />
            <Box px={20} py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Heading >
                    {authUser.isDoctor ? 'My Profile' : 'Doctor'}
                </Heading>
                {authUser.isDoctor === false && (
                    <Button size={"md"} leftIcon={<GrAdd />} borderRadius={'full'} colorScheme={'teal'} onClick={() => {
                        setUserId(user.id)
                        setAppointmentModalOpen(true)
                    }} >
                        Book Appointment
                    </Button>
                )}
            </Box>
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
                        {authUser.isDoctor ? <Upcoming /> : <Feed />}
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    );
};

export default DoctorProfile;
