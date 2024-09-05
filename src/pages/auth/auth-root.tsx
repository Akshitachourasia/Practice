import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import ProfilePage from "../profile/profile";

const AuthRoot = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {isLogged ? (
        <ProfilePage />
      ) : (
        <div>
          <Navigate to="/" />
          <h1>Main Page</h1>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default AuthRoot;
