import { Suspense } from "react";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import ProductContextProvider from "./context/ProductContext";
import Router from "./router";
import Spinner from "./components/Spinner";
import OrderContextProvider from "./context/OrderContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <Router />
              <ToastContainer position="bottom-right" autoClose={3000} />
            </OrderContextProvider>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
