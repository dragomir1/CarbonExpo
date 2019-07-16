import React, {Component} from 'react';
import {
  DatePickerIOS,
  DatePickerAndroid,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet}
from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      text:""

    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }



  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
        <TextInput
          multiline={true}
          numberOfLines={5}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
          <TouchableOpacity
            onPress={ ()=> this.navigateToService('cashwash')}>
            <View
              style={styles.bookServiceButton}
              >
              <Text style={styles.text4}>
                Book Service
              </Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  bookServiceButton: {
    backgroundColor: "#254ade",
    borderRadius: 20,
    marginTop: 10,
    width: 175,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text4: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 12,
    fontFamily: 'open-sans-regular',
    color: '#fff',
    textAlign: 'center',
  },

});
