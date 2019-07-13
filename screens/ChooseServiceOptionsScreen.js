import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ChooseServiceOptionsScreen(props) {
  // TODO: Set this to a service
  const defaultServiceType = '--default-service-type--fix-me--';

  const serviceType = props.navigation.getParam('serviceType', defaultServiceType);

  return (
    <View style={styles.container}>
      <Text>ChooseServiceOptionsScreen - Type: {serviceType}</Text>
    </View>
  );
}

ChooseServiceOptionsScreen.navigationOptions = {
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
