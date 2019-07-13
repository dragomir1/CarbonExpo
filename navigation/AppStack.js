import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ChooseServiceStack from './ChooseServiceStack';
import AppDrawer from './AppDrawer';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const AppStack = createStackNavigator(
  {
    App: AppDrawer,
    ChooseService: ChooseServiceStack,
  },
  config
);

export default AppStack;