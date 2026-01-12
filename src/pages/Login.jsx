import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (user) => {
    login({
      id: "1",
      name: "Valli",
      role: user? user : "",
      token: "dummy-jwt-token",
    });

    navigate(from, { replace: true });
  };

  return (
  <>
    <button onClick={() => handleLogin("student")}>Login as Student</button>
    <button onClick={() => handleLogin("admin")}>Login as Admin</button>
    <button onClick={() => handleLogin("director")}>Login as Director</button>
  </>
  );
}
