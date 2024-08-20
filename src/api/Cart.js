import axios from "../config/axios";

const CartApi = {};
CartApi.addToCart = (product) => {
  const response = axios.post("/cart", product);
  return response;
};

CartApi.getCartData = () => {
  const response = axios.get("/cart");
  return response;
};

CartApi.deleteCartById = (cartId) => {
  return axios.delete(`/cart/${cartId}`);
};

export default CartApi;
