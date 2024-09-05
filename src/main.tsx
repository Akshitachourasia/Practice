import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login/login";
import ForgotPasswordPage from "./pages/forgot-password/forgot-password";
import SignUpPage from "./pages/signup/signup";
import AuthRoot from "./pages/auth/auth-root";
import ProfilePage from "./pages/profile/profile";

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
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: (
          <LoginPage
          // setIsLogged={setIsLogged}
          />
        ),
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
