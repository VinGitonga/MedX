import {
    Flex,
    Text,
    Box,
    Heading,
    SimpleGrid,
    Avatar
} from "@chakra-ui/react";
import Card from "./Card";

const Profile = () => {
    return (
        <Card>
            <Flex alignItems="center">
                <Avatar
                    size="2xl"
                    mr={5}
                    src="https://firstcrackfantasy.com/wp-content/uploads/1983/10/gordon.png"
                />
                <Heading>Michael Gordon</Heading>
            </Flex>
            <Box mt={2}>
                <SimpleGrid columns={{base:4, md:2, lg: 2}} spacing="20px">
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Firstname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>Michael</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Lastname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>Gordon</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Age</Text>
                        <Text color={'gray.900'} fontSize={'md'}>27</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Weight</Text>
                        <Text color={'gray.900'} fontSize={'md'}>84kg</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Height</Text>
                        <Text color={'gray.900'} fontSize={'md'}>182cm</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Sex</Text>
                        <Text color={'gray.900'} fontSize={'md'}>M</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Dob</Text>
                        <Text color={'gray.900'} fontSize={'md'}>19/03/1991</Text>
                    </Box>
                    <Box>
                        <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Bloodtype</Text>
                        <Text color={'gray.900'} fontSize={'md'}>A-</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Card>
    );
};


export default Profile;
