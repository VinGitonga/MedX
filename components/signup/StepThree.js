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
import { countries } from "../../utils/countries";

const StepThree = ({ formState, onValueChange }) => {
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
                Contact Details
            </Heading>
            <FormControl>
                <FormLabel color={"gray.100"}>Phone No</FormLabel>
                <Input
                    mt={0}
                    type="tel"
                    placeholder="Phone No"
                    required="true"
                    color={"gray.100"}
                    value={formState.phoneno}
                    onChange={(e) => onValueChange(e, "phoneno")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Street </FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="Street Name"
                    required="true"
                    color={"gray.100"}
                    value={formState.street}
                    onChange={(e) => onValueChange(e, "street")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>City</FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="City"
                    required="true"
                    color={"gray.100"}
                    value={formState.city}
                    onChange={(e) => onValueChange(e, "city")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Country</FormLabel>
                <Select
                    placeholder="Choose Country ..."
                    value={formState.country}
                    onChange={(e) => onValueChange(e, "country")}
                    color={"gray.100"}
                >
                    {countries.map((country, i) => (
                        <option key={i} style={{background:'black'}} value={country}>
                            {country}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </SimpleGrid>
    );
};

export default StepThree;
