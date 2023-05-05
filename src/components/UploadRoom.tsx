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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaBed, FaToilet, FaDollarSign } from "react-icons/fa";
import { getAmenities, getCategories } from "../api";
import { IAmenity, ICategory } from "../types";
import useHostOnlyPage from "./HostOnlyPage";
import ProtectedPage from "./ProtectedPage";

export default function UploadRoom() {
  useHostOnlyPage();
  const { data: amenities, isLoading: isAmenitiesLoading } = useQuery<
    IAmenity[]
  >(["amenities"], getAmenities);
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<
    ICategory[]
  >(["categories"], getCategories);

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
          <VStack spacing={10} as="form" mt={5}>
            <FormControl>
              <FormLabel>이름</FormLabel>
              <Input required type="text" />
              <FormHelperText>방 이름을 입력해주세요.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>나라</FormLabel>
              <Input required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>도시</FormLabel>
              <Input required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>주소</FormLabel>
              <Input required type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>가격</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaDollarSign />} />
                <Input type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>방</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaBed />} />
                <Input type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>화장실</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaToilet />} />
                <Input type="number" min={0} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>설명</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl>
              <Checkbox>반려동물 허용 여부</Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>방 종류</FormLabel>
              <Select placeholder="종류를 선택해주세요.">
                <option value="entire_place">숙소 전체</option>
                <option value="private_room">개인실</option>
                <option value="shared_room">공유실</option>
              </Select>
              <FormHelperText>
                어떤 종류의 숙소를 대여하실건가요?
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>방 카테고리</FormLabel>
              <Select placeholder="카테고리를 선택해주세요.">
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
            <FormControl>
              <FormLabel>Amenities</FormLabel>
              <Grid templateColumns={"1fr 1fr"} gap={5}>
                {amenities?.map((amenity) => (
                  <Box key={amenity.pk}>
                    <Checkbox>{amenity.name}</Checkbox>
                    <FormHelperText>{amenity.description}</FormHelperText>
                  </Box>
                ))}
              </Grid>
            </FormControl>
            <Button colorScheme={"red"} size="lg" w="100%">
              방 업로드
            </Button>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
