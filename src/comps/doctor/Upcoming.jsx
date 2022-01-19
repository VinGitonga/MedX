import {
    Box,
    Flex,
    Text,
    Avatar,
    Heading,
    IconButton
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { upcomingConsultation } from '../../data/patients'
import Card from '../patient/Card'
import { GrAdd } from 'react-icons/gr'
import { useContext } from 'react'
import { ModalContext } from '../../context'
import useProfile from '../../hooks/useProfile'
/**
 * Returns the upcoming consultations for doctor
 * 
 */

const Upcoming = () => {
    const { setShow } = useContext(ModalContext)
    const { userData: user } = useProfile()
    return (
        <Card>
            <Flex justify={'space-between'}>
                <Heading>Upcoming Consultations</Heading>
                <IconButton
                    size={"md"}
                    aria-label={"type"}
                    icon={<GrAdd />}
                    isRound
                    onClick={() => setShow(true)}
                    disabled={user.isDoctor ? true : false}
                    bg={'gray.300'}
                />
            </Flex>
            <Box px={7} py={14}>
                {upcomingConsultation.map((info, index) => (
                    <UpcomingItem data={info} key={index} />
                ))}
                {/* {user.data.isDoctor ? (
                    <>
                    {appointments.map((info, index) => (
                        <UpcomingItem data={info} key={index} />
                    ))}
                    </>
                ) : (
                    <>
                    {upcomingConsultation.map((info, index) => (
                        <UpcomingItem data={info} key={index} />
                    ))}
                    </>
                )} */}
            </Box>
        </Card>
    )
}

const UpcomingItem = ({ data }) => {
    return (
        <Box mb={3}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <Avatar
                        size={'lg'}
                        mr={5}
                        src={data.image}
                    />
                    <Link to={`/profile/${data.userId}`}>
                        <Text
                            fontSize={'xl'}
                            _hover={{
                                borderBottom: '2px solid #4299e1'
                            }}
                        >
                            {data.firstname} {data.lastname} {data?.name}
                        </Text>
                    </Link>
                </Flex>
                <Text>
                    {data.appointmentDate}
                </Text>
                <Text>
                    {data.appointmentTime}
                </Text>
            </Flex>
            <br />
            <hr style={{ backgroundColor: '#cbd5e0', color: '#cbd5e0', height: 2 }} />
        </Box>
    )
}

export default Upcoming