import { useAuth } from "../auth/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", roles: ["student","admin","director"] },
    { name: "Admin Panel", path: "/admin", roles: ["admin","director"] },
    { name: "Director Panel", path: "/director", roles: ["director"] },
  ];

  return (
    <ul>
      {menuItems
        .filter(item => item.roles.includes(user?.role))
        .map(item => (
          <li key={item.path}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
    </ul>
  );
}
