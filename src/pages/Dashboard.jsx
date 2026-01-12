import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <>
      <h2>Dashboard</h2>
      <p>Welcome {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
