import { useState } from "react";
import { createContext } from "react";
import OrderApi from "../api/Order";
import { useEffect } from "react";

import { getAccessToken } from "../utils/localStorage";
import useAuth from "../hook/useAuth";
import { toast } from "react-toastify";

export const OrderContext = createContext();
export default function OrderContextProvider({ children }) {
  const { token } = useAuth();

  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const token = getAccessToken();
    // console.log("this is token", token);
    if (token) {
      fetchOrder();
    }
    if (!token) {
      setOrderDetail([]);
    }
  }, [token]);

  const fetchOrder = async () => {
    try {
      const orderDetails = await OrderApi.getOrderByUserId();
      const sortedOrder = orderDetails.data.sort((a, b) => b.order_id - a.order_id);
      setOrderDetail(sortedOrder);
    } catch (err) {
      toast.err(err.message);
    }
  };

  return <OrderContext.Provider value={{ orderDetail, fetchOrder }}>{children}</OrderContext.Provider>;
}
