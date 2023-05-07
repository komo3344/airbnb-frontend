import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaBed, FaToilet, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  getAmenities,
  getCategories,
  IUploadRoomVariables,
  uploadRoom,
} from "../api";
import { IAmenity, ICategory, IRoomDetail } from "../types";
import useHostOnlyPage from "./HostOnlyPage";
import ProtectedPage from "./ProtectedPage";

export default function UploadRoom() {
  useHostOnlyPage();
  const { data: amenities } = useQuery<IAmenity[]>(["amenities"], getAmenities);
  const { data: categories } = useQuery<ICategory[]>(
    ["categories"],
    getCategories
  );
  const { register, handleSubmit } = useForm<IUploadRoomVariables>();
  const navigate = useNavigate();
  const toast = useToast();
  const mutation = useMutation(uploadRoom, {
    onSuccess: (data: IRoomDetail) => {
      toast({
        status: "success",
        title: "방이 업로드 되었습니다.",
        position: "bottom-right",
      });
      navigate(`/rooms/${data.id}`);
    },
  });
  const onSubmit = (data: IUploadRoomVariables) => {
    mutation.mutate(data);
  };

  return (
    <ProtectedPage>
      <Box
        pb={40}
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
      >
        <Container>
          <Heading textAlign={"center"}>방 업로드</Heading>
          <VStack
            spacing={10}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            mt={5}
          >
            {/* ===========================이름=========================== */}
            <FormControl>
              <FormLabel>이름</FormLabel>
              <Input
                {...register("name", { required: true })}
                required
                type="text"
              />
              <FormHelperText>방 이름을 입력해주세요.</FormHelperText>
            </FormControl>
            {/* ===========================나라=========================== */}
            <FormControl>
              <FormLabel>나라</FormLabel>
              <Input
                {...register("country", { required: true })}
                required
                type="text"
              />
            </FormControl>
            {/* ===========================도시=========================== */}
            <FormControl>
              <FormLabel>도시</FormLabel>
              <Input
                {...register("city", { required: true })}
                required
                type="text"
              />
            </FormControl>
            {/* ===========================주소=========================== */}
            <FormControl>
              <FormLabel>주소</FormLabel>
              <Input
                {...register("address", { required: true })}
                required
                type="text"
              />
            </FormControl>
            {/* ===========================가격=========================== */}
            <FormControl>
              <FormLabel>가격</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaDollarSign />} />
                <Input
                  {...register("price", { required: true })}
                  type="number"
                  min={0}
                />
              </InputGroup>
            </FormControl>
            {/* ===========================방 개수=========================== */}
            <FormControl>
              <FormLabel>방</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaBed />} />
                <Input
                  {...register("rooms", { required: true })}
                  type="number"
                  min={0}
                />
              </InputGroup>
            </FormControl>
            {/* ===========================화장실=========================== */}
            <FormControl>
              <FormLabel>화장실</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaToilet />} />
                <Input
                  {...register("toilets", { required: true })}
                  type="number"
                  min={0}
                />
              </InputGroup>
            </FormControl>
            {/* ===========================방 설명=========================== */}
            <FormControl>
              <FormLabel>설명</FormLabel>
              <Textarea {...register("description", { required: true })} />
            </FormControl>
            {/* ===========================반려동물 허용 여부=========================== */}
            <FormControl>
              <Checkbox {...register("pet_friendly", { required: false })}>
                반려동물 허용 여부
              </Checkbox>
            </FormControl>
            {/* ===========================방 종류=========================== */}
            <FormControl>
              <FormLabel>방 종류</FormLabel>
              <Select
                {...register("kind", { required: true })}
                placeholder="종류를 선택해주세요."
              >
                <option value="entire_place">숙소 전체</option>
                <option value="private_room">개인실</option>
                <option value="shared_room">공유실</option>
              </Select>
              <FormHelperText>
                어떤 종류의 숙소를 대여하실건가요?
              </FormHelperText>
            </FormControl>
            {/* ===========================방 카테고리=========================== */}
            <FormControl>
              <FormLabel>방 카테고리</FormLabel>
              <Select
                {...register("category", { required: true })}
                placeholder="카테고리를 선택해주세요."
              >
                {categories?.map((category) => (
                  <option key={category.pk} value={category.pk}>
                    {category.name}
                  </option>
                ))}
              </Select>
              <FormHelperText>
                어떤 카테고리의 숙소를 대여하실건가요?
              </FormHelperText>
            </FormControl>
            {/* ===========================편의 시설=========================== */}
            <FormControl>
              <FormLabel>편의시설</FormLabel>
              <Grid templateColumns={"1fr 1fr"} gap={5}>
                {amenities?.map((amenity) => (
                  <Box key={amenity.pk}>
                    <Checkbox
                      value={amenity.pk}
                      {...register("amenities", { required: false })}
                    >
                      {amenity.name}
                    </Checkbox>
                    <FormHelperText>{amenity.description}</FormHelperText>
                  </Box>
                ))}
              </Grid>
            </FormControl>
            {mutation.isError ? (
              <Text color="red.500">잘못된 값을 보냈습니다.</Text>
            ) : null}
            <Button
              type="submit"
              isLoading={mutation.isLoading}
              colorScheme={"red"}
              size="lg"
              w="100%"
            >
              방 업로드
            </Button>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
