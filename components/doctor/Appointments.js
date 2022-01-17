import React from 'react'
import {
    Box,
    Flex,
    Text,
    Avatar,
    Heading,
    IconButton
} from '@chakra-ui/react'
import { Link } from 'next/link'
import { upcomingConsultation } from '../../utils/patients'
import Card from '../common/Card'
import { GrAdd } from 'react-icons/gr'
import { useContext } from 'react'
import { ModalContext } from '../../context'


const Appointments = () => {
    const { setShow } = useContext(ModalContext)
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
                    // disabled={user.isDoctor ? true : false}
                    bg={'gray.300'}
                />
            </Flex>
            <Box px={7} py={14}>
                {upcomingConsultation.map(info => (
                    <Box mb={3} key={info.id}>
                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Flex alignItems={'center'}>
                                <Avatar
                                    size={'lg'}
                                    mr={5}
                                    src={info.image}
                                />
                                <Text
                                        fontSize={'xl'}
                                        _hover={{
                                            borderBottom: '2px solid #4299e1'
                                        }}
                                    >
                                        {info.firstname} {info.lastname} {info?.name}
                                    </Text>
                            </Flex>
                            <Text>
                                {info.appointmentDate}
                            </Text>
                            <Text>
                                {info.appointmentTime}
                            </Text>
                        </Flex>
                        <br />
                        <hr style={{ backgroundColor: '#cbd5e0', color: '#cbd5e0', height: 2 }} />
                    </Box>
                ))}
            </Box>
        </Card>
    )
}

// const Item = ({ data }) => (
//     <Box mb={3}>
//         <Flex alignItems={'center'} justifyContent={'space-between'}>
//             <Flex alignItems={'center'}>
//                 <Avatar
//                     size={'lg'}
//                     mr={5}
//                     src={data.image}
//                 />
//                 <Link href={'/myprofile'}>
//                     <Text
//                         fontSize={'xl'}
//                         _hover={{
//                             borderBottom: '2px solid #4299e1'
//                         }}
//                     >
//                         {data.firstname} {data.lastname} {data?.name}
//                     </Text>
//                 </Link>
//             </Flex>
//             <Text>
//                 {data.appointmentDate}
//             </Text>
//             <Text>
//                 {data.appointmentTime}
//             </Text>
//         </Flex>
//         <br />
//         <hr style={{ backgroundColor: '#cbd5e0', color: '#cbd5e0', height: 2 }} />
//     </Box>
// )

export default Appointments
