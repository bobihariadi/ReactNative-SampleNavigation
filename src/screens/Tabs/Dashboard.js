import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

class HeaderScreen extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems: 'center'}} >
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}> HeaderScreen </Text>
            </View>
        )
    }
}

class ButtonLeft extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems: 'flex-start'}} >
            <TouchableOpacity >
            <Button
            onPress={() => this.props.navigation1.navigate('Login')}
            type={'clear'}
            icon ={
              <Ionicon
                name={'ios-arrow-back'}
                size={35}                           
                color={'white'}              
              />
            }
            />
            </TouchableOpacity>
            </View>
        )
    }
}

class DashboardScreen extends Component {
    static navigationOptions = ({navigation}) => { 
        return {
          // title: 'Home',
          headerTitle: <HeaderScreen/>,          
          headerLeft: <ButtonLeft navigation1={navigation} />,
          headerRight:(
            <Button
            onPress={() => navigation.navigate('Login')} 
            type="clear"                   
            icon={
                <Ionicon
                  name={'ios-arrow-forward'}
                  size={35}
                  color={'white'}
                />
            }
            />
          )
        };
      };

    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DashboardScreen</Text>
        </View>
        );
    }
}

const Dash = createStackNavigator(
    {
        Dahboard:{
            screen: DashboardScreen,
            navigationOptions:{
                title: 'Dashboard',
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: '#f4511e',
                }, 
            }
        }
    }
)

 export default Dash;