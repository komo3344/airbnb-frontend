import {
  Box,
  Grid,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Skeleton,
  SkeletonText,
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
      <Box>
        <Skeleton rounded={"2xl"} h={280} mb={7} />
        <SkeletonText w={"50%"} noOfLines={3} />
      </Box>
      <Room />
    </Grid>
  );
}
