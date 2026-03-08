import axios from "axios";

export const getProducts = async (query) => {
  console.log(query)
  const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
  const response = await axios.get(`${backend_api}/products?${query}`);
  return response.data;
};

export const getProduct = async (id) => {
  const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
  console.log(id)
  const response = await axios.get(`${backend_api}/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
  const response = await axios.get(`${backend_api}/products/categories`);
  return response.data;
};
