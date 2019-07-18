import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet}
from 'react-native';
import * as SMS from 'expo-sms';


export default class AppointmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };


  }


  render() {
    return (
      <View>
        <Text>
          Hi
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
