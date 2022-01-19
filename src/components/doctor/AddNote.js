import { useState, useContext } from "react";
import { UserIdContext, ModalContext } from "../../context";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";
import { FiEdit3 } from "react-icons/fi";
import {
    SimpleGrid,
    FormControl,
    Textarea,
    FormLabel,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Select
} from "@chakra-ui/react";
import { useAuthUser } from '../../context'

const AddNote = () => {
    const [severity, setSeverity] = useState(null);
    const [description, setDescription] = useState(null);
    const [error, setError] = useState(null);

    const { authUser: user } = useAuthUser()
    const { noteModalOpen, setNoteModalOpen } = useContext(ModalContext);
    const { userId } = useContext(UserIdContext)

    const sanitizedForm = () => {
        return {
            patientId: userId, //supposed to be userId
            addedBy: user.firstname,
            severity: severity,
            description: description,
            date: new Date().toISOString().slice(0, 10)
        };
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        if (!severity) {
            setError("Please Select Severity");
            return null;
        } else if (!description) {
            setError("Please add some description");
            return null;
        } else {
            if (!error) {
                // do firebase add docs
                await addDoc(collection(db, "notes"), sanitizedForm());
                setNoteModalOpen(false);
            }
        }
    };

    return (
        <Modal isOpen={noteModalOpen} onClose={setNoteModalOpen} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Note</ModalHeader>
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
                            <FormLabel>Severity</FormLabel>
                            <Select
                                placeholder="Severity Level ..."
                                value={severity}
                                onChange={(e) => setSeverity(e.target.value)}
                            >
                                <option value="Minimal">Minimal</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Severe">Severe</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder='Type something'
                                size='md'
                            />
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
                    <Button onClick={() => setNoteModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddNote;
