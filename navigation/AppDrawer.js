import { createDrawerNavigator } from "react-navigation";
import DashboardScreen from '../screens/DashboardScreen';

const AppDrawer = createDrawerNavigator(
  {
    Dashboard: DashboardScreen,
  },
  {
    intialRouteName: 'Dashboard',
    navigationOptions: {
      headerStyle : {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle : {
        color: 'white',
      },
    },
  }
);

export default AppDrawer;