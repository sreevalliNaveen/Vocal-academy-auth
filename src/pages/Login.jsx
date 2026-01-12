import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    login({
      id: "1",
      name: "Valli",
      role: "student",
      token: "dummy-jwt-token",
    });

    navigate(from, { replace: true });
  };

  return <button onClick={handleLogin}>Login</button>;
}
