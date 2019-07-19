import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Font } from "expo";
import { Entypo } from "@expo/vector-icons";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

export default class SuccessScreen extends Component {
  constructor(props) {
    super(props);

    const defaultApptType = "--default-appt-type--fix-me--";
    const apptType = this.props.navigation.getParam(
      "apptType",
      defaultApptType
    );

    const defaultdateType = "--default-date-type--fix-me--";
    const date = this.props.navigation.getParam(
      "date",
      defaultdateType
    );


    const defaultPhoneNumberType = "--default-phone-type--fix-me--";
    const phoneNumber = this.props.navigation.getParam(
      "phoneNumber",
      defaultPhoneNumberType
    );

    this.state = {
      customerRequest: "",
      date: date,
      apptType: apptType,
      phoneNumber: phoneNumber,
    };

    Notifications.scheduleLocalNotificationAsync(
      {
        title: "curls for the girls",
        body: " I pump iron to pump girls"
      },
      {
        time: (new Date()).getTime() + 1000,
      },
)

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blueBox}>
          <Text style={styles.textheader}>Please Review Your Appointment!</Text>
          <Entypo style={styles.images} name="magnifying-glass" size={45} />
          <Text style={styles.textheader1}>
            {this.state.date.toLocaleString()} at {this.state.apptType}
          </Text>
          <Text style={styles.textBody1}>
            Your technician will call you at {this.state.phoneNumber} more
            information is required.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SuccessScreen")}
        >
          <View style={styles.backToDashboardButton}>
            <Text style={styles.text4}>confirm</Text>
          </View>
        </TouchableOpacity>

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
    marginTop: 20
  },
  blueBox: {
    // look into hieght and wieght issue..can you use % or have it flex based on screen size
    backgroundColor: "#254ade",
    borderRadius: 10,
    // marginTop: 10,
    width: 275,
    paddingLeft: 15,
    paddingRight: 15,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text4: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 14,
    fontFamily: "open-sans-regular",
    color: "#000",
    textAlign: "center"
  },
  textBody: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 18,
    paddingTop: 15,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textBody1: {
    // paddingRight: 20,
    // marginTop:10,
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
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 20,
    marginTop: 15,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  images: {
    // paddingTop: 20,
    marginTop: 25
  }
});
