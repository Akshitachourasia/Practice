import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login/login";
import ForgotPasswordPage from "./pages/forgot-password/forgot-password";
import SignUpPage from "./pages/signup/signup";
import AuthRoot from "./pages/auth/auth-root";
import ProfilePage from "./pages/profile/profile";
import DashboardPage from "./pages/dashboard/dashboard";
import PrivateGuard from "./guards/private-guard";
import PublicGuard from "./guards/public-guard";
import ProductPage from "./pages/products/products";
import PricingPage from "./pages/pricing/pricing";
import CartPage from "./pages/cart/cart";

// eslint-disable-next-line react-refresh/only-export-components
const MainLayout = () => (
  <div>
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoot />,
  },
  {
    path: "/auth",
    element: (
      <PublicGuard>
        <MainLayout />
      </PublicGuard>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateGuard>
        <DashboardPage />
        <Outlet />
      </PrivateGuard>
    ),
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path : "cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
