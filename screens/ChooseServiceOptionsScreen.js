import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';
import { Font } from 'expo';

export default class ChooseServiceOptionsScreen extends React.Component {

    state = {


    }

// this screen loads different images and service options depending on what the user chooses in the DashboardScreen.  we'll need to pass state., have constants holding service option state. conditional statements.


  render() {
    // let carwashservice = (
    //
    // )
    //
    // let engineservice = (
    //
    // )



    // let image = <Image />
    //
    // let serviceOptions = (
    //   <TouchableOpacity>
    //     <View
    //       style={styles.scheduleServiceOptions}>
    //       <Text style={styles.optionsText}>
    //         this.state...
    //       </Text>
    //     </View>
    //   </TouchableOpacity>
    //   <TouchableOpacity>
    //     <View
    //       style={styles.scheduleServiceOptions}>
    //       <Text style={styles.optionsText}>
    //         this.state...
    //       </Text>
    //     </View>
    //   </TouchableOpacity>
    //   <TouchableOpacity>
    //     <View
    //       style={styles.scheduleServiceOptions}>
    //       <Text style={styles.optionsText}>
    //         this.state...
    //       </Text>
    //     </View>
    //   </TouchableOpacity>
    //   <TouchableOpacity>
    //     <View
    //       style={styles.scheduleServiceOptions}>
    //       <Text style={styles.optionsText}>
    //         this.state...
    //       </Text>
    //     </View>
    //   </TouchableOpacity>
    // )



    return (
      <View style={styles.container}>
        {/*image changes to the correct pic depending on what they select in DashboardScreen*/}
        <Image
          source={require('../assets/images/engine-text.png')}
          />
        <View style={styles.containerTop}>
          <Text style={styles.serviceHeader}>Let us take of it for you.</Text>
          <Text style={styles.serviceBodyInfo}>The service you select comes with your technician</Text>
            <TouchableOpacity>
              <View
                style={styles.scheduleServiceOptions}>
                <Text style={styles.optionsText}>
                  this.state...
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={styles.scheduleServiceOptions}>
                <Text style={styles.optionsText}>
                  this.state...
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={styles.scheduleServiceOptions}>
                <Text style={styles.optionsText}>
                  this.state...
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={styles.scheduleServiceOptions}>
                <Text style={styles.optionsText}>
                  this.state...
                </Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>

    )
  };
}



//   TODO: Set this to a service
//   const defaultServiceType = '--default-service-type--fix-me--';
//   const serviceType = props.navigation.getParam('serviceType', defaultServiceType);



// <View style={styles.container}>
//   <View style={styles.containerTop}>
//     <TouchableOpacity>
//       <EvilIcons
//         name="chevron-left"
//         size={32}
//         onPress={() => props.navigation.pop()}
//       />
//     </TouchableOpacity>
//     <View style={styles.textGreeting}>
//       {/*add state to this..*/}
//       <Text style={styles.text}>Hi, John</Text>
//       <Text style={styles.text1}>Your Car: Toyota Camry, 2011</Text>
//     </View>
//   </View>
//   <View style={styles.container}>
//     <Text>ChooseServiceOptionsScreen - Type: this.state.serviceType</Text>
//   </View>
// </View>

ChooseServiceOptionsScreen.navigationOptions = {
  title: 'Service Screen',
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 45,
    // backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scheduleServiceOptions: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginTop: 10,
    width: 300,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTop: {
    // flex: 1,
    // paddingTop: 25,
    // backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsText: {
    // paddingRight: 20,
    // marginTop:10,
    fontSize: 20,
    fontFamily: 'open-sans-regular',
    color: '#333333',
    textAlign: 'center',
  },
  serviceHeader: {
    fontSize: 20,
    fontFamily: 'roboto-bold',
    fontWeight: '700',
  },
  serviceBodyInfo: {
    fontSize: 15,
    fontFamily: 'open-sans-regular',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  // containerTop: {
  //   flex: 1,
  //   backgroundColor: '#555',
  //   justifyContent: "space-around",
  // },
});
