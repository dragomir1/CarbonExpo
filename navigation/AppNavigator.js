import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import CarInfoScreen from '../screens/CarInfoScreen';
import CreditCardInfoScreen from '../screens/CreditCardInfoScreen';
import AppointmentScreen from '../screens/AppointmentScreen'
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
    // added this for navigation...not sure if it's in right place
    CreditCardInfoScreen: CreditCardInfoScreen,
    AppointmentScreen: AppointmentScreen

  },
  {
    initialRouteName: 'AuthLoading',
  }
));
