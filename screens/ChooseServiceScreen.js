import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ChooseServiceScreen() {
  return (
    <View style={styles.container}>
      <Text>ChooseServiceScreen</Text>
    </View>
  );
}

ChooseServiceScreen.navigationOptions = {
  title: 'Service Screen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
