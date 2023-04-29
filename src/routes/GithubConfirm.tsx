import { Heading, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { githubLogIn } from "../api";

export default function GithubConfirm() {
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(githubLogIn, {
    onSuccess: () => {
      toast({
        status: "success",
        title: "안녕하세요!",
        position: "bottom-right",
        description: "방문해주셔서 감사합니다!",
      });
      queryClient.refetchQueries(["me"]);
      navigate("/");
    },
  });
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      mutation.mutate(code);
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);

  return (
    <VStack justifyContent={"center"} mt={40}>
      <Heading>Github 로그인중입니다.</Heading>
      <Text>잠시만 기다려주세요.</Text>
      <Spinner size="lg" />
    </VStack>
  );
}
