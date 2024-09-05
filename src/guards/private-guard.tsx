import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PrivateGuard: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");

  if (isAuthenticated === "true") {
    return children;
  }
  return <Navigate to="/auth/login" replace />;
};

export default PrivateGuard;
