import React, { Component } from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import page
import DashboardScreen from '../screens/Tabs/Dashboard';
import MonitoringScreen from '../screens/Tabs/Monitoring';
import PaymentScreen from '../screens/Tabs/Payment';
import AccountScreen from '../screens/Tabs/Account';

const TabHome = createBottomTabNavigator(
    {
        Dashboard: DashboardScreen,
        Monitoring: MonitoringScreen,
        Payment: PaymentScreen,
        Account: AccountScreen
    },{
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let IconComponent = Ionicons;
              let iconName;
              if (routeName === 'Dashboard') {
                iconName = `ios-home${focused ? '' : ''}`;
              } else if (routeName === 'Monitoring') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`; 
              } else if (routeName === 'Payment') {
                iconName = `ios-help-circle${focused ? '' : '-outline'}`; 
              } else if (routeName === 'Account') {
                iconName = `ios-contact${focused ? '' : ''}`; 
              } 
        
              return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
          }), 
          tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#00a452',
            inactiveTintColor: '#e8e8e8',
            showLabel: true,
            showIcon: true,
            labelStyle: { 
              fontSize: 12,
            },
            style: {
              backgroundColor: '#008040',
              alignItems: 'center',
              justifyContent: 'center'
            },
          }
    }
)

export default TabHome;