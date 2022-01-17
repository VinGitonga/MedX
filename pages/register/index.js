import React from 'react'
import {
    Box,
    useColorModeValue,
    SimpleGrid,
    Image,
    Center,
    Text,
    Icon,
} from "@chakra-ui/react";
import { RiUserSettingsFill } from "react-icons/ri";
import StepZero from '../../components/signup/StepZero'


const Register = () => {
    return (
        <Box mx="auto" h={"100vh"} bg={"#1a202c"}>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={0}
                _after={{
                    opacity: 0.25,
                    pos: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: -1,
                    content: '" "',
                }}
                bg={"#1a202c"}
            >
                <Box>
                    <Image
                        src="https://assets.newatlas.com/dims4/default/c07af0f/2147483647/strip/true/crop/1620x1079+0+0/resize/728x485!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fblood-test-ptsd-1.jpg"
                        alt="3 women looking at a laptop"
                        fit="cover"
                        h={"99vh"}
                        bg="gray.100"
                        loading="lazy"
                    />
                </Box>
                <Box as="form" mb={6} rounded="lg" shadow="xl" m={"auto"} width={"70%"}>
                    <Center pb={0} color={useColorModeValue("cyan.700", "cyan.600")}>
                        <Icon as={RiUserSettingsFill} w={7} h={7} mr={2} />
                        <Text fontWeight="bold" fontSize={"3xl"} pt={2}>
                            Create an Account
                        </Text>
                    </Center>
                    <StepZero />
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default Register;
