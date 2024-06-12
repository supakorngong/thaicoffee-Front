import useCart from "../../../hook/useCart";
import Button from "../../../components/Button";

export default function CartForm() {
  const { cartItem, createCart, setCartItem, deleteCart } = useCart();

  const handleIncrease = (index) => {
    // console.log(numberProduct);
    const newItem = [...cartItem];
    newItem[index].amount += 1;
    console.log(cartItem[index], "CHECK CART");
    setCartItem(newItem);
  };
  const handleDecrease = (index) => {
    const newItem = [...cartItem];
    newItem[index].amount -= 1;
    setCartItem(newItem);
    console.log(cartItem[index], "CHECK CART");
  };

  console.log(cartItem, "cart item!!!!!");

  return (
    <>
      <div className="w-full flex justify-center text-2xl ">
        <h1>cart</h1>
      </div>
      {cartItem?.map((el, index) => {
        return (
          <>
            <div className="flex  items-center gap-5 w-full p-4">
              <div className="w-[100px] h-20 object-fit m-4">
                <img src={el.product.picture} alt="" />
              </div>
              <div className="m-4">
                <p>{el.product.name}</p>
              </div>
              <div className="flex gap-2 h-3/6 m-4">
                <button onClick={() => handleIncrease(index)}>+</button>
                <p>{el.amount}</p>
                <button onClick={() => handleDecrease(index)}>-</button>
              </div>
              <div className="m-4">
                <p>{el.product.cost * el.amount}บาท</p>
              </div>
              <div className="flex gap-1">
                <Button onClick={() => createCart({ product_id: el.product_id, amount: el.amount })}>Update</Button>
                <Button bg="red" onClick={() => deleteCart(el.cart_id)}>
                  Delete
                </Button>
              </div>
            </div>
          </>
        );
      })}
      <div className="mt-20 w-screen">
        <p className="text-center w-full">
          ราคาทั้งหมด :
          {cartItem.reduce((acc, cur) => {
            return (acc += cur.product.cost * cur.amount);
          }, 0)}
          บาท
        </p>
      </div>
      <div className="flex justify-center">
        <Button bg="green">submit order</Button>
      </div>
    </>
  );
}
