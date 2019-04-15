import React, {Component} from 'react';
import {Button, TextInput, View,StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Avatar,Tile } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class Registration extends Component{
    constructor(props){
        super(props);
       
 
    }
 
    render(){
        return(
            <View>
<Avatar 
size="xlarge"
rounded
containerStyle={{marginLeft:120,marginRight:40}}
source={{
    uri:'http://www.barraques.cat/imgdirs/big/3/39592_best-wallpapers-for-girls.jpg'
}}

/>
<Text style={{marginLeft:110,fontSize:30,alignContent:'center',color:'red'}}>Register here</Text>

<Input
  placeholder='Enter Your Name:'
  leftIcon={
    <Icon
      name='user'
      type= 'font-awesome'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter Your Email:'
  leftIcon={
    <Icon
      name='envelope'
      size={24}
      color='black'
    />
  }
/> 
<Input
  placeholder='Phone:'
  leftIcon={
    <Icon
      name='phone'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter Your Addres:'
  leftIcon={
    <Icon
      name='home'
      size={24}
      color='black'
    />
  }
/>   
<Input
  placeholder='Enter Your Password:'
  leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    />
  }
/>  
<Input
  placeholder='Confirm Password:'
  leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    />
  }
/>            
<Button 
              
                title="Register" 
                color='blue'/>
            </View>
        )
    }
}