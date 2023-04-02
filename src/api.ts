import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1";

export default async function getRooms() {
  const response = await axios.get(`${BASE_URL}/rooms/`);
  return response.data;
}
