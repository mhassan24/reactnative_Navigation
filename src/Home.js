import React, { Component} from 'react';
import {View , Text , Button} from 'react-native';



class HomeScreen extends Component{
    render(){
        return (
            <View>
             <Button title="go back Login Screen" 
             onPress = {()=> this.props.navigation.goBack()}
             />
             <Button title="go to SignupScreen" 
             onPress = {()=> this.props.navigation.navigate("Signup")}
             />

             <Text> This is a HomeScreen</Text>
            </View>
        )
    }
}

export default HomeScreen;