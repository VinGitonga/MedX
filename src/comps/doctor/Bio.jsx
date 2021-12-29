import { Heading, Flex, Avatar, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Card from "../patient/Card";

const Bio = ({ user }) => {
    return (
        <Card>
            <Flex alignItems={'center'}>
                <Avatar
                    size={'2xl'}
                    mr={5}
                    src={user.image}
                />
                <Heading>Dr. {user.firstname} {' '} {user.lastname}</Heading>
            </Flex>
            <Box mt={2}>
                <SimpleGrid columns={{ base: 4, md: 2, lg: 2 }} spacing={'20px'}>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Firstname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.firstname}</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Lastname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.lastname}</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Gender</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.gender}</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Date of Birth</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.dob}</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Age</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.age}</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Card>
    )
}

export default Bio;
