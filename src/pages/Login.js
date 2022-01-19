import { useState } from "react";
import {
    Box,
    useColorModeValue,
    Flex,
    Input,
    VisuallyHidden,
    SimpleGrid,
    Button,
    Image,
    Center,
    Text,
    Icon,
    useToast,
} from "@chakra-ui/react";
import { RiLoginCircleLine } from "react-icons/ri";
import { GiPadlockOpen } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { useAuthUser } from "../context";

const Login = () => {
    const history = useHistory();
    const { signin } = useAuthUser();
    const toast = useToast();

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const errorMsg = () => {
        toast({
            title: error,
            status: "error",
            duration: 5000,
            isClosable: true,
        });
    };

    const handleChange = (e, key) => {
        setFormState({
            ...formState,
            [key]: e.target.value,
        });
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!formState.email || !formState.password) {
            setError("Please fill all the inputs");
            return null;
        } else if (!emailRegex.test(formState.email)) {
            setError("Please enter a valid email address");
            return null;
        } else if (formState.password.length < 6) {
            setError("Passwords must be at least 6 characters");
            return null;
        } else {
            if (!error) {
                console.log("am here");
                signin(formState.email, formState.password);
                history.push("/myprofile");
            }
        }
    };

    return (
        <Box mx="auto" h={"100vh"} bg={"#1a202c"}>
            {error && errorMsg()}
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
                        src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-51396,resizemode-1,msid-77562355/industry/healthcare/biotech/healthcare/health-id-another-aadhar-in-the-offing-for-new-digital-medical-care-ecosystem.jpg"
                        alt="3 women looking at a laptop"
                        fit="cover"
                        h={"99vh"}
                        bg="gray.100"
                        loading="lazy"
                    />
                </Box>
                <Box as="form" mb={6} rounded="lg" shadow="xl" m={"auto"} width={"70%"}>
                    <Center pb={0} color={useColorModeValue("cyan.700", "cyan.600")}>
                        <Icon as={GiPadlockOpen} w={7} h={7} mr={2} />
                        <Text fontWeight="bold" fontSize={"3xl"} pt={2}>
                            Welcome back
                        </Text>
                    </Center>
                    <SimpleGrid
                        columns={1}
                        px={6}
                        py={4}
                        spacing={4}
                        borderBottom="solid 1px"
                        borderColor={useColorModeValue("gray.200", "gray.700")}
                    >
                        <Flex>
                            <VisuallyHidden>Email Address</VisuallyHidden>
                            <Input
                                mt={0}
                                type="email"
                                placeholder="Email Address"
                                value={formState.email}
                                onChange={(e) => handleChange(e, "email")}
                                color={"gray.100"}
                            />
                        </Flex>
                        <Flex>
                            <VisuallyHidden>Password</VisuallyHidden>
                            <Input
                                mt={0}
                                type="password"
                                placeholder="Password"
                                color={"gray.100"}
                                value={formState.password}
                                onChange={(e) => handleChange(e, "password")}
                            />
                        </Flex>
                        <Button
                            leftIcon={<RiLoginCircleLine />}
                            colorScheme="teal"
                            w="full"
                            py={2}
                            type="submit"
                            onClick={clickSubmit}
                        >
                            Login
                        </Button>
                        <Button
                            colorScheme="teal"
                            w="full"
                            py={2}
                            variant="link"
                            onClick={() => history.push("/register")}
                        >
                            Create an Account
                        </Button>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default Login;
