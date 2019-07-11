import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
// import firebase from 'react-native-firebase';
// import {Navigation} from 'react-native-navigation';
import LoginScreen from './LoginScreen';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; Version can be specified in package.json

export default class HomeScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: null
  }

  handleSignUp = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("LoginScreen"))
      .catch(error => this.setState({ errorMessage: error.message }))
  }


  nameChangeHandler = (value) => {
    this.setState({
      name: value
    });
  };
//
  // goToYourCarInfoPage = () => {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: 'navigation.playground.AboutYourCarInfoScreen',
  //     },
  //
  //   });
  // }
  // goToLoginHandler = () => {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       name: 'navigation.playground.LoginScreen',
  //     },
  //
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/splashsmall.png')}
        />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextInput
            placeholder="Enter Name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={this.nameChangeHandler}
            value={this.state.name}
          />
        <TextInput
          placeholder="Enter email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Enter password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

      <TouchableOpacity>
        <Image
          source={require('../assets/images//signup.png')}
          style={styles.signupStyling}
          />
      </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.facebookStyling}
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.signIn}
          >
          <Image
            source={require('../assets/images/google.png')}
            style={styles.googleStyling}
            />
        </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text
              style={styles.alreadyhaveaccttext}>Already have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={styles.loginstyle}
                onPress={() => this.props.navigation.navigate('LoginScreen')}>Login
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Login: LoginScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
//
// const AppContainer = createAppContainer(RootStack);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  textInput: {
    height: 40,
    textAlign: 'center',
    borderRadius: 20,
    width: 300,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginTop: 12
  },
  imageStyle: {
    marginBottom: 20
  },
  signupStyling: {
    marginTop: 12,
    width: 297,
    borderRadius: 10,
    height: 40
  },
  facebookStyling: {
    marginTop: 12,
    width: 297,
    borderRadius: 10,
    height: 40
  },
  googleStyling: {
    marginTop: 12,
    width: 297,
    borderRadius: 10,
    height: 40
  },
  alreadyhaveaccttext: {
    marginTop: 11
  },
  loginstyle: {
    fontSize: 15,
    marginTop: 10,
    paddingLeft: 5,
    color: "gray"
  }
})
