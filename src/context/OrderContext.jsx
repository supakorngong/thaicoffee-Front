import { useState } from "react";
import { createContext } from "react";
import OrderApi from "../api/Order";
import { useEffect } from "react";
import { Children } from "react";
import { getAccessToken } from "../utils/localStorage";
import useAuth from "../hook/useAuth";
import useProduct from "../hook/useProduct";

export const OrderContext = createContext();
export default function OrderContextProvider({ children }) {
  const { token } = useAuth();

  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const token = getAccessToken();
    console.log("this is token", token);
    if (getAccessToken()) {
      fetchOrder();
    }
    if (!getAccessToken()) {
      setOrderDetail([]);
    }
  }, [token]);

  const fetchOrder = async () => {
    try {
      const orderDetails = await OrderApi.getOrderByUserId();
      // console.log("i am ironman", orderDetails);
      const sortedOrder = orderDetails.data.sort((a, b) => b.order_id - a.order_id);
      setOrderDetail(sortedOrder);
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log("i am spiderman", orderDetail);

  // useEffect(() => {
  //   fetch();
  // }, []);

  return <OrderContext.Provider value={{ orderDetail, fetchOrder }}>{children}</OrderContext.Provider>;
}
