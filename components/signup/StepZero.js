import React from 'react'
import { Text, Button, Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const StepZero = () => {
    const router = useRouter()
    return (
        <Box py={6} px={4}>
            <Text fontSize='2xl' mb={6} color={'whiteAlpha.400'}>Are you a medical professional?</Text>
            <Flex justify={'space-between'}>
                <Button onClick={() => router.push('/register/patient')}>No</Button>
                <Button onClick={() => router.push('/register/doctor')}>Yes</Button>
            </Flex>
        </Box>
    )
}

// Change the routing to fit the Next JS dynamic routing

export default StepZero;
