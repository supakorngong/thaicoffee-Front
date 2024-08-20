import useCart from "../../../hook/useCart";
import Button from "../../../components/Button";
import useAuth from "../../../hook/useAuth";
import { useState } from "react";
import authApi from "../../../api/Auth";
import { useRef } from "react";
import paymentApi from "../../../api/Payment";
import { toast } from "react-toastify";

export default function FinalForm() {
  const fileEl = useRef();

  const { cartItem, setComponent, cost, file, setFile, handleClickPay, isLoading } = useCart();

  const { authUser, fetch } = useAuth();

  const [edit, setEdit] = useState(false);

  const initialInput = { address: authUser?.user.address };

  const [input, setInput] = useState(initialInput);

  const handleEditAddress = () => {
    setEdit((prev) => !prev);
  };

  const handleSaveAddress = async (input) => {
    try {
      await authApi.updateAddress(input);
      fetch();

      handleEditAddress();
    } catch (err) {
      toast.err(err.message);
    }
  };
  const handlePaycard = async () => {
    try {
      const result = await paymentApi.checkout(cartItem, cost);
      window.location = result.data.url;
    } catch (error) {
      toast.err(error.message);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center text-2xl text-black ">
        <h1>cart</h1>
      </div>
      {authUser && (
        <div className="flex">
          <div>
            {cartItem?.map((el) => {
              return (
                <div className="flex  items-center gap-5 w-full p-4 text-black" key={el.product.name}>
                  <div className="w-[200px] h-21  ">
                    <img src={el.product.picture} alt="" className="object-fill h-full w-full" />
                  </div>
                  <div className="m-4 w-24">
                    <p>{el.product.name}</p>
                  </div>
                  <div className="flex gap-2 h-3/6 m-4">
                    <p>{el.amount}</p>
                  </div>
                  <div className="m-4">
                    <p>{el.product.cost * el.amount}บาท</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col  items-center justify-center min-h-full w-screen ">
            <div className="flex justify-center items-center h-20  w-3/6">
              <p className="w-3/6 text-lg text-black text-center">
                ราคาทั้งหมด : {cost}
                &nbsp;บาท
              </p>
            </div>

            <div>
              <input
                type="file"
                className="hidden"
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
              />
              {file ? (
                <div role="button" className="bg-gray-100 relative w-20" onClick={() => fileEl.current?.click()}>
                  <img src={URL.createObjectURL(file)} alt="post" className="mx-auto" />
                  <button
                    className="absolute top-1 right-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                    }}
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <div role="button" className="flex flex-col items-center gap-2 bg-gray-300 rounded-lg px-4 py-4 hover:bg-gray-200" onClick={() => fileEl.current?.click()}>
                  <span>Add Photo</span>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center gap-4 py-5">
              {!edit ? (
                <p>ที่อยู่จัดส่ง : {input?.address}</p>
              ) : (
                <>
                  <input type="text" value={input?.address} onChange={(e) => setInput({ ...input, address: e.target.value })} />
                  <Button onClick={() => handleSaveAddress(input)}>save</Button>
                </>
              )}
              <Button onClick={handleEditAddress}>edit address</Button>
            </div>

            <div className="flex justify-center items-center  w-3/6 h-15 pt-4 gap-4">
              {file ? (
                <Button bg="green" onClick={handleClickPay}>
                  payment
                </Button>
              ) : (
                <Button disabled>payment</Button>
              )}
              <Button onClick={handlePaycard}>pay by card</Button>
              <Button bg="red" onClick={() => setComponent((prev) => !prev)}>
                edit cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
