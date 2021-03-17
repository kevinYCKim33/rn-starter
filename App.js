import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

// this is different from other course; it might be a bit outdated...
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
  },
  {
    initialRouteName: "Components", // goes to the key
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
