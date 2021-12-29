import { useContext } from 'react'
import { MessageContext } from '../context'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from '@chakra-ui/react'


const FlashMessage = () => {
    const { flashMessage } = useContext(MessageContext)


    const message = () => (
        <Alert status={flashMessage.status}>
            <AlertIcon />
            <AlertTitle mr={2}>{flashMessage.title}</AlertTitle>
            <AlertDescription>{flashMessage.description}</AlertDescription>
            <CloseButton position='absolute' right='8px' top='8px' />
        </Alert>
    )

    return flashMessage ? message() : null;
}

export default FlashMessage;