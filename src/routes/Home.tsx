import { Box, Grid, Text, Image, VStack, HStack } from '@chakra-ui/react';
import {FaStar} from 'react-icons/fa'

export default function Home() {
    return <Grid px={40} mt={10} columnGap={4} rowGap={8} templateColumns={"repeat(5, 1fr)"}>
        <VStack alignItems={"flex-start"}>
            <Box overflow={"hidden"} mb={3} rounded="3xl">
                <Image
                    h="280"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-47181423/original/39c9d4e7-78d0-4807-9f0d-3029d987d02a.jpeg?im_w=720"
                />
            </Box>
            <Box>
                <Grid gap={2} gridTemplateColumns={'6fr 1fr'}>
                    <Text display={"block"} as="b" noOfLines={1} fontSize={"md"}>
                        Ganggu-myeon, Yeongdeok-gun, 경상북도, 한국
                    </Text>
                    <HStack spacing={1}>
                        <FaStar size={15} />
                        <Text>5.0</Text>
                    </HStack>
                </Grid>
                <Text fontSize={"sm"} color={"gray.600"}>
                    대한민국 경상북도
                </Text>
            </Box>
            <Text fontSize={"sm"} color={"gray.600"}>
                <Text as="b">₩286,200</Text> /박
            </Text>

        </VStack>

    </Grid>;
}