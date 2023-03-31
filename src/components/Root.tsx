import { Box, Button, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import {FaAirbnb} from 'react-icons/fa'

export default function Root() {
    return (
        <Box>
            <HStack paddingX={10} paddingY={5} justifyContent={'space-between'} borderBottomWidth={1}>
                <Box color={"red.500"}>
                    <FaAirbnb size={48} />
                </Box>
                <HStack spacing={2}>
                    <Button>로그인</Button>
                    <Button colorScheme={"red"}>회원가입</Button>
                </HStack>
            </HStack>
            <Outlet />
        </Box>
    )
}