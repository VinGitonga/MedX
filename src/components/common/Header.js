import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    InputGroup,
    InputLeftElement,
    Input,
    Avatar,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import {
    AiOutlineMenu,
    AiFillHome,
    AiOutlineSearch,
    AiFillBell,
} from "react-icons/ai";
import { BsChatFill } from "react-icons/bs";
import { MdStorm } from "react-icons/md";
import {
    RiStethoscopeFill,
    RiUserHeartFill,
    RiLogoutCircleFill,
    RiUserFollowFill,
} from "react-icons/ri";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useAuthUser } from "../../context";

export default function Header() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    const history = useHistory();
    const { logout, authUser: user } = useAuthUser();

    return (
        <Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                                    Dashboard
                                </Button>
                                {!user?.isDoctor && (
                                    <Button
                                        w="full"
                                        variant="ghost"
                                        leftIcon={<BsChatFill />}
                                        onClick={() => history.push("/consultations")}
                                    >
                                        Consultations
                                    </Button>
                                )}
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={
                                        user?.isDoctor ? (
                                            <RiStethoscopeFill />
                                        ) : (
                                            <RiUserFollowFill />
                                        )
                                    }
                                    onClick={() =>
                                        history.push(user?.isDoctor ? "/patients" : "/doctors")
                                    }
                                >
                                    {user?.isDoctor ? "Patients" : "Doctors"}
                                </Button>
                            </VStack>
                        </Box>
                        <chakra.a href="/" title="MedX" display="flex" alignItems="center">
                            <Icon as={MdStorm} w={8} h={8} />
                            <VisuallyHidden>MedX</VisuallyHidden>
                        </chakra.a>

                        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
                            <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                                Dashboard
                            </Button>
                            {!user?.isDoctor && (
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<BsChatFill />}
                                    onClick={() => history.push("/consultations")}
                                >
                                    Consultations
                                </Button>
                            )}
                            <Button
                                w="full"
                                variant="ghost"
                                leftIcon={
                                    user?.isDoctor ? <RiStethoscopeFill /> : <RiUserFollowFill />
                                }
                                onClick={() =>
                                    history.push(user?.isDoctor ? "/patients" : "/doctors")
                                }
                            >
                                {user?.isDoctor ? "Patients" : "Doctors"}
                            </Button>
                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                // eslint-disable-next-line react/no-children-prop
                                children={<AiOutlineSearch />}
                            />
                            <Input type="tel" placeholder="Search Doctor..." />
                        </InputGroup>

                        <chakra.a
                            p={3}
                            color={useColorModeValue("gray.800", "inherit")}
                            rounded="sm"
                            _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
                        >
                            <AiFillBell />
                            <VisuallyHidden>Notifications</VisuallyHidden>
                        </chakra.a>
                        <Menu>
                            <MenuButton
                                as={Avatar}
                                size="sm"
                                name={user?.firstname}
                                src={user?.image}
                            />
                            <MenuList>
                                <MenuItem
                                    icon={<RiUserHeartFill />}
                                    onClick={() => history.push("/myprofile")}
                                >
                                    My Profile
                                </MenuItem>
                                <MenuItem
                                    icon={<RiLogoutCircleFill />}
                                    onClick={() => logout()}
                                >
                                    Logout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Flex>
            </chakra.header>
        </Fragment>
    );
}
