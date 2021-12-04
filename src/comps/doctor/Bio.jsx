import { Heading, Flex, Avatar, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Card from "../patient/Card";

const Bio = () => {
    return (
        <Card>
            <Flex alignItems={'center'}>
                <Avatar
                    size={'2xl'}
                    mr={5}
                    src="https://firstcrackfantasy.com/wp-content/uploads/1983/10/gordon.png"
                />
                <Heading>Dr. Jane Sloan</Heading>
            </Flex>
            <Box mt={2}>
                <SimpleGrid columns={{ base: 4, md: 2, lg: 2 }} spacing={'20px'}>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Firstname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>Jane</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Lastname</Text>
                        <Text color={'gray.900'} fontSize={'md'}>Sloan</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Gender</Text>
                        <Text color={'gray.900'} fontSize={'md'}>Female</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Date of Birth</Text>
                        <Text color={'gray.900'} fontSize={'md'}>12/05/1991</Text>
                    </Box>
                    <Box mx={2}>
                        <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Age</Text>
                        <Text color={'gray.900'} fontSize={'md'}>42</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Card>
    )
}

export default Bio;
