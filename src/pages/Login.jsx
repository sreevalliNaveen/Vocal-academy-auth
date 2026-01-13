import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = (role) => {
    // In a real app you'd call your API to authenticate and receive tokens + user info.
    // Here we simulate that shape so AuthContext can store token + expiry.
    const user = { id: "1", name: "Valli", role };

    login({ user, accessToken: "dummy-jwt-token", expiresIn: 60 * 60 }); // 1 hour

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
