import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaBed, FaMoneyBill, FaToilet, FaDollarSign } from "react-icons/fa";
import useHostOnlyPage from "./HostOnlyPage";
import ProtectedPage from "./ProtectedPage";

export default function UploadRoom() {
  useHostOnlyPage();
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
          <VStack spacing={5} as="form" mt={5}>
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
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
