import axios from "axios";

export const getCurrentUser = async () => {
  const backend_api = "http://localhost:5000/api";

  const response = await axios.get(`${backend_api}/auth/me`, {
    withCredentials: true,
  });
  return response.data;
};
