import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Unauthorized from "../pages/Unauthorized";
import AdminPanel from "../pages/admin/AdminPanel";
import DirectorPanel from "../pages/director/DirectorPanel";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["director"]} />}>
        <Route path="/director" element={<DirectorPanel />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["admin","director"]} />}>
        <Route path="/admin" element={<AdminPanel />} />
      </Route>
      </Routes>
  );
}
