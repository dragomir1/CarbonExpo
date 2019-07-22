import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import * as firebase from "firebase";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Is there a better place to put this? IDK.
    firebase.auth().onAuthStateChanged(user => {
      // this.props.navigation.navigate(user ? 'App' : 'Auth');

      // if user => nav to app else nav to setting screen

      if (user) {
        let user = firebase.auth().currentUser;
        let userId = user.uid;
        console.warn(userId);
        firebase
          .database()
          .ref("userCarInfo/" + userId)
          .once("value", snapshot => {
            if (snapshot.exists()) {
              this.props.navigation.navigate("App");
            } else {
              this.props.navigation.navigate("CarInfoStack");
            }
          });
      } else {
        this.props.navigation.navigate("Auth");
      }
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
