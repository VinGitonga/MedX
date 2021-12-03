import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";


const Allergies = () => (
    <Card>
       <Heading>Allergies</Heading>
        <Box mt={2}>
            <SimpleGrid columns={2} spacing={"30px"}>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Type</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Latex</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Severity</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Moderate</Text>
                </Box>
            </SimpleGrid>
        </Box>
    </Card>
)



export default Allergies;