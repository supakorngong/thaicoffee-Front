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
      setCartItem(result.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    const token = getAccessToken();

    if (token) {
      fetchCart();
    }
  }, [authUser]);

  const createCart = async (product) => {
    try {
      const response = await CartApi.addToCart(product);
      alert("success");
      fetchCart();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteCart = async (cartId) => {
    try {
      const response = await CartApi.deleteCartById(cartId);
      toast.success("deleted form cart");
      fetchCart();
      return response;
    } catch (err) {
      toast.err(err.message);
    }
  };
  return (
    <CartContext.Provider value={{ createCart, cartItem, fetchCart, setCartItem, deleteCart, component, setComponent, cost, handleClickPay, file, setFile, isLoading, order, setOrder }}>
      {children}
    </CartContext.Provider>
  );
}
