import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack} from '@chakra-ui/react';
import {FaUser, FaLock, FaEnvelope, FaUserTie} from 'react-icons/fa'
import SocialLogin from './SocialLogin';

interface SignUpModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function SignUpModal({isOpen, onClose}: SignUpModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>회원가입</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack>
                <InputGroup>
                        <InputLeftElement
                            children={<Box color={'gray.500'}><FaUserTie /></Box>}
                        />
                        <Input variant={'filled'} placeholder='Name' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            children={<Box color={'gray.500'}><FaEnvelope /></Box>}
                        />
                        <Input variant={'filled'} placeholder='Email' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            children={<Box color={'gray.500'}><FaUser /></Box>}
                        />
                        <Input variant={'filled'} placeholder='ID' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            children={<Box color={'gray.500'}><FaLock /></Box>}
                        />
                        <Input variant={'filled'} placeholder='PASSWORD' />
                    </InputGroup>
                </VStack>
            <Button mt={6} w={"100%"} colorScheme={'red'}>회원가입</Button>
            <SocialLogin />
            </ModalBody>
        </ModalContent>
        </Modal>
    )
}