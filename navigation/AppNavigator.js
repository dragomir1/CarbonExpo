import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import CarInfoScreen from '../screens/CarInfoScreen';
import AppStack from './AppStack';

const AuthStack = createStackNavigator({
  Registration: HomeScreen,
  Login: LoginScreen,
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    // This is the actual app
    AppStack: AppStack,

    // TODO: Change this to a stack for adding Payment info
    // post-registration info
    CarInfoStack: CarInfoScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
