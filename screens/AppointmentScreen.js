import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet}
from 'react-native';
import * as SMS from 'expo-sms';
import { Font } from "expo";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class AppointmentScreen extends React.Component {
  constructor(props) {
    super(props);

    // const defaultApptType = "--default-service-type--fix-me--";
    // const apptType = this.props.navigation.getParam(
    //   "apptType",
    //   defaultApptType
    // );
    this.state = {
      isDateTimePickerVisible: false,
      textarea: "",
      // apptType: apptType
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.appointmentHeader}>{this.state.apptType} Appointment.</Text>
          <Text style={styles.appointmentBodyInfo}>
            Tell us what day and time works best for you.  Add additional information if necessary.
          </Text>
        </View>
        <Button
          title="Show DatePicker"
          onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      <View style={{backgroundColor: this.state.textarea}}>
        <TextInput
        style={styles.test}
        placeholder="Additional information"
        editable = {true}
        multiline = {true}
        numberOfLines = {4}
        onChangeText={(textarea) => this.setState({textarea})}
        value={this.state.textarea}
        />
    </View>
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('App')}
      style={styles.buttonStyling}
      >
    <Image source={require('../assets/images/book-service.png')} />
    </TouchableOpacity>
      </View>
    );
  }
}

AppointmentScreen.navigationOptions = {
  title: "Appointment Screen"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  test: {
    paddingLeft: 5,
    marginTop: 15,
    borderColor: '#f3f3f3',
    borderRadius: 10,
    borderWidth: 2,
    width:250,
    height: 200,
    // justifyContent: 'center',
    // textAlign: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: "center"

  },
  buttonStyling: {
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentHeader: {
    fontSize: 20,
    fontFamily: "roboto-bold",
    fontWeight: "700"
  },
  appointmentBodyInfo: {
    fontSize: 15,
    fontFamily: "open-sans-regular",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    justifyContent: "center"
  },
});
