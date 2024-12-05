import { useParams } from "react-router-dom";
import useProduct from "../hook/useProduct";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../components/Button";

import Modal from "../components/Modal";

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
    if (numberItem > 0) {
      return setNumberItem((prev) => prev - 1);
    }
    setNumberItem((prev) => prev);
    const decision = confirm("you are removing this product from cart");
    if (decision) {
      return setOpen(false);
    }
  };

  // console.log(productName);
  useEffect(() => {
    const foundProduct = product.find((product) => product.name === productName);

    if (foundProduct) {
      setCurrentProduct(foundProduct);
    }
  }, [product, productName]);

  return (
    <div className="flex gap-10 justify-evenly">
      <div className="mx-15">
        <img src={currentProduct?.picture}></img>
      </div>
      <div className="w-[400px] flex flex-col justify-center h-[450px] border-2 border-[#f4f4f5] overflow-hidden shadow-[#ffffff] rounded-lg shadow-sm">
        <h1 className="text-2xl mb-2 overflow-hidden">{currentProduct?.name}</h1>
        <h2 className="text-lg mb-1">
          เเหล่งที่ปลูก : {currentProduct?.province} &nbsp; ภูมิภาค:{currentProduct?.region}
        </h2>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis rounded">{currentProduct?.description}</p>
        <p>ราคา : {currentProduct?.cost} บาท</p>
        <p>มีจํานวน : {currentProduct?.stock} ชิ้น</p>
        <div>
          <Button onClick={() => handleClick()}>add to cart</Button>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={() => setOpen(false)} currentProduct={currentProduct} numberItem={numberItem} handleAdd={handleAdd} handleDecrease={handleDecrease} />
      </div>
    </div>
  );
}
