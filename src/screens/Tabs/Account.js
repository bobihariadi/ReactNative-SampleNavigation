import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Icon, Button, StatusBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AccountScreen extends Component {
  
    render() {
        return (
          <View>
            <Header
              placement="left"
              containerStyle={{height:79, marginTop:-20, backgroundColor: '#f4511e'}}
              leftComponent={<ButtonLeft navigate={this.props.navigation} />}
              centerComponent={{ text: 'Account', style: { color: '#fff', fontSize:20, fontWeight: 'bold' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
          </View>

        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>AccountScreen</Text>
        //     <View>
        //     <Button
        //         onPress={() => this.props.navigation.openDrawer()}
        //         title="Go to notifications"
        //         />
        //     </View>
        // </View>
        );
    }
}

class ButtonLeft extends Component {
  render() {
      return (
          
          <TouchableOpacity >
          <Button          
          onPress={() => this.props.navigate.openDrawer()}
          type={'clear'}
          icon ={
            <Icon
              name={'menu'}
              size={35}                           
              color={'white'}              
            />
          }
          />
          </TouchableOpacity>
         
      )
  }
}


class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name={'ios-contact'} size={25} color={tintColor} />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Go to notifications"
        />
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name={'ios-contact'} size={25} color={tintColor} />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.push('Register')}
          title="Go to registration"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
//   const MyDrawerNavigator = createDrawerNavigator({
//     Home: {
//       screen: MyHomeScreen,
//     },
//     Notifications: {
//       screen: MyNotificationsScreen,
//     },
//   });
  
//   const MyApp = createAppContainer(MyDrawerNavigator);


const Account = createStackNavigator(
    {
        Account: {
            screen: AccountScreen,
            navigationOptions:{
                header: null, 
                title: 'header main',
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: '#f4511e',
                },                
            }
        }
    }
)

const MyDrawerNavigator = createDrawerNavigator({
    ParentAccount: {
      screen: Account,
      drawerLockMode: 'unlocked',
      navigationOptions: {  
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Ionicons name={'ios-contact'} size={25} color={tintColor} />
        ),
      }
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },{
      navigationOptions:{
          
      },
    //   drawerType: 'slide',
    //   gesturesEnabled: false,
      drawerLockMode: 'unlocked',
  });

 export default MyDrawerNavigator;