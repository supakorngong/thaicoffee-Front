import useOrder from "../../../hook/useOrder";
import OrderTable from "./OrderTable";

export default function OrderHistoryForm() {
  const { orderDetail } = useOrder();
  console.log("i am gong", orderDetail);
  return (
    <>
      <div className="flex justify-center mt-10">
        <table className="table-auto border-collapse">
          <tr className="bg-[#9e6f57] text-white">
            <th className="p-2">Order Id</th>
            <th className="p-2">OrderDate</th>
            <th className="p-2">Total Cost</th>
            <th className="p-2">Status</th>
          </tr>
          {orderDetail?.map((el, index) => (
            <>
              <OrderTable el={el} index={index} />
            </>
          ))}
        </table>
      </div>
    </>
  );
}
