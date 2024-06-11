import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainContainer from "../pages/MainContainer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/productPage";
import ProfilePage from "../pages/ProfilePage";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
// import { lazy } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "product/:productName", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
