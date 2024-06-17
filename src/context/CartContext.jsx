import { createContext } from "react";
import CartApi from "../api/Cart";
import { useEffect } from "react";
import { useState } from "react";
import { getAccessToken } from "../utils/localStorage";
import useAuth from "../hook/useAuth";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState(null);
  const { authUser } = useAuth();
  const [component, setComponent] = useState(false);

  // const [create, setCreate] = useState(null);

  const fetchCart = async () => {
    try {
      const result = await CartApi.getCartData();
      console.log("this is result from get Cartdata", result.data);
      setCartItem(result.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const token = getAccessToken();
    // console.log("this is token", token);
    if (token) {
      fetchCart();
    }
  }, [authUser]);

  const createCart = async (product) => {
    try {
      const response = await CartApi.addToCart(product);
      alert("success");
      console.log(response.data);
      fetchCart();

      // console.log(response);
      // setCreate(response);
      // return response;
    } catch (err) {
      console.log(err.message);
    }
    // console.log(create, "for what");
  };

  const deleteCart = async (cartId) => {
    try {
      const response = await CartApi.deleteCartById(cartId);
      alert("deleted form cart");
      fetchCart();
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  return <CartContext.Provider value={{ createCart, cartItem, fetchCart, setCartItem, deleteCart, component, setComponent }}>{children}</CartContext.Provider>;
}
