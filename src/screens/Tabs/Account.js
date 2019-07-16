import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Icon, Button, StatusBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

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

const AppDrawerCustoms = ( props ) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}} >
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Sample</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)


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
  

const Account = createStackNavigator(
    {
        Account: {
            screen: AccountScreen,
            navigationOptions:{
                header: null, 
                // title: 'header main', 
                headerTintColor: '#fff',
                // headerLeft: (<Button
                  
                //   type="clear"                   
                //   icon={
                //       <Ionicons
                //         name={'ios-arrow-back'}
                //         size={35}
                //         color={'white'}
                //       />
                //   }
                //   />),
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
        drawerLabel: 'Homes',
        drawerIcon: ({ tintColor }) => (
            <Ionicons name={'ios-contact'} size={25} color={tintColor} />
        ),
      }
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
    HomeScreen: {
      screen: MyHomeScreen,
    },
  },{
      contentOptions:{
          activeTintColor: 'green',
      },
    //   drawerType: 'slide',
    //   gesturesEnabled: false,
      drawerLockMode: 'unlocked',
      contentComponent: AppDrawerCustoms,
      drawerWidth: width,
  });

 export default MyDrawerNavigator;