import { FaCamera, FaRegHeart, FaStar } from "react-icons/fa";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

interface IRoomProps {
  pk: number;
  imageUrl: string;
  name: string;
  city: string;
  country: string;
  rating: number;
  price: number;
  isOwner: boolean;
}

export default function Room({
  pk,
  imageUrl,
  name,
  city,
  country,
  rating,
  price,
  isOwner,
}: IRoomProps) {
  const navigate = useNavigate();
  const onCameraClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/rooms/${pk}/photos`);
  };
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <Link to={`rooms/${pk}`}>
      <VStack alignItems={"flex-start"}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
          <Image
            objectFit={"cover"}
            minH="280"
            maxH="280"
            minW="280"
            maxW="280"
            src={imageUrl}
          />
          <Button
            variant={"unstyled"}
            position="absolute"
            top={0}
            right={0}
            color="white"
            onClick={onCameraClick}
          >
            {isOwner ? <FaCamera size="20px" /> : <FaRegHeart size="20px" />}
          </Button>
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text display={"block"} as="b" noOfLines={1} fontSize="md">
              {name}
            </Text>
            <HStack
              _hover={{ color: "red.400" }}
              spacing={1}
              alignItems="center"
            >
              <FaStar size={12} />
              <Text fontSize={"sm"}>{rating}</Text>
            </HStack>
          </Grid>
          <Text noOfLines={1} fontSize={"sm"} color={gray}>
            {city}, {country}
          </Text>
        </Box>
        <Text fontSize={"sm"} color={gray}>
          <Text as="b">₩{price} /박</Text>
        </Text>
      </VStack>
    </Link>
  );
}
