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
      carMake: "",
      carModel: "",
      carYear: "",
      carMileage: "",
      carEngineType: "",
      userName: firebase.auth().currentUser.displayName
    };
  }

  componentDidMount() {
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    firebase
      .database()
      .ref("userCarInfo/" + userId)
      .once("value", snapshot => {
        this.setState({
          carMake: snapshot.val().carMake,
          carModel: snapshot.val().carModel,
          carYear: snapshot.val().carYear,
          carMileage: snapshot.val().carMileage,
          carEngineType: snapshot.val().carYear,
        });
      });
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
        carMileage: this.state.carMileage,
        carEngineType: this.state.carEngineType
      })
      .then(() => this.props.navigation.navigate("App"))
      .catch(error => {
        console.warn(error);
      });
  };

  dataCarMake = [
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

  dataBMWModels = [
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

  dataFordModels = [
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

  dataToyotaModels = [
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

  dataCarYear = [
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

  dataCarMileage = [
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

  dataCarEngineType = [
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

  dataHondaModels = [
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

  dataHondaEngineTypes = [
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

  getCarModelOptionsForMake(carMake) {
    if (carMake === "Honda") {
      return this.dataHondaModels;
    } else if (carMake === "Toyota") {
      return this.dataToyotaModels;
    } else if (carMake === "Ford") {
      return this.dataFordModels;
    } else if (carMake === "BMW") {
      return this.dataBMWModels;
    }
  }

  render() {
    let carModelOptions = this.getCarModelOptionsForMake(this.state.carMake);

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
          data={this.dataCarMake}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carMake => this.setState({ carMake })}
          value={this.state.carMake}
          name="carMake"
        />
        <Dropdown
          label="Model"
          data={carModelOptions}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carModel => this.setState({ carModel })}
          value={this.state.carModel}
          name="carModel"
        />
        <Dropdown
          label="Year"
          data={this.dataCarYear}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carYear => this.setState({ carYear })}
          value={this.state.carYear}
          name="carYear"
        />
        <Dropdown
          label="Milage"
          data={this.dataCarMileage}
          containerStyle={styles.dropdown}
          baseColor="#000"
          onChangeText={carMileage => this.setState({ carMileage })}
          value={this.state.carMileage}
          name="carMileage"
        />
        <Dropdown
          label="Engine Type"
          data={this.dataCarEngineType}
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
