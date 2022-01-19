import {
    Box,
    SimpleGrid,
    GridItem,
    VisuallyHidden,
    Input,
    IconButton,
    Heading,
    Text,
} from "@chakra-ui/react";
import Card from "../common/Card";
import { SenderMsg, ReceiverMsg } from "./Message";
import { RiSendPlaneFill } from "react-icons/ri";
import { useAuthUser } from "../../context";
import {
    addDoc,
    collection,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { getMessages } from "../../utils/utils";


const Feed = ({ imageURL, userId }) => {
    const { authUser } = useAuthUser();
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() =>
        onSnapshot(
            query(collection(db, "messages"), orderBy("timestamp", "desc")),
            (snapshot) =>
                setMessages(
                    getMessages(
                        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
                        authUser.id,
                        userId
                    )
                )
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [db]);

    const sendMessage = () => {
        addDoc(collection(db, "messages"), {
            timestamp: serverTimestamp(),
            senderId: authUser.id, //userId is the id of the sender
            receiverId: userId,
            message: input,
            image: imageURL, //refers to the image of the recepient because
        });
        setInput("");
    };

    return (
        <Card>
            <Heading px={14} py={2}>
                Chats
            </Heading>
            <Box h={"70vh"} w={"full"} padding={"24px"} overflowY={"scroll"}>
                {messages.length > 0 ? (
                    messages.map((msg) =>
                        msg.senderId === authUser.id ? (
                            <SenderMsg image={authUser.image} text={msg.message} />
                        ) : (
                            <ReceiverMsg image={msg.image} text={msg.message} />
                        )
                    )
                ) : (
                    <Text>No new messages</Text>
                )}
            </Box>
            <SimpleGrid
                as="form"
                w={"full"}
                columns={12}
                spacing={3}
                pt={1}
                mx="auto"
                mt={3}
            >
                <GridItem as="label" colSpan={10}>
                    <VisuallyHidden>Message</VisuallyHidden>
                    <Input
                        mt={0}
                        size="lg"
                        type="email"
                        placeholder="Type a message..."
                        required="true"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <IconButton
                        icon={<RiSendPlaneFill />}
                        colorScheme={"teal"}
                        size={"lg"}
                        isRound
                        type="submit"
                        onClick={sendMessage}
                    />
                </GridItem>
            </SimpleGrid>
        </Card>
    );
};

export default Feed;
