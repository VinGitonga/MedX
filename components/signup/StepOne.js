import React from 'react'
import { SimpleGrid, useColorModeValue, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react'

const StepOne = ({ formState, onValueChange }) => {
    return (
        <SimpleGrid
            columns={1}
            px={6}
            py={4}
            spacing={4}
            borderBottom="solid 1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            mb={5}
        >
            <Heading mb={3} color={'whiteAlpha.700'}>
                Authentication Details
            </Heading>
            <FormControl>
                <FormLabel color={"gray.100"}>Email Address</FormLabel>
                <Input
                    mt={0}
                    type="email"
                    placeholder="Email Address"
                    color={"gray.100"}
                    value={formState.email}
                    onChange={e => onValueChange(e, 'email')}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Password</FormLabel>
                <Input
                    mt={0}
                    type="password"
                    placeholder="Password"
                    color={"gray.100"}
                    value={formState.password}
                    onChange={e => onValueChange(e, 'password')}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Confirm Password</FormLabel>
                <Input
                    mt={0}
                    type="password"
                    placeholder="Confirm Password"
                    color={"gray.100"}
                    value={formState.confirmPassword}
                    onChange={e => onValueChange(e, 'confirmPassword')}
                />
            </FormControl>
        </SimpleGrid>
    )
}

export default StepOne
