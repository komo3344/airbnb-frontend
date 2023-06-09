import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "../api";
import { IReviewList, IRoomDetail } from "../types";
import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>([`rooms`, roomPk], getRoom);
  const { data: reviewsData, isLoading: isReviewsLoading } =
    useQuery<IReviewList>([`rooms`, roomPk, `reviews`], getRoomReviews);

  return (
    <Box
      pb={40}
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Skeleton
        height={"43px"}
        width={data?.name ? `${data.name.length * 30}px` : "25%"}
        isLoaded={!isLoading}
      >
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt={8}
        rounded="xl"
        overflow={"hidden"}
        gap={2}
        height="50vh"
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h="100%" w="100%">
              {data?.photos && data.photos.length > 0 ? (
                <Image
                  objectFit={"cover"}
                  w="100%"
                  h="100%"
                  src={data?.photos[index]?.file}
                />
              ) : null}
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack width={"40%"} justifyContent={"space-between"} mt={10}>
        <VStack alignItems={"flex-start"}>
          <Skeleton isLoaded={!isLoading} height={"30px"}>
            <Heading noOfLines={1} fontSize={"2xl"}>
              {data?.owner.name}님이 호스팅하는 집 전체
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} height={"30px"}>
            <HStack justifyContent={"flex-start"} w="100%">
              <Text>
                {data?.toilets} toliet{data?.toilets === 1 ? "" : "s"}
              </Text>
              <Text>∙</Text>
              <Text>
                {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar name={data?.owner.name} size={"xl"} src={data?.owner.avatar} />
      </HStack>
      <Box mt={10}>
        <Skeleton isLoaded={!isReviewsLoading} w="15%">
          <Heading mb={5} fontSize={"2xl"}>
            <HStack>
              <FaStar /> <Text>{data?.rating}</Text>
              <Text>∙</Text>
              <Text>
                {reviewsData && reviewsData.count > 1 ? "reviews" : "review"}
              </Text>
            </HStack>
          </Heading>
        </Skeleton>
        <Container mt={16} maxW="container.lg" marginX="none">
          <Grid gap={10} templateColumns={"1fr 1fr"}>
            {reviewsData &&
              reviewsData.results.map((review, index) => (
                <VStack alignItems={"flex-start"} key={index}>
                  <HStack>
                    <Avatar
                      name={review.user.name}
                      src={review.user.avatar}
                      size="md"
                    />
                    <VStack spacing={0} alignItems={"flex-start"}>
                      <Heading fontSize={"md"}>{review.user.name}</Heading>
                      <HStack spacing={1}>
                        <FaStar size="12px" />
                        <Text>{review.rating}</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <Skeleton isLoaded={!isReviewsLoading}>
                    <Text>{review.payload}</Text>
                  </Skeleton>
                </VStack>
              ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
