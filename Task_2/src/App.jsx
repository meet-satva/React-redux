import { AntTable } from "./ui/antd.components";
import UserDetails from "./components/UserDetails";

function App() {
  const { Text } = AntTable.Typography;
  return (
    <div>
      <ul>
        <li>
          <Text mark>Create a list of users in your Redux store and display them in a professional grid.</Text>
        </li>
        <li>
          <Text mark>Add a "Delete" button inside one of the table columns.</Text>
        </li>
        <li>
          <Text mark>When "Delete" is clicked, dispatch an action to remove that user from the Redux store.</Text>
        </li>
        <li>
          <Text mark>When you click on Delete it will ask "Are you sure?" before deleting if ok then only delete.</Text>
        </li>
      </ul>


      <UserDetails />
    </div>
  );
}

export default App;