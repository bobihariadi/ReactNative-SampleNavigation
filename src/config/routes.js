import React, { Component } from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import components
import moduleName from '../components/TabsHome';


class LoginScreen extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >            
                <Text> LoginScreen </Text>
                <View style={{marginBottom: 10}}>
                    <Button style={{marginBottom: 20}}
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
              </View>
            </View>            
        )
    }
}

class RegisterScreen extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
                <Text> RegisterScreen </Text>
            </View>
        )
    }
}
// router tab home


const Root = createStackNavigator (
    {
        Home: {
            screen: moduleName,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: LoginScreen,    
            navigationOptions:{
                header: null
            }
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions:{
                // header: null,
            }
        }

    },
    {
        initialRouteName: 'Login',        
    }
)

export default createAppContainer(Root);