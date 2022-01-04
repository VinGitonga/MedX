import { useState, useContext } from "react";
import { AuthContext, UserIdContext, ModalContext } from "../../context";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";
import { FiEdit3 } from "react-icons/fi";
import {
    SimpleGrid,
    FormControl,
    Input,
    FormLabel,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";

const AddAppointment = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [error, setError] = useState(null);

    const { user } = useContext(AuthContext);
    const { userId } = useContext(UserIdContext);
    const { open, setOpen } = useContext(ModalContext);

    const sanitizedForm = () => {
        return {
            patientId: user.id, // the current user in the system is setting an appointment which is a patient and the user object is currently stored in global state
            doctorId: userId, // the patient is setting an appointment in doctor profile and doctor id is stored in global state
            date: date,
            time: time,
        };
    };

    const clickSubmit = async (e) => {
        e.preventDefault();
        if (!date) {
            setError("Please fill the appointment date");
            return null;
        } else if (!time) {
            setError("Please fill the appointment time");
            return null;
        } else {
            if (!error) {
                // do firebase add docs
                await addDoc(collection(db, "appointments"), sanitizedForm());
                setOpen(false);
            }
        }
    };

    return (
        <Modal isOpen={open} onClose={setOpen} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add an Appointment</ModalHeader>
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
                            <FormLabel>Date of the Appointment</FormLabel>
                            <Input
                                mt={0}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Time of Appointment</FormLabel>
                            <Input
                                mt={0}
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
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
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddAppointment;
