import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaComment } from "react-icons/fa";

export default function SocialLogin() {
  const kakaoParams = {
    client_id: "483f1759e6da568fa36ef312e6ea4396",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
  return (
    <Box mb={4}>
      <HStack marginY={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=3429bbb417261e7ad92f&scope=read:user,user:email"
          w={"100%"}
          colorScheme={"gray"}
          leftIcon={<FaGithub />}
        >
          Github로 로그인하기
        </Button>
        <Button
          as="a"
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w={"100%"}
          colorScheme={"yellow"}
          leftIcon={<FaComment />}
        >
          Kakao로 로그인하기
        </Button>
      </VStack>
    </Box>
  );
}
