import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import ProductContextProvider from "./context/ProductContext";
import Router from "./router";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
