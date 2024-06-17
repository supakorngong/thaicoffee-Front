import { createPortal } from "react-dom";
import Button from "./Button";
import useCart from "../hook/useCart";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function Modal(props) {
  const { open, onClose, currentProduct, numberItem, handleAdd, handleDecrease } = props;
  const { createCart } = useCart();
  const navigate = useNavigate();
  const { authUser } = useAuth();
  // console.log(currentProduct?.product_id);
  console.log("this is number item", numberItem);
  const productId = currentProduct?.product_id;

  // console.log("id", productId);
  return (
    <>
      {open
        ? createPortal(
            <>
              <div className="fixed inset-0 bg-white opacity-90 z-30">
                <div className="fixed inset-0 z-40 ">
                  <div className="flex justify-center items-center min-h-screen">
                    <div className=" bg-black  rounded-lg shadow-lg w-" onMouseDown={(e) => e.stopPropagation()} style={{ width: "40rem" }}>
                      <div className="flex justify-between items-center p-4 border-b">
                        <button className="invisible">&#10005;</button>
                        <h5 className="text-2xl font-medium">title</h5>
                        <button onClick={onClose}>&#10005;</button>
                      </div>
                      <div className="flex items-center">
                        <div className="p-4">{currentProduct?.name}</div>
                        <div className=" max-w-60 h-60 object-cover">
                          <img src={currentProduct?.picture} alt="product" className="w-full h-full" />
                        </div>
                        <div className="p-4">
                          <button onClick={handleAdd}>+</button>
                          {numberItem}ชิ้น
                          <button onClick={handleDecrease}>-</button>
                        </div>
                        <div className="p-4">ราคา: {numberItem * currentProduct?.cost}บาท</div>
                        {authUser ? (
                          <Button
                            onClick={() => {
                              createCart({ product_id: productId, amount: numberItem });
                              navigate("/cart");
                            }}
                          >
                            add to cart
                          </Button>
                        ) : (
                          <Button onClick={() => alert("please login")}>add to cart</Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.getElementById("modal")
          )
        : null}
    </>
  );
}

/*
กด add cart เเล้ว  
1.set state = item --> 1
2.show modal
modal มี ปุ่ม + - เเล้วเอา state item มาเเสดง
กด add to cart เเล้ว ส่ง api ไปสร้าง ตะกร้า
*/
