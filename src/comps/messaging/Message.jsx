import {
    Text,
    chakra,
    Avatar,
    SimpleGrid,
    GridItem,
    Box
} from '@chakra-ui/react'

const Message = ({ isSender }) => isSender ? <SenderMsg /> : <ReceiverMsg />;

const SenderMsg = () => (
    <Box w={'50%'} mr={'auto'}>
        <SimpleGrid
            w={11 / 12}
            columns={6}
            mx={'auto'}
        >
            <GridItem colSpan={1}>
                <Avatar
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F09%2F02%2FDU-RF-0209r-crop.jpg"
                    size={'sm'}
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Text textAlign="left" fontSize={'sm'}>
                    We offer <chakra.span fontWeight="bold">50%</chakra.span> off
                    of for all students and universities. Please get in touch with
                    us and provide proof of your status.
                </Text>
            </GridItem>
        </SimpleGrid>
    </Box>
)
const ReceiverMsg = () => (
    <Box w={'50%'} ml={'auto'}>
        <SimpleGrid
            w={11 / 12}
            columns={6}
            mx={'auto'}
        >
            <GridItem colSpan={1}>
                <Avatar
                    src="https://firstcrackfantasy.com/wp-content/uploads/1983/10/gordon.png"
                    size={'sm'}
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Text textAlign="left" fontSize={'sm'}>
                    We offer <chakra.span fontWeight="bold">50%</chakra.span> off
                    of for all students and universities. Please get in touch with
                    us and provide proof of your status.
                </Text>
            </GridItem>
        </SimpleGrid>
    </Box>
)

export default Message;
