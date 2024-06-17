import axios from "../config/axios";

const OrderApi = {};
OrderApi.createOrder = async (data) => {
  try {
    await axios.post("/order", data);
  } catch (err) {
    console.log(err.message);
  }
};
OrderApi.getOrderByUserId = async () => {
  try {
    const orderDetail = await axios.get("/order/items");
    return orderDetail;
  } catch (err) {
    console.log(err.message);
  }
};
OrderApi.updateStatus = async (orderId, statuss) => {
  try {
    await axios.patch(`/order/${orderId}`, { status: statuss });
  } catch (err) {
    console.log(err.message);
  }
};

export default OrderApi;
