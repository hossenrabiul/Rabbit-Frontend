import axios from "axios";

export const getCurrentUser = async () => {
  const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";

  const response = await axios.get(`${backend_api}/auth/me`, {
    withCredentials: true,
  });
  // console.log(response);
  return response.data;
};
