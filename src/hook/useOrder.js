import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
export default function useOrder() {
  return useContext(OrderContext);
}
