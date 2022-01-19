import { Text, Button, Box, Flex } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const StepZero = () => {
    const history = useHistory()
    return (
        <Box py={6} px={4}>
            <Text fontSize='2xl' mb={6} color={'whiteAlpha.400'}>Are you a medical professional?</Text>
            <Flex justify={'space-between'}>
                <Button onClick={() => history.push('/register/patient')}>No</Button>
                <Button onClick={() => history.push('/register/doctor')}>Yes</Button>
            </Flex>
        </Box>
    )
}


export default StepZero;
