import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Font } from "expo";
import { EvilIcons } from "@expo/vector-icons";

export default class SuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blueBox}>
          <Text style={styles.textheader}>Sweet Success!</Text>
          <Text style={styles.textBody}>
            Your appointment has been booked. You will receive a Notification
            with details.
          </Text>
          <Image
            source={require("../assets/images/thumbsup-1x.png")}
            style={styles.images}
          />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("App")}>
          <View style={styles.backToDashboardButton}>
            <Text style={styles.text4}>Back to Dashboard</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  backToDashboardButton: {
    height: 25,
    width: 175,
    backgroundColor: "#000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  blueBox: {
    backgroundColor: "#254ade",
    borderRadius: 10,
    width: 275,
    paddingLeft: 15,
    paddingRight: 15,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text4: {
    fontSize: 14,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textBody: {
    fontSize: 18,
    paddingTop: 15,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textBody1: {
    fontSize: 14,
    paddingTop: 15,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textheader: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 25,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textheader1: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  images: {
    marginTop: 25
  }
});
