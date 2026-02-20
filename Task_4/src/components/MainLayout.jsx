import { Layout, Menu, Switch } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleSider } from "../redux/slices/theameSlice";

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { darkMode, siderCollapsed } = useSelector(state => state.theme);

  return (
    <Layout style={{ minHeight: "100vh" }}>
  
      <Sider
        collapsible
        collapsed={siderCollapsed}
        onCollapse={() => dispatch(toggleSider())}
        theme={darkMode ? "dark" : "light"}
      >
        <div style={{ color: "#fff", padding: 16, textAlign: "center" }}>
          SaaS App
        </div>

        <Menu
          theme={darkMode ? "dark" : "light"}
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/",
              icon: <DashboardOutlined />,
              label: "Dashboard"
            },
            {
              key: "/users",
              icon: <UserOutlined />,
              label: "Users"
            },
            {
              key: "/settings",
              icon: <SettingOutlined />,
              label: "Settings"
            }
          ]}
        />
      </Sider>

   
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            background: "#fff"
          }}
        >
          <span style={{ marginRight: 8 }}>Dark Mode</span>
          <Switch checked={darkMode} onChange={() => dispatch(toggleDarkMode())} />
        </Header>

        <Content style={{ margin: 16 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;