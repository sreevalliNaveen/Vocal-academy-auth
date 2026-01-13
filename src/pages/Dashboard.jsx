// import { useEffect, useState } from "react";
// import { useAuth } from "../auth/AuthContext";
// import { fetchStudentDashboard } from "../api/fakeApi";

// export default function Dashboard() {
//   const { user, logout } = useAuth();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchStudentDashboard(user.token, user.role)
//       .then(setData)
//       .catch(setError);
//   }, [user]);

//   if (error) {
//     return (
//       <>
//         <p>{error.message}</p>
//         <button onClick={logout}>Logout</button>
//       </>
//     );
//   }

//   if (!data) return <p>Loading dashboard...</p>;

//   return (
//     <>
//       <h2>Student Dashboard</h2>
//       <p>Courses: {data.courses.join(", ")}</p>
//       <p>Level: {data.progress}</p>
//       <button onClick={logout}>Logout</button>
//     </>
//   );
// }

import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>

      {user.role === "student" && (
        <p>Welcome student. View your enrolled courses.</p>
      )}

      {user.role === "admin" && (
        <p>Admin tools: manage users and courses.</p>
      )}

      {user.role === "director" && (
        <p>Director view: academy overview and analytics.</p>
      )}
    </div>
  );
}
