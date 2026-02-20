import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Settings from "./components/Settings";

function App() {
  return (
    <div>
       <Routes>
          <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
          </Route>
       </Routes>
    </div>
  );
}

export default App;