import axios from "../config/axios";

const paymentApi = {};

paymentApi.checkout = (input, cost) => {
  const response = axios.post("/payment/checkout", { input, cost });
  return response;
};

export default paymentApi;
