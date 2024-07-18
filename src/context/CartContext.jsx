import { createContext } from "react";
import CartApi from "../api/Cart";
import { useEffect } from "react";
import { useState } from "react";
import { getAccessToken } from "../utils/localStorage";
import useAuth from "../hook/useAuth";
import useProduct from "../hook/useProduct";
import { toast } from "react-toastify";
import OrderApi from "../api/Order";
import ProductApi from "../api/Product";
import { Navigate } from "react-router-dom";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItem, setCartItem] = useState(null);
  const { authUser } = useAuth();
  const { isLoading, setIsLoading } = useProduct();
  const [component, setComponent] = useState(false);
  const [cost, setCost] = useState(0);
  const [file, setFile] = useState(null);
  const [order, setOrder] = useState(false);

  // const [create, setCreate] = useState(null);
  useEffect(() => {
    const calculation = cartItem?.reduce((acc, cur) => {
      return (acc += cur.product.cost * cur.amount);
    }, 0);
    setCost(calculation);
  }, [cartItem]);

  const handleClickPay = async () => {
    try {
      const formData = new FormData();
      if (cost) {
        formData.append("totalCost", cost);
      }
      if (file) {
        formData.append("evidence", file);
      }
      setIsLoading(true);
      <Navigate to="/cart" />;
      console.log(isLoading);
      // console.log(formData, "this is how form data looks like");
      await OrderApi.createOrder(formData);
      await ProductApi.updateStock(cartItem); //ควรสร้างเป้นเส้นเดียว

      setCartItem([]);
      setComponent(false);
      setOrder((prev) => !prev);

      toast.success("payed order successfully");
    } catch (err) {
      toast.error("Failed to pay for the order.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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
  return (
    <CartContext.Provider value={{ createCart, cartItem, fetchCart, setCartItem, deleteCart, component, setComponent, cost, handleClickPay, file, setFile, isLoading, order, setOrder }}>
      {children}
    </CartContext.Provider>
  );
}
