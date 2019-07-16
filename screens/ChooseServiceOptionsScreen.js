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
    // this.state.serviceType = serviceType;
  }
  // swtich statement to ccle thorugh types
  returnURLHandler = () => {
    if (this.state.serviceType === "windshield") {
      return require("../assets/images/windshield-text-1x.png");
    } else if (this.state.serviceType === "carwash") {
      return require("../assets/images/carwash-text-1x.png");
    }
  };
  // in classes you dont need a declaration
  windshieldServiceOptions = [
    "Fix cracked windshield",
    "replaceWindsheild",
    "cleanWindshield",
    "replaceWindsheildWipers"
  ];

  carWashServiceOptions = ["carwash1", "carwash2", "carwash3", "carwash4"];
  engineServiceOptions = ["engine1", "engine12", "engine13", "engine14"];

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
      <TouchableOpacity>
        <View style={styles.scheduleServiceOptions}>
          <Text style={styles.optionsText}>{option}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  render() {
    // put image object below. return the URL instead

    return (
      <View style={styles.container}>
        <Image source={this.returnURLHandler()} />
        <View style={styles.containerTop}>
          <Text>{this.state.serviceType}</Text>
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

//   TODO: Set this to a service
//   const defaultServiceType = '--default-service-type--fix-me--';
//   const serviceType = props.navigation.getParam('serviceType', defaultServiceType);

// <View style={styles.container}>
//   <View style={styles.containerTop}>
//     <TouchableOpacity>
//       <EvilIcons
//         name="chevron-left"
//         size={32}
//         onPress={() => props.navigation.pop()}
//       />
//     </TouchableOpacity>
//     <View style={styles.textGreeting}>
//       {/*add state to this..*/}
//       <Text style={styles.text}>Hi, John</Text>
//       <Text style={styles.text1}>Your Car: Toyota Camry, 2011</Text>
//     </View>
//   </View>
//   <View style={styles.container}>
//     <Text>ChooseServiceOptionsScreen - Type: this.state.serviceType</Text>
//   </View>
// </View>

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
  scheduleServiceOptions: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginTop: 10,
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
    alignItems: "center"
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
