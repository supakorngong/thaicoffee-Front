import { useParams } from "react-router-dom";
import useProduct from "../hook/useProduct";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../components/Button";

import Modal from "../components/Modal";
import Swal from "sweetalert2";

export default function ProductDetail() {
  const { product } = useProduct();
  const { productName } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [numberItem, setNumberItem] = useState(null);

  const handleClick = () => {
    setNumberItem(1);
    setOpen((prev) => !prev);
  };

  const handleAdd = () => {
    if (numberItem < currentProduct.stock) {
      return setNumberItem((prev) => prev + 1);
    }
    setNumberItem((prev) => prev);
  };

  const handleDecrease = () => {
    if (numberItem > 1) {
      return setNumberItem((prev) => prev - 1);
    }
    setNumberItem((prev) => prev);
    Swal.fire({
      title: "Do You Want To Explore Our Shop Without Account?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, I Do",
      denyButtonText: `No, I Do Not`,
      confirmButtonColor: "#41DC41",
    }).then((result) => {
      if (result.isConfirmed) {
        return setOpen(false);
      } else if (result.isDenied) {
        return;
      }
    });
  };

  useEffect(() => {
    const foundProduct = product.find((product) => product.name === productName);

    if (foundProduct) {
      setCurrentProduct(foundProduct);
    }
  }, [product, productName]);

  return (
    <div className="flex gap-10 flex-col items-center md:flex-row md:justify-evenly md:pl-10 lg:pl-20 ">
      <div className="mx-15">
        <img className="max-w-[350px] max-h-[400px]" src={currentProduct?.picture}></img>
      </div>
      <div className="w-[370px] flex flex-col justify-start items-center h-[450px] border-2 border-[#f4f4f5] overflow-hidden shadow-[#ffffff] rounded-lg shadow-sm text-[12px] md:items-start md:justify-center  md:max-w-[700px] lg:max-w-[1000px]  md:text-[18px]">
        <h1 className="text-[16px] md:text-[22px] lg:text-[26px] mb-2 ">{currentProduct?.name}</h1>
        {/* 2xl */}
        <h2 className="text-[14px] md:text-[20px] lg:text-[22px] mb-1 ">
          เเหล่งที่ปลูก : {currentProduct?.province} <br />
          ภูมิภาค : {currentProduct?.region}
        </h2>
        <p className="overflow-scroll wrap  rounded max-w-[300px] max-h-[100px] md:max-h-[250px] pt-2">คําอธิบาย : {currentProduct?.description}</p>
        <p className="mt-2">ราคา : {currentProduct?.cost} บาท</p>
        <p>มีจํานวน : {currentProduct?.stock} ชิ้น</p>
        <div>
          <Button mgy={10} pdx={5} onClick={() => handleClick()}>
            add to cart
          </Button>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={() => setOpen(false)} currentProduct={currentProduct} numberItem={numberItem} handleAdd={handleAdd} handleDecrease={handleDecrease} />
      </div>
    </div>
  );
}
