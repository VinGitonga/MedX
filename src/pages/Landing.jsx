import React from 'react'
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FaUserCog } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import { useHistory } from 'react-router-dom'

const Landing = () => {
  const history = useHistory();
  return (
      <Box pos="relative" overflow="hidden" bg={"#1a202c"} h={"100vh"}>
          <Box maxW="7xl" mx="auto">
              <Box
                  pos="relative"
                  pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                  w="full"
                  border="solid 1px transparent"
              >
                  <Box
                      mx="auto"
                      maxW={{ base: "7xl" }}
                      px={{ base: 4, sm: 6, lg: 8 }}
                      mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
                  >
                      <Box
                          textAlign="center"
                          w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
                          mx="auto"
                      >
                          <chakra.h1
                              fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                              letterSpacing="tight"
                              lineHeight="short"
                              fontWeight="extrabold"
                              color={useColorModeValue("gray.900", "white")}
                          >
                              <chakra.span
                                  display={{ base: "block", xl: "inline" }}
                                  color={"#cbceeb"}
                              >
                                  Welcome to Medx{" "}
                              </chakra.span>
                              <chakra.span
                                  display={{ base: "block", xl: "inline" }}
                                  color={useColorModeValue("purple.900", "purple.500")}
                              // color={"#3c4178"}
                              >
                                  Cloud clinic facility
                              </chakra.span>
                          </chakra.h1>
                          <chakra.p
                              mt={{ base: 3, sm: 5, md: 5 }}
                              mx={{ sm: "auto", lg: 0 }}
                              mb={6}
                              fontSize={{ base: "lg", md: "xl" }}
                              color="gray.500"
                              lineHeight="base"
                          >
                              We ensure accessible high quality health care by providing
                              compassionate medical professionals and integrated clinical
                              practice.
                          </chakra.p>
                          <Stack
                              direction={{ base: "column", sm: "column", md: "row" }}
                              mb={{ base: 4, md: 8 }}
                              spacing={{ base: 4, md: 2 }}
                              justifyContent="center"
                          >
                              <Button
                                  colorScheme="teal"
                                  size="lg"
                                  leftIcon={<FaUserCog />}
                                  onClick={() => history.push("/register")}
                              >
                                  Register
                              </Button>
                              <Button
                                  bg="white"
                                  color={"gray.900"}
                                  size="lg"
                                  leftIcon={<RiLoginCircleLine />}
                                  onClick={() => history.push("/login")}
                              >
                                  Login
                              </Button>
                          </Stack>
                      </Box>
                  </Box>
              </Box>
          </Box>
      </Box>
  );
};

export default Landing;
