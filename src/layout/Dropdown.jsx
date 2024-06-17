import { Link } from "react-router-dom";
import useProduct from "../hook/useProduct";
import { useState } from "react";

export default function Dropdown() {
  const { productFiltered, setShow } = useProduct();
  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <div role="button" className="px-3 text-black hover:border-2 border-b-black">
        <Link to="/product" onClick={() => setShow([])}>
          product
        </Link>
      </div>
      {open && (
        <div className="absolute  left-0 w-12">
          <div className="w-64  bg-white rounded-lg shadow-[0_0_6px_rgb(0,0,0,0.2)] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <div role="button" onClick={() => productFiltered("North")} className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
                <Link to="/product">เหนือ</Link>
              </div>
              <div role="button" onClick={() => productFiltered("Mid")} className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
                <Link to="/product">กลาง</Link>
              </div>
              <div role="button" onClick={() => productFiltered("South")} className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
                <Link to="/product">ใต้</Link>
              </div>
              <div role="button" onClick={() => productFiltered("NorthEast")} className="hover:bg-custom-yellow hover:rounded-md hover:p-2">
                <Link to="/product">อีสาน</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
