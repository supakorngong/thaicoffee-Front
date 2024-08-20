import useCart from "../../../hook/useCart";
import Button from "../../../components/Button";
import useAuth from "../../../hook/useAuth";

export default function CartForm() {
  const { cartItem, createCart, setCartItem, deleteCart, setComponent } = useCart();
  const { authUser } = useAuth();

  const handleIncrease = (index) => {
    const newItem = [...cartItem];

    if (newItem[index].amount === newItem[index].product.stock) {
      return;
    }

    newItem[index].amount += 1;
    setCartItem(newItem);
  };

  const handleDecrease = (index) => {
    const newItem = [...cartItem];
    if (newItem[index].amount === 1) {
      deleteCart(newItem[index].cart_id);
    }
    newItem[index].amount -= 1;
    setCartItem(newItem);
  };

  return (
    <>
      <div className="w-full flex justify-center text-2xl text-black ">
        <h1>cart</h1>
      </div>
      {authUser && (
        <div className="flex items-center">
          <div className="flex flex-col">
            {cartItem?.map((el, index) => {
              return (
                <>
                  <div className="flex  items-center gap-5 w-full p-4 text-black">
                    <div className="w-[200px] h-21  ">
                      <img src={el.product.picture} alt="" className="object-fill h-full w-full" />
                    </div>
                    <div className="m-4 w-24">
                      <p>{el.product.name}</p>
                    </div>
                    <div className="flex gap-2 h-3/6 m-4">
                      <button onClick={() => handleIncrease(index)}>+</button>
                      <p>{el.amount}</p>
                      <button onClick={() => handleDecrease(index)}>-</button>
                    </div>
                    <div className="m-4 w-20">
                      <p>{el.product.cost * el.amount} บาท</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Button onClick={() => createCart({ product_id: el.product_id, amount: el.amount })}>Update</Button>
                      <Button bg="red" onClick={() => deleteCart(el.cart_id)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col  items-center justify-center min-h-full w-screen ">
            <div className="flex justify-center items-center h-20  w-3/6">
              {cartItem?.length > 0 ? (
                <p className="w-4/6 text-lg text-black text-center">
                  ราคาทั้งหมด :&nbsp;
                  {cartItem?.reduce((acc, cur) => {
                    return (acc += cur.product.cost * cur.amount);
                  }, 0)}
                  &nbsp;บาท
                </p>
              ) : (
                <p className="w-3/6 text-lg text-black text-center">คุณยังไม่มีสินค้าในตะกร้า</p>
              )}
            </div>
            {cartItem?.length > 0 ? (
              <div className="flex justify-center items-center  w-3/6 h-15">
                <Button bg="green" onClick={() => setComponent(true)}>
                  submit order
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

// (
//   <div className="flex justify-center items-center  w-3/6 h-15">
//     <Button disabled>submit order</Button>
//   </div>
// )
