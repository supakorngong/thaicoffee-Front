import { toast } from "react-toastify";
import axios from "../config/axios";

const OrderApi = {};
OrderApi.createOrder = async (data) => {
  try {
    await axios.post("/order", data);
  } catch (err) {
    toast.error(err.message);
  }
};
OrderApi.getOrderByUserId = async () => {
  try {
    const orderDetail = await axios.get("/order/items");

    return orderDetail;
  } catch (err) {
    toast.error(err.message);
  }
};
OrderApi.updateStatus = async (orderId, status) => {
  try {
    await axios.patch(`/order/${orderId}`, { status: status });
  } catch (err) {
    toast.error(err.message);
  }
};

export default OrderApi;
