import { NavLink } from "react-router-dom";
import React, { useMemo } from "react";
import { useAuth } from "../auth/AuthContext";

const menuByRole = {
  student: [
    { path: "/dashboard", label: "Dashboard" },
  ],
  admin: [
    { path: "/admin", label: "Admin" },
  ],
  director: [
    { path: "/director", label: "Director" },
  ],
};

function Navbar() {
  const { user, logout } = useAuth();

  const menu = useMemo(() => {
    if (!user) return [];
    return menuByRole[user.role] || [];
  }, [user]);

  return (
    <nav>
      {menu.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.label}
        </NavLink>
      ))}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default React.memo(Navbar);
