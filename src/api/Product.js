import axios from "../config/axios";
const ProductApi = {};
ProductApi.getAllProduct = async () => {
  try {
    const result = await axios.get("/products");

    return result;
  } catch (err) {
    console.log("err from axios", err.message);
  }
};
ProductApi.updateStock = async (cartItem) => {
  try {
    console.log(cartItem);
    await axios.patch("/products", { cartItem });
  } catch (err) {
    console.log(err.message);
  }
};

export default ProductApi;
