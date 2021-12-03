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
} from "@chakra-ui/react";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
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
                    <SimpleGrid
                        columns={1}
                        px={6}
                        py={4}
                        spacing={4}
                        borderBottom="solid 1px"
                        borderColor={useColorModeValue("gray.200", "gray.700")}
                    >
                        <Flex>
                            <VisuallyHidden>Name</VisuallyHidden>
                            <Input
                                mt={0}
                                type="text"
                                placeholder="Name"
                                required="true"
                                color={"gray.100"}
                            />
                        </Flex>
                        <Flex>
                            <VisuallyHidden>Email Address</VisuallyHidden>
                            <Input
                                mt={0}
                                type="email"
                                placeholder="Email Address"
                                required="true"
                                color={"gray.100"}
                            />
                        </Flex>
                        <Flex>
                            <VisuallyHidden>Password</VisuallyHidden>
                            <Input
                                mt={0}
                                type="password"
                                placeholder="Password"
                                required="true"
                                color={"gray.100"}
                            />
                        </Flex>
                        <Button
                            leftIcon={<FaUserCog />}
                            colorScheme="teal"
                            w="full"
                            py={2}
                            type="submit"
                        >
                            Register
                        </Button>
                        <Button
                            colorScheme="teal"
                            w="full"
                            py={2}
                            variant="link"
                            onClick={() => history.push("/login")}
                        >
                            Login to your account
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

export default Register;
