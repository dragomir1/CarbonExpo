import React from 'react';
import { View, StyleSheet, Text, Image,TouchableOpacity, ActivityIndicator, } from 'react-native';
import { Font } from 'expo';
import { EvilIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.  state = {
        name: "",
        carMake: "",
        carModel: "",
        carYear: "",
        timePassed: false,
        isLoaded: false,
      };
  }

// when the screen loads then the setTimeout funcion runs.


  navigateToService(serviceType) {
    this.props.navigation.push('ChooseService', { serviceType: serviceType });
  }

  // we need to get info from firebase to add in state.

 alertBoxHandler = () => {
   alertBox = setTimeout(() => {
       <View
         style={styles.scheduleServiceAlert}>
         <Text style={styles.text4}>
           You are due for an oil change.  Click the icon to schedule service.
         </Text>
       </View>
   }, 3000);
 return alertBox;
 }


  render() {
    return (
    <View style={styles.containerMain}>
        <View style={styles.containerTop}>
          <TouchableOpacity>
            <EvilIcons
              style={styles.iconStyle}
              name="navicon" size={32}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </TouchableOpacity>
          <View style={styles.textGreeting}>
          {/*add state to this..*/}
             <Text style={styles.text}>Hi, John</Text>
             <Text style={styles.text1}>Your Car: Toyota Camry, 2011</Text>
          </View>
        </View>
          <Text>{this.alertBoxHandler()}</Text>
      <View style={styles.containerMain1}>
          <View>
            <TouchableOpacity
              onPress={ ()=> this.navigateToService('engine') }>
              <Image
                source={require('../assets/images/engine-text-1x.png')}
                style={styles.images}
                />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ ()=> this.navigateToService('windshield') }
              >
              <Image
                source={require('../assets/images/windshield-text-1x.png')}
                style={styles.images}
                />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/tires-text-1x.png')}
                style={styles.images}
                />
            </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={ ()=> this.navigateToService('carwash') }
                >
                <Image
                  source={require('../assets/images/carwash-text-1x.png')}
                  style={styles.images}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={ ()=> this.navigateToService('gas') }
                >
                <Image
                  source={require('../assets/images/gas-text-1x.png')}
                  style={styles.images}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={ ()=> this.navigateToService('search') }
                >
                <Image
                  source={require('../assets/images/search-text-1x.png')}
                  style={styles.images}
                  />
              </TouchableOpacity>
            </View>
      </View>

        <View
          style={styles.updateButtonStyle}>
          <TouchableOpacity
            onPress={ ()=> this.props.navigation.navigate('CarInfoStack') }
            >
          <Image
            source={require('../assets/images/update.png')}
            />
          </TouchableOpacity>
        </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    marginTop:50
  },
  containerMain1: {
    // flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    // alignContent: 'center',
    flexDirection: 'row',
    // flexWrap: 'wrap'
  },
  text: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 18,
    fontFamily: 'open-sans-regular',
  },
  text1: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 14,
    fontFamily: 'open-sans-regular',
  },
  text2: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 14,
    fontFamily: 'open-sans-regular',
    textDecorationColor: '#fff'
  },
  text3: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 18,
    fontFamily: 'open-sans-regular',
    color: '#fff'
  },
  text4: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 12,
    fontFamily: 'open-sans-regular',
    color: '#fff',
    textAlign: 'center',
  },
  textGreeting: {
    flexDirection: 'column',

  },
  scheduleServiceButton: {
    backgroundColor: "#254ade",
    borderRadius: 20,
    marginTop: 10,
    width: 175,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleServiceAlert: {
    backgroundColor: "#254ade",
    borderRadius: 20,
    marginTop: 10,
    width: 175,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertStyling: {
    // fix this styling
    backgroundColor: "#254ade",
    marginTop: 20,
    width: "92%",
    height: 50,
    // marginLeft: 80,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "column",
    marginLeft: 14
    // alignItems: 'center'

  },
  iconStyle: {
    // is this the best way to space this out?
    marginLeft: 60
  },
  containerTop: {
    // flex: 1,
    // marginTop: 40,
    flexDirection: 'row-reverse',
    // flexDirection: 'row',
    // // marginLeft: 20
    // justifyContent: "center",
    justifyContent: "space-around",
  },
  containerButton: {
    paddingTop: 10,
    justifyContent: 'center',
    // alignContent: 'center',
    flexDirection: 'column',
    // flexWrap: 'wrap'
  },
  images: {
    borderColor: '#f2f2f2',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
    // width: undefined,
    // height: undefined
  },
  updateButtonStyle: {
  // flex: 1,
  // justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: 20,
  }
});
