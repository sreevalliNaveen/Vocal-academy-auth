import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      id: "1",
      name: "Valli",
      role: "student",
      token: "dummy-jwt-token",
    });
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
