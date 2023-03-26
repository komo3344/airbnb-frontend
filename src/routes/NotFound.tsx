import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack bg="gray.100" justifyContent={"center"} minHeight="100vh">
      <Heading>Page not found.</Heading>
      <Text>페이지를 찾을 수 없습니다.</Text>
      <Link to="/">
        <Button colorScheme={"red"} variant={"link"}>
          홈으로 &rarr;
        </Button>
      </Link>
    </VStack>
  );
}