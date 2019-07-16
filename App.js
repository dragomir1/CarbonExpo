import './configuration/firebase.js';

import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import CarInfoScreen from './screens/CarInfoScreen';
import CreditCardInfoScreen from './screens/CreditCardInfoScreen';
import DashboardScreen from './screens/DashboardScreen';
import AppointmentScreen from './screens/AppointmentScreen';

async function loadResourcesAsync() {
  await Promise.all([
    // do we need to preload the images here...
    // Asset.loadAsync([
    // require('./assets/images/filename')
  // ])
    Font.loadAsync({
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    })
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
