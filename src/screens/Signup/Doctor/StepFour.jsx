import {
    SimpleGrid,
    useColorModeValue,
    Flex,
    FormLabel,
    Input,
    IconButton,
    HStack,
    Box,
    Select,
    Text,
    Avatar,
    Button,
    FormControl,
} from "@chakra-ui/react";
import { languages } from "../../../data/countries";
import { RiUploadCloudLine } from "react-icons/ri";
import { MdRemove, MdAdd } from 'react-icons/md'


const StepFour = ({
    formState,
    onValueChange,
    handleAddClick,
    handleRemoveClick,
    onArrValueChange,
    handleAddLanguage,
    handleLanguages,
    imagePickerRef,
    handleImage,
}) => {
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
            <FormControl>
                <FormLabel color={"gray.100"}>License</FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="License"
                    required="true"
                    color={"gray.100"}
                    value={formState.license}
                    onChange={(e) => onValueChange(e, "license")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Speciality</FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="Speciality"
                    required="true"
                    color={"gray.100"}
                    value={formState.speciality}
                    onChange={(e) => onValueChange(e, "speciality")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Sub-Speciality</FormLabel>
                <Input
                    mt={0}
                    type="text"
                    placeholder="Sub-Speciality"
                    required="true"
                    color={"gray.100"}
                    value={formState.subSpeciality}
                    onChange={(e) => onValueChange(e, "subSpeciality")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Education</FormLabel>
                {formState.educations.map((val, i) => (
                    <Box key={i}>
                        <Input
                            mt={0}
                            type="text"
                            placeholder="Education"
                            required="true"
                            color={"gray.100"}
                            value={val.education}
                            onChange={(e) =>
                                onArrValueChange(e, "educations", i, "education")
                            }
                        />
                        <HStack>
                            {formState.educations.length !== 1 && (
                                <IconButton
                                    icon={<MdRemove />}
                                    onClick={() => handleRemoveClick("educations", i)}
                                />
                            )}
                            {formState.educations.length - 1 === i && (
                                <IconButton
                                    icon={<MdAdd />}
                                    onClick={() =>
                                        formState.educations[i].education !== "" &&
                                        handleAddClick("educations", {
                                            education: "",
                                        })
                                    }
                                />
                            )}
                        </HStack>
                    </Box>
                ))}
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Years of Experience</FormLabel>
                <Input
                    mt={0}
                    type="number"
                    placeholder="Years of Experience"
                    required="true"
                    color={"gray.100"}
                    value={formState.yearsOfExperience}
                    onChange={(e) => onValueChange(e, "yearsOfExperience")}
                />
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Accreditations</FormLabel>
                {formState.accreditations.map((val, i) => (
                    <Box key={i}>
                        <Input
                            mt={0}
                            type="text"
                            placeholder="Accreditation"
                            required="true"
                            color={"gray.100"}
                            value={val.accreditation}
                            onChange={(e) =>
                                onArrValueChange(e, "accreditations", i, "accreditation")
                            }
                        />
                        <HStack>
                            {formState.accreditations.length !== 1 && (
                                <IconButton
                                    icon={<MdRemove />}
                                    onClick={() => handleRemoveClick("accreditations", i)}
                                />
                            )}
                            {formState.accreditations.length - 1 === i && (
                                <IconButton
                                    icon={<MdAdd />}
                                    onClick={() =>
                                        formState.accreditations[i].accreditation !== "" &&
                                        handleAddClick("accreditations", {
                                            accreditation: "",
                                        })
                                    }
                                />
                            )}
                        </HStack>
                    </Box>
                ))}
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Languages</FormLabel>
                {formState.languages.map((val, i) => (
                    <Box key={i}>
                        <Select
                            value={formState.languages[i]}
                            placeholder="Choose Language ..."
                            onChange={(e) => handleLanguages(e, i)}
                            color={"gray.100"}
                        >
                            {languages.map((country, i) => (
                                <option key={i} value={country}>
                                    {country}
                                </option>
                            ))}
                        </Select>
                        <HStack>
                            {formState.languages.length !== 1 && (
                                <IconButton
                                    icon
                                    onClick={() => handleRemoveClick("languages", i)}
                                />
                            )}
                            {formState.languages.length - 1 === i && (
                                <IconButton
                                    icon
                                    onClick={() =>
                                        formState.languages[i] !== "" &&
                                        handleAddLanguage("languages")
                                    }
                                />
                            )}
                        </HStack>
                    </Box>
                ))}
            </FormControl>
            <FormControl>
                <FormLabel color={"gray.100"}>Upload Profile Photo</FormLabel>
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
