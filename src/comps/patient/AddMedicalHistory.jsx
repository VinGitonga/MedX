import {
    SimpleGrid,
    FormControl,
    Input,
    FormLabel,
    IconButton,
    Button,
    Box,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { MdRemove, MdAdd } from "react-icons/md";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";
import { FiEdit3 } from 'react-icons/fi'
import { AuthContext, ModalContext, UserIdContext } from "../../context";


const AddMedicalHistory = () => {
    const [formState, setFormState] = useState({
        description: "",
        tags: [{ tag: "" }],
        date: "",
        addedBy: "",
        userId: "",
    });

    const { user } = useContext(AuthContext);
    const { open, setOpen } = useContext(ModalContext);
    const { userId } = useContext(UserIdContext)
    const [error, setError] = useState(null);

    const handleAddClick = (key, formFieldsObject) => {
        setFormState({
            ...formState,
            [key]: [...formState[key], formFieldsObject],
        });
    };

    const handleRemoveClick = (key, i) => {
        // Spread the value at the formState key into list
        const list = [...formState[key]];

        // at index i, remove one item
        list.splice(i, 1);
        setFormState({
            ...formState,
            [key]: list,
        });
    };
    const onArrValueChange = (e, key, i, subKey) => {
        const list = [...formState[key]];

        list[i][subKey] = e.target.value;

        setFormState({
            ...formState,
            [key]: list,
        });

        setError(null);
    };

    const deleteKeys = (key, subKey) => {
        const newArr = [];
        formState[key].forEach((el) => {
            newArr.push(el[subKey]);
        });
        return newArr;
    };

    const sanitizedForm = () => {
        return {
            description: formState.description,
            date: new Date().toISOString().slice(0, 10),
            tags: deleteKeys("tags", "tag"),
            addedBy: user.data.firstname,
            userId: userId,
        };
    };

    const handleChange = (e, key) => {
        setFormState({
            ...formState,
            [key]: e.target.value,
        });
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        if (!formState.description) {
            setError("Please fill the ailment description");
            return null;
        } else if (!formState.tags) {
            setError("Please fill all tags inputs");
        } else {
            if (!error) {
                // do firebase add docs
                await addDoc(collection(db, "medicalhistory"), sanitizedForm());
                setOpen(false);
            }
        }
    };

    return (
        <Modal isOpen={open} onClose={setOpen} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Medical History</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <SimpleGrid
                        columns={1}
                        px={6}
                        py={4}
                        spacing={4}
                        borderBottom="solid 1px"
                    >
                        <FormControl>
                            <FormLabel>Description of Ailment</FormLabel>
                            <Input
                                mt={0}
                                type="text"
                                placeholder={"ailment description"}
                                value={formState.description}
                                onChange={(e) => handleChange(e, "description")}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Ailment Tags</FormLabel>
                            {formState.tags.map((val, i) => (
                                <Box key={i}>
                                    <Input
                                        mt={0}
                                        type="text"
                                        placeholder={"Chest Pains"}
                                        value={val.tag}
                                        onChange={(e) => onArrValueChange(e, "tags", i, "tag")}
                                    />
                                    <HStack>
                                        {formState.tags.length !== 1 && (
                                            <IconButton
                                                icon={<MdRemove />}
                                                onClick={() => handleRemoveClick("tags", i)}
                                            />
                                        )}
                                        {formState.tags.length - 1 === i && (
                                            <IconButton
                                                icon={<MdAdd />}
                                                onClick={() =>
                                                    formState.tags[i].tag !== "" &&
                                                    handleAddClick("tags", {
                                                        tag: "",
                                                    })
                                                }
                                            />
                                        )}
                                    </HStack>
                                </Box>
                            ))}
                        </FormControl>
                        <Button
                            leftIcon={<FiEdit3 />}
                            colorScheme="teal"
                            w="full"
                            py={2}
                            type="submit"
                            onClick={clickSubmit}
                        >
                            Add
                        </Button>
                    </SimpleGrid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddMedicalHistory;
