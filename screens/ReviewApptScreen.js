import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Font } from "expo";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export default class SuccessScreen extends Component {
  constructor(props) {
    super(props);

    const defaultApptType = "--default-appt-type--fix-me--";
    const apptType = this.props.navigation.getParam(
      "apptType",
      defaultApptType
    );

    const defaultdateType = "--default-date-type--fix-me--";
    const date = this.props.navigation.getParam("date", defaultdateType);

    const defaultPhoneNumberType = "--default-phone-type--fix-me--";
    const phoneNumber = this.props.navigation.getParam(
      "phoneNumber",
      defaultPhoneNumberType
    );

    this.state = {
      customerRequest: "",
      date: date,
      apptType: apptType,
      phoneNumber: phoneNumber
    };

    Notifications.scheduleLocalNotificationAsync(
      {
        title: "Your car appointment",
        body: "You're scheduled for:",
      },
      {
        time: new Date().getTime() + 1000
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton} />
        <View style={styles.blueBox}>
          <Text style={styles.textheader}>Please Review Your Appointment!</Text>
          <Entypo style={styles.images} name="magnifying-glass" size={60} />
          <Text style={styles.timeStyle}>Time:</Text>
          <Text style={styles.textheader1}>
            {this.state.date.toLocaleString()}
          </Text>
          <Text style={styles.timeStyle1}>Service:</Text>
          <Text style={styles.textheader2}>{this.state.apptType}.</Text>
          <Text style={styles.textBody1}>
            Your technician will call you at {this.state.phoneNumber} if more
            information is required.
          </Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <View style={styles.apptButton}>
            <Text style={styles.changeApptText}>Change your appointment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SuccessScreen")}
        >
          <View style={styles.bookServiceButton}>
            <Text style={styles.text4}>Book Service</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("App")}>
          <View style={styles.backToDashboardButton1}>
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
  bookServiceButton: {
    height: 25,
    width: 175,
    backgroundColor: "#000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  backToDashboardButton1: {
    height: 25,
    width: 175,
    backgroundColor: "#007acc",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  apptButton: {
    height: 25,
    width: 175,
    backgroundColor: "#254ade",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  backButton: {
    flexDirection: "row"
  },
  timeStyle: {
    textDecorationLine: "underline",
    color: "#fff"
  },
  timeStyle1: {
    textDecorationLine: "underline",
    color: "#fff",
    marginTop: 15
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
  changeApptText: {
    fontSize: 12,
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
    fontSize: 25,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textheader1: {
    fontSize: 20,
    marginTop: 3,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textheader2: {
    fontSize: 20,
    marginTop: 3,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  images: {
    marginTop: 10,
    marginBottom: 10,
    color: "#fff"
  }
});
