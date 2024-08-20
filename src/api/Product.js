import { toast } from "react-toastify";
import axios from "../config/axios";
const ProductApi = {};
ProductApi.getAllProduct = async () => {
  try {
    const result = await axios.get("/products");
    return result;
  } catch (err) {
    toast.error(err.message);
  }
};
ProductApi.updateStock = async (cartItem) => {
  try {
    await axios.patch("/products", { cartItem });
  } catch (err) {
    toast.error(err.message);
  }
};

export default ProductApi;
