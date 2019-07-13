import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import * as firebase from 'firebase';

export default class CarInfoScreen extends React.Component {

  state = {
    carModel: ""
  }

  nameChangeHandler = (value) => {
    this.setState({carModel: value});
  };

  submitInfoHandler = () => {
    const {carModel} = this.state;
    let user = firebase.auth().currentUser;
    let userId = user.uid;
    console.warn(userId)
    firebase.database()
      .ref('userCarInfo/' + userId)
      .set({
        carModel: this.state.carModel
      })
      .then(() => {
        console.warn("added carModel");
      })
      .catch(error => {
        console.warn(error)
      });
  };


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter car model"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.nameChangeHandler}
          value={this.state.carModel}
        />
        <Button
          onPress={this.submitInfoHandler}
          title="enter"
          color="#841584"
        />
      </View>
    );
  }
}

CarInfoScreen.navigationOptions = {
  title: 'Car Info',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
