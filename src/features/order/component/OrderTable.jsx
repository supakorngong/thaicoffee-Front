import { useEffect } from "react";
import OrderApi from "../../../api/Order";
import Button from "../../../components/Button";
import useOrder from "../../../hook/useOrder";
import useCart from "../../../hook/useCart";
import { toast } from "react-toastify";

export default function OrderTable({ el, index }) {
  const { fetchOrder } = useOrder();
  const { order } = useCart();
  useEffect(() => {
    fetchOrder();
  }, [order]);

  const handleClick = async (orderId, statuss) => {
    try {
      await OrderApi.updateStatus(orderId, statuss);
      fetchOrder();
    } catch (err) {
      toast.err(err.message);
    }
  };
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  return (
    <tr className="text-[#1a120e]" style={index % 2 === 0 ? { background: "#c5a696" } : { background: "white" }}>
      <td className="border border-slate-300 p-2">{el.order_id}</td>
      <td className="border border-slate-300 p-2">{formatDate(el.order_date)}</td>
      <td className="border border-slate-300 p-2">{el.total_cost}</td>
      {el?.status === "payed" ? <Button onClick={(e) => handleClick(el.order_id, "received")}>Received</Button> : <td className="border border-slate-300 p-2">{el.status}</td>}
    </tr>
  );
}
