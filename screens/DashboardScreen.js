import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Font } from "expo";
import { EvilIcons } from "@expo/vector-icons";
import * as firebase from "firebase";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      userName: firebase.auth().currentUser.displayName,
      carMake: "",
      carModel: "",
      carYear: "",
      serviceAlert: false
    };
  }

  componentDidMount() {
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    firebase
      .database()
      .ref("userCarInfo/" + userId)
      .once("value", snapshot => {
        // If the user has car info the db, then populate the form
        if (snapshot.exists()) {
          this.setState({
            carMake: snapshot.val().carMake,
            carModel: snapshot.val().carModel,
            carYear: snapshot.val().carYear
          });
        }
      });
    //will one be called one here in the constructor. constructor is the place if initialization.
    this.AlertBoxTimeoutHandler();
  }

  navigateToService(serviceType) {
    this.props.navigation.push("ChooseService", { serviceType: serviceType });
  }

  // within a class scope const/let are not valid
  alertBox = (
    <View style={styles.scheduleServiceAlert}>
      <Text style={styles.text4}>You are due for an oil change.</Text>
      <Text style={styles.text4}>Click the icon to schedule service.</Text>
    </View>
  );

  AlertBoxTimeoutHandler = () => {
    setTimeout(() => {
      this.setState({
        serviceAlert: true
      });
    }, 3000);
  };

  render() {
    // if service alert true then render

    return (
      <View style={styles.containerMain}>
        <View style={styles.containerTop}>
          <TouchableOpacity>
            <EvilIcons
              style={styles.iconStyle}
              name="navicon"
              size={32}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </TouchableOpacity>
          <View style={styles.textGreeting}>
            {/*add state to this..*/}
            <Text style={styles.text}>Hi {this.state.userName},</Text>
            {!!(this.state.carMake && this.state.carModel && this.state.carYear) &&
            <Text style={styles.text1}>
              Your Car: {this.state.carMake} {this.state.carModel},{" "}{this.state.carYear}
            </Text>
            }
          </View>
        </View>
        <View style={styles.alertView}>
          {this.state.serviceAlert && this.alertBox}
        </View>
        <View style={styles.containerMain1}>
            <TouchableOpacity onPress={() => this.navigateToService("engine")}>
              <Image
                source={require("./img/engine-text.png")}
                style={styles.images}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigateToService("windshield")}
            >
              <Image
                source={require("./img/windshield-text.png")}
                style={styles.images}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./img/tires-text.png")}
                style={styles.images}
              />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.navigateToService("carwash")}>
              <Image
                source={require("./img/carwash-text.png")}
                style={styles.images}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./img/gas-text.png")}
                style={styles.images}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./img/search-text.png")}
                style={styles.images}
              />
            </TouchableOpacity>
        </View>

        <View style={styles.updateButtonStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CarInfoStack")}
          >
            <View style={styles.backToDashboardButton}>
              <Text style={styles.text4}>Update car info</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    // flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    marginTop: 50

  },
  backToDashboardButton: {
    height: 25,
    width: 175,
    backgroundColor: "#000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // borderColor: "red",
    // borderWidth: 1,
  },
  containerMain1: {
    // borderColor: "purple",
    // borderWidth: 1,
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // alignContent: "center",
    alignSelf: "center",
        // flexGrow: 1,

  },
  alertView: {
    marginTop: 10,
    // borderColor: "blue",
    // borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    fontFamily: "open-sans-regular"
  },
  text1: {
    fontSize: 14,
    fontFamily: "open-sans-regular"
  },
  text2: {
    fontSize: 14,
    fontFamily: "open-sans-regular",
    textDecorationColor: "#fff"
  },
  text3: {
    fontSize: 18,
    fontFamily: "open-sans-regular",
    color: "#fff"
  },
  text4: {
    fontSize: 14,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  textGreeting: {
    flexDirection: "column",
    // borderColor: "green",
    // borderWidth: 1,
  },
  scheduleServiceButton: {
    backgroundColor: "#254ade",
    borderRadius: 5,
    marginTop: 20,
    width: 160,
    paddingTop: 5,
    paddingBottom: 15,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  scheduleServiceAlert: {
    backgroundColor: "#254ade",
    borderRadius: 20,
    marginTop: 10,
    width: 275,
    height: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  alertStyling: {
    backgroundColor: "#254ade",
    marginTop: 20,
    width: "92%",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 14
  },
  iconStyle: {
    marginLeft: 60
  },
  containerTop: {
    flexDirection: "row-reverse",
    justifyContent: "space-around"
  },
  containerButton: {
    paddingTop: 10,
    justifyContent: "center",
    flexDirection: "column"
  },
  images: {
    borderColor: "#f2f2f2",
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
    height: 130,
    width: 130
    // alignItems: "stretch"
    // height: "100%",
    // width: "100%"
  },
  updateButtonStyle: {
    alignItems: "center",
    // borderColor: "teal",
    // borderWidth: 1,
    flexDirection: "column",
    marginTop: 20
  }
});
