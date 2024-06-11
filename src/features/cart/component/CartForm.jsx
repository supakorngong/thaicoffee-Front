import React from "react";
import useCart from "../../../hook/useCart";

export default function CartForm() {
  const { cartItem } = useCart();
  const items = cartItem.data;
  return (
    <>
      {items.map((el) => (
        <>
          <div>
            <div>
              <h1>Cart</h1>
            </div>
            <div>
              <img src={el.product.picture} alt="" />
            </div>
            <div>
              <p>{el.product.name}</p>
            </div>
            <div>+ 1 -</div>
            <div>
              <p>{el.product.cost * el.amount}บาท</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
