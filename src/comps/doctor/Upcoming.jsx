import {
    Box,
    Flex,
    Text,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { upcomingConsultation } from '../../data/patients'
import Card from '../patient/Card'

const Upcoming = () => {
    return (
        <Card>
            <Box>
                <Heading>Upcoming Consultations</Heading>
            </Box>
            {upcomingConsultation.map((info, index) => (
                <UpcomingItem data={info} key={index} />
            ))}
        </Card>
    )
}

const UpcomingItem = ({data}) => {
    return (
        <Box>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <Avatar
                        size={'xl'}
                        mr={5}
                        src={data.imageUrl}
                    />
                    <Link to={'/patient'}>
                        <Text
                            fontSize={'3xl'}
                            _hover={{
                                borderBottom:'2px solid #4299e1'
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
            <hr style={{backgroundColor: '#cbd5e0', color:'#cbd5e0', height:2}} />
        </Box>
    )
}

export default Upcoming