import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack} from '@chakra-ui/react';
import {FaUser, FaLock} from 'react-icons/fa'
import SocialLogin from './SocialLogin';

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function LoginModal({isOpen, onClose}: LoginModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>로그인</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack>
                    <InputGroup>
                        <InputLeftElement
                            children={
                                <Box color={'gray.500'}>
                                    <FaUser />
                                </Box>
                            }
                        />
                        <Input variant={'filled'} placeholder='ID' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            children={
                                <Box color={'gray.500'}>
                                    <FaLock />
                                </Box>
                            }
                        />
                        <Input variant={'filled'} placeholder='PASSWORD' />
                    </InputGroup>
                </VStack>
            <Button mt={6} w={"100%"} colorScheme={'red'}>로그인</Button>
            <SocialLogin />
            </ModalBody>
        </ModalContent>
        </Modal>
    )
}