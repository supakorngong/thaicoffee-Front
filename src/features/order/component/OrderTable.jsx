import OrderApi from "../../../api/Order";
import Button from "../../../components/Button";
import useAuth from "../../../hook/useAuth";
import useOrder from "../../../hook/useOrder";

export default function OrderTable({ el, index }) {
  const { fetchOrder } = useOrder();

  const handleClick = async (orderId, statuss) => {
    try {
      await OrderApi.updateStatus(orderId, statuss);
      fetchOrder();
      console.log("yess", statuss);
    } catch (err) {
      console.log(err.message);
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
    <>
      <tr className="text-[#1a120e]" style={index % 2 === 0 ? { background: "#c5a696" } : { background: "white" }}>
        <td className="border border-slate-300 p-2">{el.order_id}</td>
        <td className="border border-slate-300 p-2">{formatDate(el.order_date)}</td>
        <td className="border border-slate-300 p-2">{el.total_cost}</td>
        {el.status === "payed" ? <Button onClick={(e) => handleClick(el.order_id, "received")}>Received</Button> : <td className="border border-slate-300 p-2">{el.status}</td>}

        {/* <td className="border border-slate-300 p-2">{el.orderItem.product.name}</td> */}
        {/* <td className="border border-slate-300 p-2">{el.orderItem.cost}</td>
        <td className="border border-slate-300 p-2">{el.orderItem.amount}</td> */}
      </tr>
    </>
  );
}

//   const [buttonLabel, setButtonLabel] = useState(el.status);
//   const handleChange = async (e) => {
//     try {
//       console.log(e.target.value);
//       setButtonLabel(e.target.value);
//       //   console.log(el.order_id, "hwyyyyy");
//       await OrderApi.updateStatus(el.order_id, e.target.value);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
