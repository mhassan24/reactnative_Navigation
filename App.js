import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator ,createAppContainer } from 'react-navigation';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import HomeScreen from './src/Home';

const AppStackNavigator = createStackNavigator ({
  Login: {
    screen: LoginScreen
  },
  Signup:{
    screen : SignupScreen
  },
  Home: {
    screen: HomeScreen
  }
})
const StackNavigation = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  render() {
    return (
      <StackNavigation  style={styles.container} />
      // <View style={styles.container}>
      //   <Text>Demo Navigation </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


