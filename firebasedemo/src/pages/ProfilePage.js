import React, {Component} from 'react';
import {View } from 'react-native';
import ProfileComponent from '../components/ProfileComponent';
export default class ProfilePage extends Component{
    render(){
        return(
            <View>
                < ProfileComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}