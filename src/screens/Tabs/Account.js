import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

class AccountScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>AccountScreen</Text>
            <View>
            <Button
                onPress={() => this.props.navigation.openDrawer()}
                title="Go to notifications"
                />
            </View>
        </View>
        );
    }
}


class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name={'ios-contact'} size={25} color={tintColor} />
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