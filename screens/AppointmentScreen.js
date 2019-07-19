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
import { EvilIcons } from "@expo/vector-icons";


export default class AppointmentScreen extends React.Component {
  constructor(props) {
    super(props);

    const defaultServiceType = "--default-service-type--fix-me--";
    const serviceType = this.props.navigation.getParam(
      "serviceType",
      defaultServiceType
    );

    const defaultApptType = "--default-appt-type--fix-me--";
    const apptType = this.props.navigation.getParam(
      "apptType",
      defaultApptType
    );

    this.state = {
      isDateTimePickerVisible: false,
      textarea: "",
      date: "",
      time: "",
      serviceType: serviceType,
      apptType: apptType
    };
  }

  // we need state from ChooseServiceOptionsScreen for serviceType.

  //need to map through the array of selections and render the user selection.  we need to select the time date and render that.

// render the info in the confirmation screen...set up "here are your details" screen? prior to confirming.

returnURLHandler = () => {
  if (this.state.serviceType === "windshield") {
    return require("../assets/images/windshield-text-1x.png");
  } else if (this.state.serviceType === "carwash") {
    return require("../assets/images/carwash-text-1x.png");
  } else if (this.state.serviceType === "engine") {
    return require("../assets/images/engine-text.png");
  }
};

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
        <View style={styles.headerContainer}>
          <Text style={styles.appointmentHeader}>
            {this.state.apptType}
          </Text>
          <Text style={styles.appointmentHeader}>Appointment.</Text>
          <Text style={styles.appointmentBodyInfo}>
            Tell us what day and time works best for you.  Add additional information below if necessary.
          </Text>
        </View>
        <Button
          style={styles.dateButton}
          title="Pick a date and time"
          onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          timePickerModeAndroid='clock'
          mode="datetime"
          is24Hour={false}
        />
      <View style={{backgroundColor: this.state.textarea}}>
        <TextInput
          placeholder="phone number"
          />
        <TextInput
        style={styles.textInputSytling}
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
  dateButton: {
    marginTop: 15
  },
  textInputSytling: {
    paddingLeft: 5,
    marginTop: 15,
    borderColor: '#f3f3f3',
    borderRadius: 10,
    borderWidth: 2,
    width:250,
    height: 200,
  },
  buttonStyling: {
    marginTop: 20,
  },
  backButton: {
    flexDirection:"row",
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
