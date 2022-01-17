import {
    SimpleGrid,
    Box,
    Text,
    Button,
    Heading
} from '@chakra-ui/react'
import Card from '../common/Card'


const Consultation = () => {
    return (
        <Card>
            <Box mb={3}>
                <Heading>Consultation</Heading>
            </Box>
            <SimpleGrid columns={2} spacing={5}>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSize='sm' textTransform={'uppercase'}>Patient</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Bae Suzy</Text>
                </Box>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSize='sm' textTransform={'uppercase'}>Description</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Chest Pains</Text>
                </Box>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSize='sm' textTransform={'uppercase'}>Start</Text>
                    <Text color={'gray.900'} fontSize={'md'}>08.30AM</Text>
                </Box>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSize='sm' textTransform={'uppercase'}>End</Text>
                    <Text color={'gray.900'} fontSize={'md'}>09.30AM</Text>
                </Box>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSize='sm' textTransform={'uppercase'}>Invoice</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Ksh 750</Text>
                </Box>
                <Button colorScheme={'pink'} variant={'solid'} borderTopRightRadius={'25px'} borderBottomRightRadius={'25px'} borderBottomLeftRadius={'20px'}>
                    Submit
                </Button>
            </SimpleGrid>
        </Card>
    )
}

export default Consultation;