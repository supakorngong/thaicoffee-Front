import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Order from "../pages/Order";
import ProtectedRoute from "../features/product/component/ProtectedRoute";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const MainContainer = lazy(() => import("../pages/MainContainer"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ProductPage = lazy(() => import("../pages/productPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Cart = lazy(() => import("../pages/Cart"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/profile", element: <ProfilePage /> },
      {
        path: "/product",
        element: (
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        ),
      },
      { path: "product/:productName", element: <ProductDetail /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "/orderhistory", element: <Order /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
