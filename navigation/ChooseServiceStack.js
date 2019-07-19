import {createStackNavigator} from "react-navigation";
import LinksScreen from '../screens/LinksScreen';
import ChooseServiceOptionsScreen from '../screens/ChooseServiceOptionsScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ReviewApptScreen from '../screens/ReviewApptScreen';
import SuccessScreen from '../screens/SuccessScreen';

const ChooseServiceStack = createStackNavigator(
  {
    ServiceOptions: ChooseServiceOptionsScreen,
    AppointmentScreen: AppointmentScreen,
    ReviewApptScreen: ReviewApptScreen,
    SuccessScreen: SuccessScreen,

    // TODO: Fix this
    ServiceOptionsSuccess: LinksScreen
  },
  {
    headerMode: 'none'
  }
);

export default ChooseServiceStack;
