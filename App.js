import './configuration/firebase.js';
// import { AppAuth } from 'expo-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';

import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import AppNavigator from './navigation/AppNavigator';

// const { URLSchemes } = AppAuth;

async function loadResourcesAsync() {
  await Promise.all([
    // do we need to preload the images here...
    // Asset.loadAsync([
    // require('./assets/images/filename')
    // ])
    Font.loadAsync({
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
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

async function googleSigninInit() {
  try {
    await GoogleSignIn.initAsync({
      clientId:
        '681396418154-7n0u73svmuv7rds91f9ranmp0usi9uv3.apps.googleusercontent.com'
    });
  } catch ({ message }) {
    alert('GoogleSignIn.initAsync(): ' + message);
  }
}
googleSigninInit();

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
        {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
