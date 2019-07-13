import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,
  createAppContainer, createSwitchNavigator } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import CarInfoScreen from '../screens/CarInfoScreen';
import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/DashboardScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const DashboardStack = createStackNavigator(
  {
    Home: DashboardScreen,

  },
  config
);

DashboardStack.navigationOptions = {
  tabBarLabel: 'D',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

DashboardStack.path = '';


const HomeStack = createStackNavigator(
  {
    Home: CarInfoScreen,

  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'H',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DashboardStack,
  // LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
