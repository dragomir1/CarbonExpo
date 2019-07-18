import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Font } from "expo";

export default class ChooseServiceOptionsScreen extends React.Component {
  constructor(props) {
    super(props);
    // this make it a member variable belongs in a class and retains values thorugh lifetime of class...
    const defaultServiceType = "--default-service-type--fix-me--";
    const serviceType = this.props.navigation.getParam(
      "serviceType",
      defaultServiceType
    );
    this.state = {
      serviceType: serviceType
    };

  }
  // convert to a switch statment
  returnURLHandler = () => {
    if (this.state.serviceType === "windshield") {
      return require("../assets/images/windshield-text-1x.png");
    } else if (this.state.serviceType === "carwash") {
      return require("../assets/images/carwash-text-1x.png");
    } else if (this.state.serviceType === "engine") {
      return require("../assets/images/engine-text.png");
    }
  };
  // in classes you dont need a declaration
  windshieldServiceOptions = [
    "Fix cracked windshield",
    "Replace windshield",
    "Clean windshield",
    "Replace Windshield Wipers"
  ];

  carWashServiceOptions = [
    "Basic Car Wash",
    "Wash and Wax",
    "Interior wash and detailing",
    "Engine cleaning"
  ];

  engineServiceOptions = [
    "Oil change",
    "Fluid top off",
    "Diagnostics",
    "Engine optimization"
  ];

  // lives and dies here...this access the memneber variable..dont use state.
  // switch....
  serviceOptionsHandler = () => {
    let options;
    if (this.state.serviceType === "windshield") {
      options = this.windshieldServiceOptions;
    } else if (this.state.serviceType === "carwash") {
      options = this.carWashServiceOptions;
    } else if (this.state.serviceType === "engine") {
      options = this.engineServiceOptions;
    }
    return options.map(option => (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('AppointmentScreen')}
        >
        <View style={styles.scheduleServiceOptions}>
          <Text style={styles.optionsText}>{option}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity>
            <EvilIcons
              name="chevron-left"
              size={32}
              onPress={() => this.props.navigation.pop()}
            />
          </TouchableOpacity>
        </View>
        <Image source={this.returnURLHandler()} />
        <View style={styles.containerTop}>
          <Text style={styles.serviceHeader}>Let us take of it for you.</Text>
          <Text style={styles.serviceBodyInfo}>
            The service you select comes with your technician
          </Text>
          {this.serviceOptionsHandler()}
        </View>
      </View>
    );
  }
}

ChooseServiceOptionsScreen.navigationOptions = {
  title: "Service Screen"
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 45,
    // backgroundColor: '#aaa',
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    flexDirection:"row",
  },
  scheduleServiceOptions: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginTop: 20,
    width: 300,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  containerTop: {
    // flex: 1,
    // paddingTop: 25,
    // backgroundColor: '#aaa',
    justifyContent: "center",
    alignItems: "center",
  },
  optionsText: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 20,
    fontFamily: "open-sans-regular",
    color: "#333333",
    textAlign: "center"
  },
  serviceHeader: {
    fontSize: 20,
    fontFamily: "roboto-bold",
    fontWeight: "700"
  },
  serviceBodyInfo: {
    fontSize: 15,
    fontFamily: "open-sans-regular",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    justifyContent: "center"
  }
  // containerTop: {
  //   flex: 1,
  //   backgroundColor: '#555',
  //   justifyContent: "space-around",
  // },
});
