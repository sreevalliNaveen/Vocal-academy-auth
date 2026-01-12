import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { fetchStudentDashboard } from "../api/fakeApi";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudentDashboard(user.token, user.role)
      .then(setData)
      .catch(setError);
  }, [user]);

  if (error) {
    return (
      <>
        <p>{error.message}</p>
        <button onClick={logout}>Logout</button>
      </>
    );
  }

  if (!data) return <p>Loading dashboard...</p>;

  return (
    <>
      <h2>Student Dashboard</h2>
      <p>Courses: {data.courses.join(", ")}</p>
      <p>Level: {data.progress}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
