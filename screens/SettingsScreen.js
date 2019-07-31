import React from "react";
import { Button, View } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import * as firebase from "firebase";

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <Button title="Logout" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: "app.json"
};
