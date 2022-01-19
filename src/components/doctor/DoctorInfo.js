import React from 'react'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Card from '../common/Card';

const DoctorInfo = ({user}) => {
    return (
        <Card>
            <Box mb={4}>
                <Heading>Information</Heading>
            </Box>
            <SimpleGrid columns={2} spacing={5}>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>License</Text>
                    <Text color={'gray.900'} fontSize={'md'}>{user.doctorInfo.license}</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Accreditations</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Doctor of Medicine</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Speciality</Text>
                    <Text color={'gray.900'} fontSize={'md'}>{user?.doctorInfo?.speciality}</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Education</Text>
                    <Text color={'gray.900'} fontSize={'md'}>University of Nairobi</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Years of Experience</Text>
                    <Text color={'gray.900'} fontSize={'md'}>{user?.doctorInfo?.yearsExperience}</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Languages</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Madorilian</Text>
                </Box>
            </SimpleGrid>
        </Card>
    )
}

export default DoctorInfo;
