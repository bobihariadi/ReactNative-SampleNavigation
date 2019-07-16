import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import Routes from './config/routes';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
                backgroundColor="#f4511e"
                barStyle="light-content"
            />
        <Routes />
      </View>
    ) 
  }
} 

export default App;
