import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

export default function ChooseServiceOptionsScreen(props) {
  // TODO: Set this to a service
  const defaultServiceType = '--default-service-type--fix-me--';

  const serviceType = props.navigation.getParam('serviceType', defaultServiceType);

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity>
          <EvilIcons
            name="chevron-left"
            size={32}
            onPress={() => props.navigation.pop()}
          />
        </TouchableOpacity>
        <View style={styles.textGreeting}>
          {/*add state to this..*/}
          <Text style={styles.text}>Hi, John</Text>
          <Text style={styles.text1}>Your Car: Toyota Camry, 2011</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text>ChooseServiceOptionsScreen - Type: {serviceType}</Text>
      </View>
    </View>
  );
}

ChooseServiceOptionsScreen.navigationOptions = {
  title: 'Service Screen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#555',
    // marginTop: 40,
    // flexDirection: 'row-reverse',
    // flexDirection: 'row',
    // // marginLeft: 20
    // justifyContent: "center",
    justifyContent: "space-around",
  },
});
