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
import { AuthContext, ModalContext } from '../../context'

const Upcoming = () => {
    const { user } = useContext(AuthContext)
    const { setOpen } = useContext(ModalContext)
    return (
        <Card>
            <Flex justify={'space-between'}>
                <Heading>Upcoming Consultations</Heading>
                <IconButton
                    size={"md"}
                    aria-label={"type"}
                    icon={<GrAdd />}
                    isRound
                    onClick={() => setOpen(true)}
                    disabled={user.data.isDoctor ? true : false}
                    bg={'gray.300'}
                />
            </Flex>
            <Box px={7} py={14}>
                {upcomingConsultation.map((info, index) => (
                    <UpcomingItem data={info} key={index} />
                ))}
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
                        src={data.imageUrl}
                    />
                    <Link to={'/patient'}>
                        <Text
                            fontSize={'xl'}
                            _hover={{
                                borderBottom: '2px solid #4299e1'
                            }}
                        >
                            {data.name}
                        </Text>
                    </Link>
                </Flex>
                <Text>
                    {data.date}
                </Text>
                <Text>
                    {data.time}
                </Text>
            </Flex>
            <br />
            <hr style={{ backgroundColor: '#cbd5e0', color: '#cbd5e0', height: 2 }} />
        </Box>
    )
}

export default Upcoming