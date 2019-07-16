import { DrawerItems, SafeAreaView } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { Font } from 'expo';


// Creating a custom drawer content so we can have the logout button at the bottom
// And we can style this however we want
// https://reactnavigation.org/docs/en/drawer-navigator.html
const AppDrawerContent = props => (
  <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <DrawerItems {...props} />
      <TouchableOpacity>
        <Text style={styles.logoutStyle}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.logoutStyle}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.logoutStyle}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.logoutStyle}>Help</Text>
      </TouchableOpacity>
    <TouchableOpacity
      onPress={() => firebase.auth().signOut() }>
      <Text style={styles.logoutStyle1}>Logout</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutStyle: {
    fontFamily: 'open-sans-regular',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 25,
    marginLeft: 20,

  },
  logoutStyle1: {
    fontFamily: 'open-sans-regular',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginTop: 45,
    marginLeft: 20,

  }
});

export default AppDrawerContent;
