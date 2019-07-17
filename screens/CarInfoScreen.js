import React from 'react';
import {View, StyleSheet, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import { Dropdown } from 'react-native-material-dropdown';
import { Font } from 'expo';


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
    }
  }

  nameChangeHandler = (value) => {
    this.setState({
      carModel: value,
      carYear: value,
      carMake: value,
      carMilage: value,
      carEngineType: value
    });
  };

  submitInfoHandler = () => {
    const {
      carModel,
      carYear,
      carMake,
      carMilage,
      carEngineType
    } = this.state;

    let user = firebase.auth().currentUser;
    let userId = user.uid;
    console.warn(userId)
    firebase.database()
      .ref('userCarInfo/' + userId)
      .set({
        carModel: this.state.carModel,
        carYear: this.state.carYear,
        carMake: this.state.carMake,
        carMilage: this.state.carMilage,
        carEngineType: this.state.carEngineType
      })
      .then(() => {
        console.warn("added Car Info");
      })
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => {
        console.warn(error)
      });
  };


  render() {

    let dataCarMake = [{
      value: 'Toyota'
    }, {
      value: 'Honda'
    }, {
      value: 'Ford'
    }, {
      value: 'Tesla'
    }, {
      value: 'GMC'
    }, {
      value: 'BMW'
    }];

    let dataCarModel =[{
      value: 'Camry'
    }, {
      value: 'Prius'
    }, {
      value: 'Corolla'
    }, {
      value: 'Highlander'
    }, {
      value: '4Runner'
    }, {
      value: 'Rav4'
    }];

    let dataCarYear =[{
      value: '2019'
    }, {
      value: '2018'
    }, {
      value: '2017'
    }, {
      value: '2016'
    }, {
      value: '2015'
    }, {
      value: '2014'
    }];

    let dataCarMilage =[{
      value: '> 50,000'
    }, {
      value: '> 100,000'
    }, {
      value: '> 125,000'
    }, {
      value: '> 150,000'
    }, {
      value: '> 175,000'
    }, {
      value: '> 200,000'
    }];

    let dataCarEngineType =[{
      value: "V6"
    }, {
      value: "2.4L"
    }, {
      value: "5.0"
    }, {
      value: 'Turbo'
    }, {
      value: "6 Cylinder"
    }, {
      value: "Electic"
    }];

    let dataHondaModels =[{
      value: "Civic"
    }, {
      value: "Insight"
    }, {
      value: "Accord"
    }, {
      value: 'Pilot'
    }, {
      value: "CR-V"
    }, {
      value: "Fit"
    }];

    let dataHondaEngineTypes =[{
      value: "V4-cylinder"
    }, {
      value: "6-cylinder"
    }, {
      value: "V6"
    }, {
      value: 'V8'
    }, {
      value: "Straight 4"
    }, {
      value: "Inline 5-cylinder"
    }];


  // if(this.state.carMake === "Toyota") {
  // display Toyota's carModels...else if this.state.carMake === 'Honda'
  // display Honda's carModels.

    return (
      <View style={styles.container}>
        <Text style={styles.carHeader}> Hi, {this.state.userName}, Tell us about your car</Text>
        <Text style={styles.carBodyInfo}>Before we can connect you with our technicians, We can better assist in situations by knowing these few facts about your car.</Text>
        <Dropdown
          label="Make"
          data={dataCarMake}
          style={styles.dropdown}
          baseColor="#000"
          onPress={this.nameChangeHandler}
          value={this.state.carMake}
          />

        <Dropdown
          label="Model"
          data={dataCarModel}
          style={styles.dropdown}
          baseColor="#000"
          onPress={this.nameChangeHandler}
          value={this.state.carModel}
          />

        <Dropdown
          label="Year"
          data={dataCarYear}
          style={styles.dropdown}
          baseColor="#000"
          onPress={this.nameChangeHandler}
          value={this.state.carYear}
          />

        <Dropdown
          label="Milage"
          data={dataCarMilage}
          style={styles.dropdown}
          baseColor="#000"
          onPress={this.nameChangeHandler}
          value={this.state.carMilage}
          />

        <Dropdown
          label="Engine Type"
          data={dataCarEngineType}
          style={styles.dropdown}
          baseColor="#000"
          onPress={this.nameChangeHandler}
          value={this.state.carEngineType}
          />
        <TouchableOpacity>
          <View style={styles.ccInfo}>
            <Text style={styles.ccInfoText}>
              Add Credit Card Information
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.submitInfoHandler}
          style={styles.continueStyling}
          >
        <Image source={require('../assets/images/continue.png')} />
        </TouchableOpacity>

      </View>
    );
  }
}

// <TextInput
//   placeholder="Enter car model"
//   autoCapitalize="none"
//   style={styles.textInput}
//   onChangeText={this.nameChangeHandler}
//   value={this.state.carModel}
// />

CarInfoScreen.navigationOptions = {
  title: 'Car Info',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row'
  },
  ccInfo: {
    height: 25,
    width: 175,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  ccInfoText: {
    // paddingT: 30,
    color: "#fff",
    fontSize: 12,
    // justifyContent: 'center',
    // alignItems: 'center'

  },
  carHeader: {
    fontSize: 20,
    fontFamily: 'roboto-bold',
    fontWeight: '700',
  },
  carBodyInfo: {
    fontSize: 15,
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  dropdown: {
    padding: 45,
    marginBottom: 10,
  },
  continueStyling: {
    marginTop: 10,
  }
});
