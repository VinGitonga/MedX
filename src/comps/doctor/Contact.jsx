import Card from "../patient/Card"
import { HStack, Heading, Box, Text } from '@chakra-ui/react'


const Contact = () => {
    return (
        <Card>
            <Box mb={4}>
                <Heading>Contact</Heading>
            </Box>
            <HStack>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Phone No</Text>
                    <Text color={'gray.900'} fontSize={'md'}>+254712345678</Text>
                </Box>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSizee='sm' textTransform={'uppercase'}>Address</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Nakuru, Kenya</Text>
                </Box>
            </HStack>
        </Card>
    )
}

export default Contact
