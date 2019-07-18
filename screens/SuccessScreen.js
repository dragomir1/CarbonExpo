import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Font } from 'expo';

export default class SuccessScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      time: false,
      date: false,

    };

  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.blueBox}>
          <Text style={styles.textheader}>
            Sweet Success!
          </Text>
          <Text style={styles.textBody}>You're appointment has been booked.  You will recieve a confirmation text and email with your order.
          </Text>
          <Image
            source={require('../assets/images/thumbsup-1x.png')}
            style={styles.images}
            />
            <Text style={styles.textheader1}>
              this.state.date at this.state.time
            </Text>
            <Text style={styles.textBody1}>
              Your technician will call you if more information is required.
            </Text>

        </View>


      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('App')}
      >
        <View style={styles.backToDashboardButton}>
          <Text style={styles.text4}>Back to Dashboard</Text>
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
    alignItems: 'center',
    flexDirection: "column"

  },
  backToDashboardButton: {
    marginTop: 20
  },
  blueBox: {

    // look into hieght and wieght issue..can you use % or have it flex based on screen size
    backgroundColor: "#254ade",
    borderRadius: 10,
    // marginTop: 10,
    width: 275,
    paddingLeft: 15,
    paddingRight: 15,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  text4: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 14,
    fontFamily: 'open-sans-regular',
    color: '#000',
    textAlign: 'center',
  },
  textBody: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 18,
    paddingTop: 15,
    fontFamily: 'open-sans-regular',
    color: '#fff',
    textAlign: 'center',
  },
  textBody1: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 14,
    paddingTop: 15,
    fontFamily: 'open-sans-regular',
    color: '#fff',
    textAlign: 'center',
  },
  textheader: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 25,
    fontFamily: 'open-sans-regular',
    color: '#fff',
    textAlign: 'center',
  },
  textheader1: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'open-sans-regular',
    color: '#fff',
    textAlign: 'center',
  },
  images: {
    // paddingTop: 20,
    marginTop: 25,
  },

});
