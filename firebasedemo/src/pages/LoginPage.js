import React, {Component} from 'react';
import {View } from 'react-native';
import LoginComponent from '../components/LoginComponent';
export default class LoginPage extends Component{
    render(){
        return(
            <View>
                <LoginComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}