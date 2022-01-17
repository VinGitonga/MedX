import React from 'react'
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import Card from "../common/Card";


const Medication = () => (
    <Card>
        <Box>
            <Heading>Medication</Heading>
        </Box>
        <Box mt={2}>
            <SimpleGrid columns={3} spacing={"30px"}>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Type</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Latex</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>Brand</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Amoxyln</Text>
                </Box>
                <Box>
                    <Text color={'gray.400'} fontWeight={600} fontSize="sm" textTransform={'uppercase'}>mL</Text>
                    <Text color={'gray.900'} fontSize={'md'}>20</Text>
                </Box>
            </SimpleGrid>
        </Box>
    </Card>
)



export default Medication;