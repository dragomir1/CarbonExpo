import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { Dropdown } from "react-native-material-dropdown";
import { Font } from "expo";

export default class CarInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carModel: "",
      carYear: "",
      carMake: "",
      carMilage: "",
      carEngineType: "",
      userName: firebase.auth().currentUser.displayName
    };
  }


  submitInfoHandler = () => {
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    firebase
      .database()
      .ref("userCarInfo/" + userId)
      .set({
        carModel: this.state.carModel,
        carYear: this.state.carYear,
        carMake: this.state.carMake,
        carMilage: this.state.carMilage,
        carEngineType: this.state.carEngineType
      })
      .then(() => this.props.navigation.navigate("App"))
      .catch(error => {
        console.warn(error);
      });
  };

  render() {
    let dataCarMake = [
      {
        value: "Toyota"
      },
      {
        value: "Honda"
      },
      {
        value: "Ford"
      },
      {
        value: "BMW"
      }
    ];

    let dataBMWModels = [
      {
        value: "M3"
      },
      {
        value: "M5"
      },
      {
        value: "X5"
      },
      {
        value: "X6"
      },
      {
        value: "X3"
      },
      {
        value: "Z4"
      }
    ];

    let dataFordModels = [
      {
        value: "Mustang"
      },
      {
        value: "Focus"
      },
      {
        value: "Fusion"
      },
      {
        value: "Escape"
      },
      {
        value: "F-150"
      },
      {
        value: "Fiesta"
      }
    ];

    let dataToyotaModels = [
      {
        value: "Camry"
      },
      {
        value: "Prius"
      },
      {
        value: "Corolla"
      },
      {
        value: "Highlander"
      },
      {
        value: "4Runner"
      },
      {
        value: "Rav4"
      }
    ];

    let dataCarYear = [
      {
        value: "2019"
      },
      {
        value: "2018"
      },
      {
        value: "2017"
      },
      {
        value: "2016"
      },
      {
        value: "2015"
      },
      {
        value: "2014"
      }
    ];

    let dataCarMilage = [
      {
        value: "> 50,000"
      },
      {
        value: "> 100,000"
      },
      {
        value: "> 125,000"
      },
      {
        value: "> 150,000"
      },
      {
        value: "> 175,000"
      },
      {
        value: "> 200,000"
      }
    ];

    let dataCarEngineType = [
      {
        value: "V6"
      },
      {
        value: "2.4L"
      },
      {
        value: "5.0"
      },
      {
        value: "Turbo"
      },
      {
        value: "6 Cylinder"
      },
      {
        value: "Electic"
      }
    ];

    let dataHondaModels = [
      {
        value: "Civic"
      },
      {
        value: "Insight"
      },
      {
        value: "Accord"
      },
      {
        value: "Pilot"
      },
      {
        value: "CR-V"
      },
      {
        value: "Fit"
      }
    ];

    let dataHondaEngineTypes = [
      {
        value: "V4-cylinder"
      },
      {
        value: "6-cylinder"
      },
      {
        value: "V6"
      },
      {
        value: "V8"
      },
      {
        value: "Straight 4"
      },
      {
        value: "Inline 5-cylinder"
      }
    ];

    let optionModels;
    // switch case
    if (this.state.carMake === "Toyota") {
      optionModels = (
        <Dropdown
          label="Model"
          data={dataToyotaModels}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carModel => this.setState({ carModel })}
          value={this.state.carModel}
          name="carModel"
        />
      );
    } else if (this.state.carMake === "Honda") {
      optionModels = (
        <Dropdown
          label="Model"
          data={dataHondaModels}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carModel => this.setState({ carModel })}
          value={this.state.carModel}
          name="carModel"
        />
      );
    } else if (this.state.carMake === "Ford") {
      optionModels = (
        <Dropdown
          label="Model"
          data={dataFordModels}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carModel => this.setState({ carModel })}
          value={this.state.carModel}
          name="carModel"
        />
      );
    } else if (this.state.carMake === "BMW") {
      optionModels = (
        <Dropdown
          label="Model"
          data={dataBMWModels}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carModel => this.setState({ carModel })}
          value={this.state.carModel}
          name="carModel"
        />
      );
    }

    let dataOption;
    if (this.state.carMake === "Honda") {
      dataOption = dataHondaModels;
    } else if (this.state.carMake === "Toyota") {
      dataOption = dataToyotaModels;
    } else if (this.state.carMake === "Ford") {
      dataOption = dataFordModels;
    } else if (this.state.carMake === "BMW") {
      dataOption = dataBMWModels;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.carHeader}>
          Hi {this.state.userName}, Tell us about your car
        </Text>
        <Text style={styles.carBodyInfo}>
          Before we can connect you with our technicians, We can better assist
          you in situations by knowing these few facts about your car.
        </Text>
        <Dropdown
          label="Make"
          data={dataCarMake}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carMake => this.setState({ carMake })}
          Value={this.state.carMake}
          name="carMake"
        />
        <Dropdown
          label="Model"
          data={dataOption}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carModel => this.setState({ carModel })}
          value={this.state.carModel}
          name="carModel"
        />
        <Dropdown
          label="Year"
          data={dataCarYear}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carYear => this.setState({ carYear })}
          value={this.state.carYear}
          name="carYear"
        />
        <Dropdown
          label="Milage"
          data={dataCarMilage}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carMilage => this.setState({ carMilage })}
          value={this.state.carMilage}
          name="carMilage"
        />
        <Dropdown
          label="Engine Type"
          data={dataCarEngineType}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carEngineType => this.setState({ carEngineType })}
          value={this.state.carEngineType}
          name="carEngineType"
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CreditCardInfoScreen")}
        >
          <View style={styles.ccInfo}>
            <Text style={styles.ccInfoText}>Add Credit Card Information</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.submitInfoHandler}>
          <View style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

CarInfoScreen.navigationOptions = {
  title: "Car Info"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  ccInfo: {
    height: 25,
    width: 175,
    backgroundColor: "#000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  continueButton: {
    height: 25,
    width: 175,
    backgroundColor: "#254ade",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  continueText: {
    color: "#fff",
    fontSize: 12
  },
  ccInfoText: {
    color: "#fff",
    fontSize: 12
  },
  carHeader: {
    fontSize: 20,
    fontFamily: "roboto-bold",
    fontWeight: "700"
  },
  carBodyInfo: {
    fontSize: 15,
    fontFamily: "open-sans-regular",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    justifyContent: "center"
  },
  dropdown: {
    marginBottom: 10,
    width: 200,
    height: 50
  },
  continueStyling: {
    marginTop: 10
  }
});
