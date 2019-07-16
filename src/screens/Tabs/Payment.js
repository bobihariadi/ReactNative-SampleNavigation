import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Header, Left, Right, Icon, Body, Title, Content, Button } from 'native-base';

class PaymentScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1 }}>
            <Header style={{backgroundColor: '#f4511e'}} androidStatusBarColor="#f4511e" >
                <Left >
                    <Button 
                        transparent
                        onPress = {() => this.props.navigation.navigate('Login')}                 
                    >
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Payment</Title>
                </Body>                
                <Right>
                    <Icon name="menu" />
                </Right>
            </Header>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>PaymentScreen</Text>
                
                    <Icon name='home' />
                    <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                    <Icon type="FontAwesome" name="home" />
                
            </View>
        </View>
        );
    }
}

 export default PaymentScreen;