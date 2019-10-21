import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./components/Main";
import ListItem from "./components/ListItem";
import EditUser from "./components/EditUser";

const Root = createStackNavigator({
  main: { screen: Main },
  listItem: { screen: ListItem },
  editUser: { screen: EditUser }
});

const App = createAppContainer(Root);

export default App;
