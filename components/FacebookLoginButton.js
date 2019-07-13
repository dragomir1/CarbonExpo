import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';

async function logIn() {
  try {
    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync("330107447908637", {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      console.warn('FB login success');
      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential)
        .then(userCredential => {
          console.warn('firebase sigIn success');

          // 'signIn' for a sign-in operation, 'link' for a linking operation and 'reauthenticate' for a reauthentication operation.
          //console.warn("operationType: " + operationType);
          // if (userCredential.operationType == 'signIn') {
          //
          // }
          // TODO: Handle if user is new

          // TODO: Handle if user is existing
        })
        .catch((error) => {
          console.warn(error);
        // Handle Errors here.
      });

      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const name = (await response.json()).name;


    } if (type === 'cancel') {

    } else {
      // TODO: Handle the error case:
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

const styles = StyleSheet.create({
  marginTop: 12,
  width: 297,
  borderRadius: 10,
  height: 40
})

export default function FacebookLoginButton() {
  return (
    <TouchableOpacity
      onPress={logIn}
    >
      <Image
        source={require('../assets/images/facebook.png')}
        style={styles}
      />
    </TouchableOpacity>
  );
}