import {createStackNavigator} from "react-navigation";
import LinksScreen from '../screens/LinksScreen';
import ChooseServiceScreen from '../screens/ChooseServiceScreen';

const ChooseServiceStack = createStackNavigator(
  {
    ServiceOptions: ChooseServiceScreen,

    // TODO: Fix this
    ServiceOptionsSuccess: LinksScreen
  }
);

export default ChooseServiceStack;