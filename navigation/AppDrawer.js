import { createDrawerNavigator } from "react-navigation";
import DashboardScreen from '../screens/DashboardScreen';
import AppDrawerContent from './AppDrawerContent';
import LinksScreen from '../screens/LinksScreen';

const AppDrawer = createDrawerNavigator(
  {
    Dashboard: DashboardScreen,
    About: LinksScreen,
  },
  {
    initialRouteName: 'Dashboard',
    drawerPosition: 'right',
    contentComponent: AppDrawerContent
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