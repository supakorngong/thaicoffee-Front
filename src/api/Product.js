import axios from "../config/axios";
const ProductApi = {};
ProductApi.getAllProduct = async () => {
  try {
    const result = await axios.get("/products");
    // console.log(result);
    return result;
  } catch (err) {
    console.log("err from axios", err.message);
  }
};

export default ProductApi;
