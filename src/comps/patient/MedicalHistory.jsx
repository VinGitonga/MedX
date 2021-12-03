import {
    Flex,
    Box,
    Text,
    Heading,
    IconButton,
    HStack,
    chakra,
    Wrap,
    WrapItem,
    Tag,
    VStack,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiEdit3 } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";

const MedicalHistory = ({ data }) => {
    return (
        <Card>
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={6}>
                <Heading>Medical History</Heading>
                <HStack>
                    <IconButton
                        size={"md"}
                        aria-label={"type"}
                        icon={<FiEdit3 />}
                        isRound
                        bg={'gray.300'}
                    />
                    <IconButton
                        size={"md"}
                        aria-label={"type"}
                        icon={<GrAdd />}
                        isRound
                        bg={'gray.300'}
                    />
                </HStack>
            </Flex>
            {data.map((med, index) => (
                <Box mb={6} key={index} >
                    <SimpleGrid columns={2} spacing={'20px'}>
                        <VStack justify={"space-between"} alignItems={'start'}>
                            <HStack justify={'space-around'}>
                                <Text color={'gray.500'} fontSize="md" textTransform={'uppercase'}>{med.date}</Text>
                                <Text color={'gray.500'} fontSize="md" textTransform={'uppercase'}>{med.doctor}</Text>
                            </HStack>
                            <Box>
                                <Wrap>
                                    {med.tags.map((tag, index) => (
                                        <WrapItem key={index}>
                                            <Tag bg={'teal.400'} variant="subtle" size="lg" borderRadius={'full'}>
                                                {tag.tag}
                                            </Tag>
                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </Box>
                        </VStack>
                        <Box>
                            <chakra.p color={'gray.500'}>
                                {med.note}
                            </chakra.p>
                        </Box>
                    </SimpleGrid>
                    <br />
                    <hr style={{ backgroundColor: "#CBD5E0", color: "#CBD5E0", height: 2 }} />
                </Box>
            ))}
        </Card>
    );
};

const Card = ({ children }) => (
    <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        w="full"
        alignItems="center"
        justifyContent="center"
        pos="relative"
    >
        <Box
            pos="absolute"
            top={0}
            w="full"
            h={1}
            bgColor={"#3e5b7f"}
            borderBottomLeftRadius={"lg"}
            borderBottomRightRadius={"lg"}
        ></Box>
        <Box
            mx="auto"
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
        >
            {children}
        </Box>
    </Flex>
);

export default MedicalHistory;
