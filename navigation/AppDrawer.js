import { createDrawerNavigator } from "react-navigation";
import DashboardScreen from '../screens/DashboardScreen';
import AppDrawerContent from './AppDrawerContent';
// import LinksScreen from '../screens/LinksScreen';

const AppDrawer = createDrawerNavigator(
  {
    Close: DashboardScreen,
    // About: LinksScreen,
  },
  {
    initialRouteName: 'Close',
    drawerPosition: 'right',
    contentComponent: AppDrawerContent,
    drawerBackgroundColor: "#333",
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: "#262626"
    }
}
);

// If you want a custom title for the drawer, do something like this:


//   About: {
//     screen: About,
//       navigationOptions: {
//       drawerLabel: "About Us"
//     },
//   },

export default AppDrawer;
