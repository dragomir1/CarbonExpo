import { createDrawerNavigator } from "react-navigation";
import DashboardScreen from '../screens/DashboardScreen';

const AppDrawer = createDrawerNavigator(
  {
    Dashboard: DashboardScreen
  },
  {
    initialRouteName: 'Dashboard',
    drawerPosition: 'right',
  }
);

// If you want a custom title for the drawer, do something like this:
// About: {
//   screen: About,
//     navigationOptions: {
//     drawerLabel: "About Us"
//   },
// },

export default AppDrawer;