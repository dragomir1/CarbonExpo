import {createStackNavigator} from "react-navigation";
import LinksScreen from '../screens/LinksScreen';
import ChooseServiceOptionsScreen from '../screens/ChooseServiceOptionsScreen';

const ChooseServiceStack = createStackNavigator(
  {
    ServiceOptions: ChooseServiceOptionsScreen,

    // TODO: Fix this
    ServiceOptionsSuccess: LinksScreen
  },
  {
    headerMode: 'none'
  }
);

export default ChooseServiceStack;