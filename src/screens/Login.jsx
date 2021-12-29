import { useState, useContext } from 'react'
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
    Icon
} from "@chakra-ui/react";
import { RiLoginCircleLine } from "react-icons/ri";
import { GiPadlockOpen } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { MessageContext } from '../context'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { app } from '../firebase'

const Login = () => {
    const history = useHistory()
    const { flashMessage, setFlashMessage } = useContext(MessageContext);

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e, key) => {
        setFormState({
            ...formState,
            [key]: e.target.value,
        });
    }

    const clickSubmit = e => {
        e.preventDefault()
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!formState.email || !formState.password) {
            setFlashMessage({
                status: "error",
                title: "Inputs Error",
                description: "Please fill all the inputs",
            });
            return null;
        } else if (!emailRegex.test(formState.email)) {
            setFlashMessage({
                status: "error",
                title: "Email error",
                description: "Please enter a valid email address",
            });
            return null;
        } else if (formState.password.length < 6) {
            setFlashMessage({
                status: "error",
                title: "Password Error",
                description: "Passwords must be at least 6 characters",
            });
        } else {
            if (!flashMessage) {
                const auth = getAuth(app);
                console.log('am here')
                signInWithEmailAndPassword(auth, formState.email, formState.password)
                    .then(userCred => {
                        console.log('just')
                        // setLoading to false and push user to other page
                        history.push('/patient')
                    }).catch(err => console.log(err.message))
            }
        }
    }

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
                        src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-51396,resizemode-1,msid-77562355/industry/healthcare/biotech/healthcare/health-id-another-aadhar-in-the-offing-for-new-digital-medical-care-ecosystem.jpg"
                        alt="3 women looking at a laptop"
                        fit="cover"
                        h={"99vh"}
                        bg="gray.100"
                        loading="lazy"
                    />
                </Box>
                <Box as="form" mb={6} rounded="lg" shadow="xl" m={"auto"} width={'70%'}  >
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
                                onChange={e => handleChange(e, 'email')}
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
                                onChange={e => handleChange(e, 'password')}
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
                            onClick={() => history.push('/register')}
                        >
                            Create an Account
                        </Button>
                    </SimpleGrid>
                    <Flex px={6} py={4}>
                        <Button
                            py={2}
                            w="full"
                            colorScheme="blue"
                            leftIcon={
                                <Icon
                                    mr={1}
                                    aria-hidden="true"
                                    boxSize={6}
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="transparent"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                                </Icon>
                            }
                        >
                            Continue with Google
                        </Button>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default Login;
