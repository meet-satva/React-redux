import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const AppMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={({ key }) => navigate(key)}
      style={{height: "100vh"}}
      items={[
        { key: "/dashboard", label: "Dashboard" },
        { key: "/dashboard/profile", label: "Profile" },
        { key: "/dashboard/settings", label: "Settings" },
      ]}
    />
  );
};

export default AppMenu;