import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Expo from "expo";
import * as firebase from "firebase";
import { Google } from 'expo';

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId:
        "681396418154-s46q2sgrsg4o0tud5dulse4vvs53fl2p.apps.googleusercontent.com",
      iosClientId:
        "681396418154-n1rij7cdhvgrq2u10tq2s4pscqaveh9l.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });
    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        null, result.accessToken
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(userCredential => {
          console.warn("google sigIn success");
        })
        .catch(error => {
          console.warn(error);
          // Handle Errors here.
        });
    } else {
      console.warn("didn't log in");
    }
  } catch (e) {
    console.warn(e);
  }
}

const styles = StyleSheet.create({
  marginTop: 12,
  width: 297,
  borderRadius: 10,
  height: 40
});

export default function GoogleLoginButton() {
  return (
    <TouchableOpacity
      onPress={signInWithGoogleAsync}>
      <Image
        source={require("./img/google.png")}
        style={styles} />
    </TouchableOpacity>
  );
}
