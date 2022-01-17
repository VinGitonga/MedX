import Card from '../common/Card'
import {
    Flex,
    Heading,
    Text,
    IconButton,
    Box
} from '@chakra-ui/react'
import { GrAdd } from "react-icons/gr";
import { useContext } from 'react'
import { ModalContext } from '../../context'

const Notes = () => {
    const { setNoteModalOpen } = useContext(ModalContext)
    return (
        <Card>
            <Flex alignItems={'center'} justifyContent={'space-between'} mb={3}>
                <Heading>Notes</Heading>
                <IconButton
                    size={"md"}
                    aria-label={"add note"}
                    icon={<GrAdd />}
                    isRound
                    bg={"gray.300"}
                    onClick={() => setNoteModalOpen(true)}
                />
            </Flex>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSize='sm' textTransform={'uppercase'}>Date</Text>
                    <Text color={'gray.900'} fontSize={'md'}>15/12/2021</Text>
                </Box>
                <Box mx={2}>
                    <Text color={'gray.400'} fontWeight={600} fontSize='sm' textTransform={'uppercase'}>Severity</Text>
                    <Text color={'gray.900'} fontSize={'md'}>Moderate</Text>
                </Box>
            </Flex>
            <Box mt={3}>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas sapiente debitis in officiis impedit tempore? Aliquid nobis quibusdam quaerat odio voluptatum eum necessitatibus dolorem ipsum dolore minus est doloremque quia tenetur harum soluta ad ullam corporis dolorum eaque inventore laudantium libero, quo commodi. Voluptatem ipsum alias quo facere laudantium!
                </Text>
            </Box>
        </Card>
    )
}

export default Notes
