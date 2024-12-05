import axios from "../config/axios";
import ProductApi from "./Product";

const paymentApi = {};

paymentApi.checkout = async (input, cost) => {
  const response = await axios.post("/payment/checkout", { input, cost });
  await ProductApi.updateStock(input);

  return response;
};

export default paymentApi;
