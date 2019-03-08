import React, { Component} from 'react';
import {View , Text , Button} from 'react-native';


class LoginScreen extends Component{
    render(){
        return (
            <View>
             <Button title="go to home screen" 
             onPress = {()=> this.props.navigation.navigate("Home")}
             />
             <Button title="go to Signup screen" 
             onPress = {()=> this.props.navigation.navigate("Signup")}
             />
             <Text> this a login Screen</Text>
            </View>
        )
}
}

export default LoginScreen;