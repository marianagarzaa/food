import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShowScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BuisnessSearch'
  }
});

export default createAppContainer(navigator);
