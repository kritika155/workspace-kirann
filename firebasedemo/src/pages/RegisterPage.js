import React,{Component} from 'react';
import RegisterComponent from '../components/registerComponent';
import {View} from 'react-native';
export default class LoginPage extends Component{
    render(){
        return(
            <View>
                <RegisterComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}