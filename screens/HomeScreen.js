import React from 'react';
import * as firebase from 'firebase';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import FacebookLoginButton from '../components/FacebookLoginButton';
import GoogleLoginButton from '../components/GoogleLoginButton';


export default class HomeScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: null
  }

  handleSignUp = () => {
    // TODO: Validate registration info

    const { email, password, name } = this.state
    // TODO: Do something with the user's name. We're currently not storing it in Firebase

    firebase.database()
      .ref('users/')
      .set({
        name: name
      })
      .then(() => {
        console.warn("added new user");
      })
      .catch(error => {
        console.warn("User name wasn't added")
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Created user with firebase");
        let user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name
        })
        .then(function() {
          console.log("added user name to firebase")
        })
        .catch(function(error) {
          console.warn("user wasn't added")
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  // TODO:
  // handleSignIn => ()


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

        <TouchableOpacity
          onPress={this.handleSignUp}
        >
        <Image
          source={require('../assets/images//signup.png')}
          style={styles.signupStyling}
          />
      </TouchableOpacity>
        <FacebookLoginButton/>
        <GoogleLoginButton />
          <View style={styles.footerContainer}>
            <Text
              style={styles.alreadyhaveaccttext}>Already have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={styles.loginstyle}
                onPress={() => this.props.navigation.navigate('Login')}>Login
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
