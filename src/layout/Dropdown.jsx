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
      <div role="button" className="border-2 border-black bg-red-300">
        <Link to="/product" onClick={() => setShow([])}>
          product
        </Link>
      </div>
      {open && (
        <div className="absolute translate-y-0 left-0 w-12">
          <div className="w-96  bg-white rounded-lg shadow-[0_0_6px_rgb(0,0,0,0.2)] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
              <div role="button" onClick={() => productFiltered("North")}>
                <Link to="/product">เหนือ</Link>
              </div>
              <div role="button" onClick={() => productFiltered("Mid")}>
                <Link to="/product">กลาง</Link>
              </div>
              <div role="button" onClick={() => productFiltered("South")}>
                <Link to="/product">ใต้</Link>
              </div>
              <div role="button" onClick={() => productFiltered("NorthEast")}>
                <Link to="/product">อีสาน</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
