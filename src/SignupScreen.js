import React, { Component} from 'react';
import {View , Text , Button} from 'react-native';

class SignupScreen extends Component{
    render(){
        return (
            <View>
             <Button title="go Back " 
             onPress = {()=> this.props.navigation.goBack()}
             />
             <Text> This is a SignupScreen</Text>

            </View>
        )
    }
}

export default SignupScreen;