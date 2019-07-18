import {createStackNavigator} from "react-navigation";
import LinksScreen from '../screens/LinksScreen';
import ChooseServiceOptionsScreen from '../screens/ChooseServiceOptionsScreen';
import AppointmentScreen from '../screens/AppointmentScreen';

const ChooseServiceStack = createStackNavigator(
  {
    ServiceOptions: ChooseServiceOptionsScreen,
    AppointmentScreen: AppointmentScreen,

    // TODO: Fix this
    ServiceOptionsSuccess: LinksScreen
  },
  {
    headerMode: 'none'
  }
);

export default ChooseServiceStack;
