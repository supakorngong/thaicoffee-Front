import axios from "../config/axios";

const CartApi = {};
CartApi.addToCart = (product) => {
  const response = axios.post("/cart", product);
  return response;
};

CartApi.getCartData = () => {
  const response = axios.get("/cart");
  return response;
};

CartApi.deleteCartById = (cartId) => {
  return axios.delete(`/cart/${cartId}`);
};

export default CartApi;
/*
cart page
get => cart data => /cart
show data => map
 -product name
 -amount
 .
 .
 .
 ทํา 2 component ไว้ก่อนกด submit order , หลัง submit order => edit order(back to before submit) , pay(ต้องเเนบสลิปก่อน)
หน้า product เเต่ละตัว กด add to cart เเล้ว setstate ให้ open ปุ่ม บวกลบ เเละ set ของ ใน product เท่ากับ 1 ไปสร้างใน context เพราะจะเอาไปใช้ในหน้า cart ด้วย logic เดียวกัน

+,- logic --> เก็บไว้ที่ state ก่อน เเล้ว กด ส่งไปทีเดียว (มีปุ่มส่งอีกที update cart button)
update cart button --> api เส้น post/cart (upsert)
submit order 
*/
