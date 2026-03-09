import axios from "axios";

export const getCart = async () => {
  try {
    const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    const { data } = await axios.get(`${backend_api}/cart`, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const addToCart = async (productId, quantity = 1) => {
  // console.log(productId);
  try {
    const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    // const backend_api = "http://localhost:5000/api";
    const { data } = await axios.post(
      `${backend_api}/cart`,
      {
        productId,
        quantity,
      },
      {
        withCredentials: true,
      },
    );
    return data;
  } catch (error) {
    console.error("Error adding to cart:::",  error.response.data.message);
    throw error;
  }
};

export const updateCartItem = async (itemId, quantity) => {
  try {
    const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    const { data } = await axios.put(
      `${backend_api}/cart/${itemId}`,
      {
        quantity,
      },
      { withCredentials: true },
    );
    return data.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

export const removeFromCart = async (itemId) => {
  try {
    const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    const { data } = await axios.delete(`${backend_api}/cart/${itemId}`, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    const backend_api = "https://rabbit-backend-1vcy.onrender.com/api";
    const { data } = await axios.delete(`${backend_api}/cart`, {
      withCredentials: true,
    });
    return data.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};
