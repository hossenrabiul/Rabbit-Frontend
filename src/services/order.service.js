import axios from "axios";

export const createOrder = async (customer, items, total) => {
  try {
    const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    const { data } = await axios.post(
      `${backend_api}/cart/order`,
      { customer, items, total },
      {
        withCredentials: true,
      },
    );
    return data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const getOrders = async () => {
  try {
    // const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    const backend_api = "http://localhost:5000/api";
    const { data } = await axios.get(`${backend_api}/cart/order/`, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const getOrder = async (id) => {
  try {
    const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    const { data } = await axios.get(`${backend_api}/cart/order/${id}`, {
      withCredentials: true,
    });
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
