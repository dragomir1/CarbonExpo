import React from 'react';
import {View, StyleSheet, Text, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import { Font } from 'expo';


export default class CreditCardInfoScreen extends React.Component {
  render() {
  return (
    <View style={styles.container}>
        <Text style={styles.cardHeader}> Credit Card Information </Text>
        <Text style={styles.cardBodyInfo}>Fill out your payment Information for your future appointments. Not to worry, your Information is protected and safe with us.</Text>
      <View style={styles.container1}>
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Credit Card Number"
          autoCapitalize="none"
          style={styles.textInput}
        />
     </View>
      <View style={styles.containerDateCode}>
        <View style={styles.dateCode}>
          <TextInput
            placeholder="Expiration"
            autoCapitalize="none"
            style={styles.dateCodeText}
          />
        </View>
        <View style={styles.dateCodeSecCode}>
          <TextInput
            placeholder="CVV Code"
            autoCapitalize="none"
            style={styles.dateCodeText}
          />
        </View>
      </View>
      <View style={styles.container2}>
      <TextInput
        placeholder="Billing Address"
        autoCapitalize="none"
        style={styles.textInput}
      />
      </View>
      <View style={styles.containerDateCode}>
        <View style={styles.dateCodeState}>
          <TextInput
            placeholder="State"
            autoCapitalize="none"
            style={styles.dateCodeText}
          />
        </View>
        <View style={styles.dateCodeZip}>
          <TextInput
            placeholder="Zipcode"
            autoCapitalize="none"
            style={styles.dateCodeText}
          />
        </View>
      </View>
      <View style={styles.container2}>
      <TextInput
        placeholder="Phone Number"
        autoCapitalize="none"
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('App')}
        style={styles.continueStyling}
        >
      <Image source={require('../assets/images/continue.png')} />
      </TouchableOpacity>
      </View>
   </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row'
  },
  container1: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row'
  },
  container2: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row'
  },
  textInput: {
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    width: 300,
    marginBottom:10,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
  containerDateCode: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  dateCodeText: {
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  dateCode: {
    // flexDirection: 'row',
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 5,
    marginBottom:10,
    marginLeft: 40,
    // justifyContent: "space-between",
    width: 100,
    // height: 50,
  },
  dateCodeSecCode: {
    // flexDirection: 'row',
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 5,
    marginBottom:10,
    marginRight: 40,
    // paddingLeft: 10,
    // paddingRight: 20,
    // justifyContent: "space-between",
    width: 100,
    // marginRight: 30,
    // height: 50,
  },
  dateCodeState: {
    // flexDirection: 'row',
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 5,
    marginBottom:10,
    // justifyContent: "space-between",
    width: 100,
    marginLeft: 40,

    // marginLeft: 30,
    // height: 50,
  },
  dateCodeZip: {
    // flexDirection: 'row',
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 5,
    marginBottom:10,
    marginRight: 40,
    // marginRight: 30,
    // justifyContent: "space-between",
    width: 100,
    // height: 50,
  },
  date: {
    paddingRight: 10,
    marginRight: 10
  },
  cardHeader: {
    fontSize: 20,
    fontFamily: 'roboto-bold',
    fontWeight: '700',
    textAlign: 'center',
  },
  cardBodyInfo: {
    fontSize: 15,
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    justifyContent: 'center',
    marginBottom: 20
  },
  continueStyling: {
    marginTop: 10,
  }
});
