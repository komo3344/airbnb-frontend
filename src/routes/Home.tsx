import {
  Box,
  Grid,
  Text,
  Image,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      px={40}
      mt={10}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {[
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2,
      ].map((index) => (
        <Room key={index} />
      ))}
      <VStack alignItems={"flex-start"}>
        <Box position={"relative"} overflow={"hidden"} mb={3} rounded="3xl">
          <Image
            h="280"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47181423/original/39c9d4e7-78d0-4807-9f0d-3029d987d02a.jpeg?im_w=720"
          />
          <Button
            variant={"unstyled"}
            position={"absolute"}
            top={0}
            right={0}
            color="white"
          >
            <FaRegHeart size={"20px"} />
          </Button>
        </Box>
        <Box>
          <Grid gap={2} gridTemplateColumns={"6fr 1fr"}>
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
    </Grid>
  );
}
