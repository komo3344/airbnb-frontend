import { Box, Button, HStack, IconButton, useDisclosure} from '@chakra-ui/react';
import {FaAirbnb, FaMoon} from 'react-icons/fa'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export default function Header() {
    const {isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose} = useDisclosure()
    const {isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose} = useDisclosure()
    return (
        <HStack paddingX={10} paddingY={5} justifyContent={'space-between'} borderBottomWidth={1}>
            <Box color={"red.500"}>
                <FaAirbnb size={48} />
            </Box>
            <HStack spacing={2}>
                <IconButton variant='ghost' aria-label='다크모드' icon={<FaMoon />} />
                <Button onClick={onLoginOpen}>로그인</Button>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>회원가입</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </HStack>
    )
}