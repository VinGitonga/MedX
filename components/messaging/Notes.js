import Card from "../common/Card";
import { Flex, Heading, Text, IconButton, Box } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { useState, useEffect, useContext } from "react";
import { useAuthUser } from "../../context";
import { db } from "../../firebase";
import {
    onSnapshot,
    collection,
    query,
    orderBy,
    where,
} from "@firebase/firestore";
import Spinning from "../common/Spinning";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const { authUser } = useAuthUser()

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(
            query(
                collection(db, "notes"),
                where("patientId", "==", authUser.id)
            ),
            (snapshot) => {
                setNotes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            }
        );
        return unsub;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [db]);
    console.log(notes)

    return (
        <Card>
            <Flex alignItems={"center"} justifyContent={"space-between"} mb={3}>
                <Heading>Notes</Heading>
                <IconButton
                    size={"md"}
                    aria-label={"add note"}
                    icon={<GrAdd />}
                    isRound
                    bg={"gray.300"}
                />
            </Flex>
            {loading ? (
                <Spinning />
            ) : (
                <>
                    {notes.map((note) => (
                        <Box key={note.id}>
                            <Flex alignItems={"center"} justifyContent={"space-between"}>
                                <Box mx={2}>
                                    <Text
                                        color={"gray.400"}
                                        fontWeight={600}
                                        fontSize="sm"
                                        textTransform={"uppercase"}
                                    >
                                        Date
                                    </Text>
                                    <Text color={"gray.900"} fontSize={"md"}>
                                        {note.date}
                                    </Text>
                                </Box>
                                <Box mx={2}>
                                    <Text
                                        color={"gray.400"}
                                        fontWeight={600}
                                        fontSize="sm"
                                        textTransform={"uppercase"}
                                    >
                                        Severity
                                    </Text>
                                    <Text color={"gray.900"} fontSize={"md"}>
                                        {note.severity}
                                    </Text>
                                </Box>
                            </Flex>
                            <Box mt={2}>
                                <Text
                                    color={"gray.400"}
                                    fontWeight={600}
                                    fontSize="sm"
                                    textTransform={"uppercase"}
                                >
                                    Added By
                                </Text>
                                <Text color={"gray.900"} fontSize={"md"}>
                                    Dr. {note.addedBy}
                                </Text>
                            </Box>
                            <Box mt={3}>
                                <Text>{note.description}</Text>
                            </Box>
                            <br />
                            <hr
                                style={{
                                    backgroundColor: "#cbd5e0",
                                    color: "#cbd5e0",
                                    height: 2,
                                }}
                            />
                        </Box>
                    ))}
                </>
            )}
        </Card>
    );
};

export default Notes;
