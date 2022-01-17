import React from 'react'
import {
    SimpleGrid,
    useColorModeValue,
    FormControl,
    FormLabel,
    Input,
    Select,
    Heading
} from "@chakra-ui/react";

const StepTwo = ({ formState, onValueChange }) => {
    const genderOptions = ["Male", "Female", "Others"];
    const titleOptions = ["Dr", "Mr", " Mrs", "Ms", "Miss", "Mx", "Rev", "Sir"];
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
                Basic Details
            </Heading>
            <FormControl>
                <FormLabel color={"gray.100"}>Title</FormLabel>
                <Select
                    placeholder="Choose Title ..."
                    value={formState.title}
                    onChange={(e) => onValueChange(e, "title")}
                    color={"gray.100"}
                    bg={'gray.900'}
                >
                    {titleOptions.map((title, i) => (
                        <option style={{background:'black'}} key={i} value={title}>
                            {title}
                        </option>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Firstname</FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="Firstname"
                    color={"gray.100"}
                    value={formState.firstname}
                    onChange={(e) => onValueChange(e, "firstname")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Lastname</FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="Lastname"
                    color={"gray.100"}
                    value={formState.lastname}
                    onChange={(e) => onValueChange(e, "lastname")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Gender</FormLabel>
                <Select
                    placeholder="Choose Gender ..."
                    value={formState.gender}
                    onChange={(e) => onValueChange(e, "gender")}
                    color={"gray.100"}
                    bg={'gray.900'}
                >
                    {genderOptions.map((gender, i) => (
                        <option style={{background:'black'}} key={i} value={gender}>
                            {gender}
                        </option>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Date Of Birth</FormLabel>
                <Input
                    mt={0}
                    type="date"
                    placeholder="DOB"
                    color={"gray.100"}
                    value={formState.dob}
                    onChange={(e) => onValueChange(e, "dob")}
                />
            </FormControl>
        </SimpleGrid>
    );
};

export default StepTwo;
