import { Layout, Button } from "antd";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollap } from "../redux/slices/uiSlice";
import type { RootState } from "../redux/store";
import AppMenu from "../components/AppMenu";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
  const collapsed = useSelector(
    (state: RootState) => state.ui.collapsed
  );
  const dispatch = useDispatch();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={collapsed} collapsible trigger={null}>
        <AppMenu />
      </Sider>

      <Layout>
        <Header style={{ background: "#fff" }}>
          <Button onClick={() => dispatch(toggleCollap())}>
            Toggle Sidebar
          </Button>
        </Header>

        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;