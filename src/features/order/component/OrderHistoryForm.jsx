import { useState } from "react";
import useOrder from "../../../hook/useOrder";
import OrderTable from "./OrderTable";

export default function OrderHistoryForm() {
  const { orderDetail } = useOrder(); // ดึงข้อมูลคำสั่งซื้อ
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  console.log(indexOfLastRow, "last");
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  console.log(indexOfFirstRow, "first");
  const currentRows = orderDetail.slice(indexOfFirstRow, indexOfLastRow); // เลือกแค่รายการที่จะแสดงในหน้านี้

  const totalPages = Math.ceil(orderDetail.length / rowsPerPage); // คำนวณจำนวนหน้า

  return (
    <div className="flex flex-col items-center gap-4 justify-center mt-10">
      <table className="table-auto border-collapse">
        <thead>
          <tr className="bg-[#9e6f57] text-white">
            <th className="p-2">Order</th>
            <th className="p-2">OrderDate</th>
            <th className="p-2">Total Cost</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRows?.map((el, index) => (
            <OrderTable el={el} index={index} key={el.id} currentPage={currentPage} />
          ))}
        </tbody>
      </table>
      <div>
        <button className="font-bold" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          &nbsp;Page {currentPage} of {totalPages}&nbsp;
        </span>
        <button className="font-bold" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
