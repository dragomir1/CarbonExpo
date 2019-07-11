import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Is there a better place to put this? IDK.
    firebase.auth().onAuthStateChanged(user => {
      console.warn("User: " + user);
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    });
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}