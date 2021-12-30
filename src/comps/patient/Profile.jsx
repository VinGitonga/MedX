import {
    Flex,
    Text,
    Box,
    Heading,
    SimpleGrid,
    Avatar
} from "@chakra-ui/react";
import Card from "./Card";

const Profile = ({user}) => {
    return (
        <Card>
            <Flex alignItems="center">
                <Avatar
                    size="2xl"
                    mr={5}
                    src={user.image}
                />
                <Heading>{user.firstname} {user.lastname}</Heading>
            </Flex>
            <Box mt={2}>
                <SimpleGrid columns={{base:4, md:2, lg: 2}} spacing="20px">
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Firstname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.firstname}</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Lastname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.lastname}</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Age</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.age}</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Weight</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user?.patientInfo?.weight}kg</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Height</Text>
                        <Text color={'gray.900'} fontSize={'md'}>182cm</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Sex</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.gender}</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Dob</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user.dob}</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Bloodtype</Text>
                        <Text color={'gray.900'} fontSize={'md'}>{user?.patientInfo?.bloodType}</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Card>
    );
};


export default Profile;
