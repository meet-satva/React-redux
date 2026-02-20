import UserList from "./components/UserList";
import { AndUI } from "./ui/antd.components";

function App() {
  const {Text} = AndUI.Typography;
  return (
    <div>
        <ul>
          <li><Text mark>Fetch a list of movies (or items from JSONPlaceholder) and manage the loading state</Text></li>
          <li><Text mark>create "extraReducers" for to fetch data from api</Text></li>
          <li><Text mark>use "Input.Search", "Spin", "Card", "Row", "Col" component of AntD</Text></li>
          <li><Text mark>Use the AntD "Input.Search" component to trigger the fetch.</Text></li>
        </ul>
       <UserList/>
    </div>
  );
}

export default App;