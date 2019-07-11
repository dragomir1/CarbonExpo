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
// import RegisterScreen from './RegisterScreen';

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('DashboardScreen'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  goToSignupHandler = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.RegisterScreen'
      },
      topBar: {
        backButton: {
          visible: false
        }
      }
    });
  }

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
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email Address"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          onPress={this.handleLogin}>
          <Image
            source={require('../assets/images/login.png')}
            style={styles.loginStyling}
            />
        </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/facebook.png')}
              style={styles.facebookStyling}
              />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../assets/images/google.png')}
              style={styles.googleStyling}
              />
          </TouchableOpacity>
          <View style={styles.footerContainer}>
          <Text style={styles.donthaveaccttxt}>Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={styles.signupStyle}
              onPress={this.goToSignupHandler}>Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginTop: 8,
    textAlign: 'center',
    borderRadius: 20,
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
  loginStyling: {
    marginTop: 12,
    width: 297,
    borderRadius: 10,
    height: 40
  },
  donthaveaccttxt: {
    marginTop: 12
  },
  footerContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  signupStyle: {
    fontSize: 15,
    marginTop: 11,
    paddingLeft: 5,
    color: "gray"
  }
})
