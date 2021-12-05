import { Box, SimpleGrid, GridItem, VisuallyHidden, Input, IconButton } from '@chakra-ui/react'
import { Card } from '../patient'
import Message from './Message'
import { RiSendPlaneFill } from 'react-icons/ri'

const Feed = () => {
    return (
        <Card>
            <Box h={'70vh'} w={'full'} padding={'24px'} overflowY={'scroll'}>
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
                <Message />
                <Message isSender />
            </Box>
            <SimpleGrid
                as="form"
                w={'full'}
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
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <IconButton
                        icon={<RiSendPlaneFill />}
                        colorScheme={'teal'}
                        size={'lg'}
                        isRound
                    />
                </GridItem>
            </SimpleGrid>
        </Card>
    )
}

export default Feed
