import React from 'react'
import {
    SimpleGrid,
    useColorModeValue,
    FormControl,
    Box,
    Select,
    HStack,
    IconButton,
    Input,
    Heading,
    FormLabel,
    Flex,
    Avatar,
    Text,
    Button
} from "@chakra-ui/react";

import { MdRemove, MdAdd } from 'react-icons/md'
import { RiUploadCloudLine } from 'react-icons/ri'

const StepFour = ({
    formState,
    onValueChange,
    handleAddClick,
    handleRemoveClick,
    onArrValueChange,
    imagePickerRef,
    handleImage
}) => {
    const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const severityOptions = ["Minimal", "Moderate","Severe"];
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
            <Heading mb={3} color={'whiteAlpha.200'}>
                Medical Conditions
            </Heading>
            <FormControl>
                <FormLabel color={"gray.100"}>BloodType</FormLabel>
                <Select
                    placeholder="Choose BloodType ..."
                    value={formState.bloodType}
                    onChange={(e) => onValueChange(e, "bloodType")}
                    color={"gray.100"}
                >
                    {bloodTypes.map((bloodType, i) => (
                        <option key={i} style={{ background: 'black' }} value={bloodType}>
                            {bloodType}
                        </option>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Allergies</FormLabel>
                {formState.allergies.map((val, i) => (
                    <Box key={i}>
                        <Input
                            mt={0}
                            type="text"
                            placeholder="Allergy"
                            required="true"
                            color={"gray.100"}
                            value={val.name}
                            onChange={(e) => onArrValueChange(e, "allergies", i, "name")}
                        />
                        <Select
                            value={val.severity}
                            placeholder="Severeness ..."
                            onChange={(e) => onArrValueChange(e, "allergies", i, "severity")}
                            color={"gray.100"}
                        >
                            {severityOptions.map((item, i) => (
                                <option key={i} style={{ background: 'black' }} value={item}>
                                    {item}
                                </option>
                            ))}
                        </Select>
                        <HStack>
                            {formState.allergies.length !== 1 && (
                                <IconButton
                                    icon={<MdRemove />}
                                    isRound
                                    size={'md'}
                                    onClick={() => handleRemoveClick("allergies", i)}
                                />
                            )}
                            {formState.allergies.length - 1 === i && (
                                <IconButton
                                    icon={<MdAdd />}
                                    isRound
                                    size={'md'}
                                    onClick={() =>
                                        formState.allergies[i].allergy !== "" &&
                                        handleAddClick("allergies", {
                                            name: "",
                                            severity: "",
                                        })
                                    }
                                />
                            )}
                        </HStack>
                    </Box>
                ))}
            </FormControl>
            <FormControl>
                <FormLabel color={'gray.100'}>Weight</FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="Your Weight (kg)"
                    required="true"
                    color={"gray.100"}
                    value={formState.weight}
                    onChange={(e) => onValueChange(e, "weight")}
                />
            </FormControl>
            <FormControl>
                {formState.image ? (
                    <Flex>
                        <Avatar src={formState.image} />
                        <Text ml={2}>Your Image</Text>
                    </Flex>
                ) : (
                    <Button
                        onClick={() => imagePickerRef.current.click()}
                        leftIcon={<RiUploadCloudLine />}
                        colorScheme={"teal"}
                        variant={"solid"}
                    >
                        Upload Image
                    </Button>
                )}
                <Input
                    mt={0}
                    type="file"
                    hidden
                    color={"gray.100"}
                    onChange={(e) => handleImage(e)}
                    ref={imagePickerRef}
                />
            </FormControl>
        </SimpleGrid>
    );
};

export default StepFour;
