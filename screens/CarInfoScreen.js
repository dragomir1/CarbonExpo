import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function CarInfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Sup Bro. CarInfoScreen</Text>
    </View>
  );
}

CarInfoScreen.navigationOptions = {
  title: 'Car Info',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
