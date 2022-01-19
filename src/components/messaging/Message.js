import {
    Text,
    Avatar,
    SimpleGrid,
    GridItem,
    Box
} from '@chakra-ui/react'


const SenderMsg = ({ image, text }) => (
    <Box w={'50%'} mr={'auto'}>
        <SimpleGrid
            w={11 / 12}
            columns={6}
            mx={'auto'}
        >
            <GridItem colSpan={1}>
                <Avatar
                    src={image}
                    size={'sm'}
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Text textAlign="left" fontSize={'sm'}>
                    {text}
                </Text>
            </GridItem>
        </SimpleGrid>
    </Box>
)
const ReceiverMsg = ({ image, text }) => (
    <Box w={'50%'} ml={'auto'}>
        <SimpleGrid
            w={11 / 12}
            columns={6}
            mx={'auto'}
        >
            <GridItem colSpan={1}>
                <Avatar
                    src={image}
                    size={'sm'}
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Text textAlign="left" fontSize={'sm'}>
                    {text}
                </Text>
            </GridItem>
        </SimpleGrid>
    </Box>
)

export { SenderMsg, ReceiverMsg }

// export default Message;
