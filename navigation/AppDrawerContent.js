import { DrawerItems, SafeAreaView } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

// Creating a custom drawer content so we can have the logout button at the bottom
// And we can style this however we want
// https://reactnavigation.org/docs/en/drawer-navigator.html
const AppDrawerContent = props => (
  <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <DrawerItems {...props} />
    <TouchableOpacity
      onPress={() => firebase.auth().signOut() }
    >
      <Text>Logout</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppDrawerContent;