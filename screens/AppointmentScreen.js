import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import * as SMS from "expo-sms";
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
      customerRequest: "",
      date: "",
      serviceType: serviceType,
      phoneNumber: "",
      apptType: apptType
    };
  }

  navigateToApptRequest() {
    this.props.navigation.push("ReviewApptScreen", {
      date: this.state.date,
      apptType: this.state.apptType,
      phoneNumber: this.state.phoneNumber
    });
  }

  returnURLHandler = () => {
    if (this.state.serviceType === "windshield") {
      return require("../assets/images/windshield-text.png");
    } else if (this.state.serviceType === "carwash") {
      return require("../assets/images/carwash-text.png");
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
    this.setState({
      date: date
    });
    this.hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.returnURLHandler()} />
        <View style={styles.headerContainer}>
          <Text style={styles.appointmentHeader}>{this.state.apptType}</Text>
          <Text style={styles.appointmentHeader}>Appointment.</Text>
          <Text style={styles.appointmentBodyInfo}>
            Tell us what day and time works best for you. Add additional
            information below if necessary.
          </Text>
        </View>
        <Button
          style={styles.dateButton}
          title="Pick a date and time"
          onPress={this.showDateTimePicker}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          timePickerModeAndroid="default"
          mode="datetime"
          is24Hour={false}
          minuteInterval={30}
        />
        <View style={styles.chosenDate}>
          <Text style={styles.dateText}>
            {this.state.date && this.state.date.toLocaleString()}
          </Text>
        </View>
        <View style={{ backgroundColor: this.state.textarea }}>
          <TextInput
            placeholder="phone number"
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            value={this.state.phoneNumber}
            style={styles.phoneInputSytling}
          />
          <TextInput
            placeholder="additional info"
            style={styles.textInputSytling}
            editable={true}
            multiline={true}
            onChangeText={customerRequest => this.setState({ customerRequest })}
            value={this.state.textarea}
          />
        </View>
        <TouchableOpacity onPress={() => this.navigateToApptRequest()}>
          <View style={styles.backToDashboardButton1}>
            <Text style={styles.text4}>Book Service</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("App")}>
          <View style={styles.backToDashboardButton}>
            <Text style={styles.text4}>Back to Dashboard</Text>
          </View>
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
    justifyContent: "center",
    alignItems: "center"
  },
  dateButton: {
    marginTop: 15
  },
  textInputSytling: {
    paddingLeft: 5,
    marginTop: 15,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    borderWidth: 2,
    width: 250,
    height: 125
  },
  phoneInputSytling: {
    paddingLeft: 5,
    borderColor: "#e6e6e6",
    borderRadius: 5,
    borderWidth: 2
  },
  buttonStyling: {
    marginTop: 20
  },
  backButton: {
    flexDirection: "row"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center"
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
  backToDashboardButton: {
    height: 25,
    width: 175,
    backgroundColor: "#000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  chosenDate: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  backToDashboardButton1: {
    height: 25,
    width: 175,
    backgroundColor: "#254ade",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  text4: {
    fontSize: 14,
    fontFamily: "open-sans-regular",
    color: "#fff",
    textAlign: "center"
  },
  dateText: {
    fontSize: 14,
    fontFamily: "open-sans-regular",
    color: "#000",
    textAlign: "center"
  }
});
