import { createContext, useState, useEffect } from "react";
import ProductApi from "../api/Product";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState([]);

  const productFiltered = (regions) => {
    const clonedProduct = [...product];
    console.log("this is cloneee", product);
    setShow(clonedProduct.filter((el) => el.region === regions));
  };

  const fetchProducts = async () => {
    try {
      const response = await ProductApi.getAllProduct();
      setProduct(response.data);
    } catch (err) {
      console.log("fetch product err", err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("this is show", show);
  }, [show]);

  return <ProductContext.Provider value={{ product, productFiltered, show }}>{children}</ProductContext.Provider>;
}
