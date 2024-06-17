import CartForm from "../features/cart/component/CartForm";
import FinalForm from "../features/cart/component/FinalForm";
import useCart from "../hook/useCart";

export default function Cart() {
  const { component } = useCart();
  return <>{!component ? <CartForm /> : <FinalForm />}</>;
}
