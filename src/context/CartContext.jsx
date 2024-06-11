import { createContext } from "react";
import CartApi from "../api/Cart";
import { useEffect } from "react";
import { useState } from "react";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState(null);
  const [numberItem, setNumberItem] = useState(null);

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

  const fetchCart = async () => {
    try {
      const result = await CartApi.getCartData();
      console.log("this is result from getCartdata", result);
      setCartItem(result);
      console.log(cartItem);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    return fetchCart();
  }, []);
  useEffect(() => {
    console.log("this is cart Itemes", cartItem);
  }, [cartItem]);
  const createCart = async (product) => {
    try {
      const response = await CartApi.addToCart(product);
      alert("success");
      return response;
    } catch (err) {
      console.log(err.message);
    }
  };
  return <CartContext.Provider value={{ createCart, cartItem }}>{children}</CartContext.Provider>;
}
