import { createContext, useState, useEffect } from "react";
import ProductApi from "../api/Product";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState([]);

  const productFiltered = (regions) => {
    const clonedProduct = [...product];
    setShow(clonedProduct.filter((el) => el.region === regions));
  };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await ProductApi.getAllProduct();
      setProduct(response.data);
    } catch (err) {
      console.log("fetch product err", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ product, productFiltered, show, isLoading, setIsLoading }}>{children}</ProductContext.Provider>;
}
