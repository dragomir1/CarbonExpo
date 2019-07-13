import {createStackNavigator} from "react-navigation";
import LinksScreen from '../screens/LinksScreen';

const ChooseServiceStack = createStackNavigator(
  {
    // TODO: Fix this
    ServiceOptions: LinksScreen,

    // TODO: Fix this
    ServiceOptionsSuccess: LinksScreen
  }
);

export default ChooseServiceStack;