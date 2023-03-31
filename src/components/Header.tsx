import { Box, Button, HStack, IconButton, LightMode, useColorMode, useColorModeValue, useDisclosure} from '@chakra-ui/react';
import {FaAirbnb, FaMoon, FaSun} from 'react-icons/fa'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export default function Header() {
    const {isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose} = useDisclosure()
    const {isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose} = useDisclosure()
    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.300");
    const Icon = useColorModeValue(FaMoon, FaSun);
    return (
        <HStack paddingX={40} paddingY={5} justifyContent={'space-between'} borderBottomWidth={1}>
            <Box color={logoColor}>
                <FaAirbnb size={48} />
            </Box>
            <HStack spacing={2}>
                <IconButton onClick={toggleColorMode} variant='ghost' aria-label='다크모드' icon={<Icon />} />
                <Button onClick={onLoginOpen}>로그인</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme={"red"}>
                        회원가입
                    </Button>
                </LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </HStack>
    )
}