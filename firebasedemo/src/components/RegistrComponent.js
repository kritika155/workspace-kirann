import React, {Component} from 'react';
import {Button, TextInput, View,StyleSheet,Text,TouchableHighlight,Image,Alert,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Avatar,Tile } from 'react-native-elements';
import {db} from '../config';
const registerUser =(user)=>{
  db.ref('/users').push(user,(err)=>{
      console.log(err);
  })
}

export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
          user:{
            name:'',
            email:'',
            phone:'',
            address:'',
            password:''
          }
      }
      this.handleChange=this.handleChange.bind(this);
      this.clickToAdd=this.clickToAdd.bind(this);
 
    }
    clickToAdd(){
      registerUser(this.state.user);
  }
  // handleChange(e,type){
  //     //this.setState({user[type]:e.nativeEvent.text})
  // }
    render(){
        return(
            <View>
<Avatar 
size="xlarge"
rounded
containerStyle={{marginLeft:140,marginRight:40,marginTop:40}}
source={{
    uri:'http://www.barraques.cat/imgdirs/big/3/39592_best-wallpapers-for-girls.jpg'
}}

/>
<Text style={{marginLeft:130,fontSize:30,alignContent:'center',color:'red'}}>Register here</Text>

<Input
  placeholder='Enter Your Name:'
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.name=e.nativeEvent.text
  
    this.setState(currentState)
}}
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
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.email=e.nativeEvent.text
  
    this.setState(currentState)
}}
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
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.phone=e.nativeEvent.text
  
    this.setState(currentState)
}}
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
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.address=e.nativeEvent.text
  
    this.setState(currentState)
}}
  leftIcon={
    <Icon
      name='home'
      size={24}
      color='black'
    />
  }
/>   
<Input type="password"
  placeholder='Enter Your Password:'
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.password=e.nativeEvent.text
  
    this.setState(currentState)
}}
  leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    />
  }
/>  
          
<Button title="Register" color='blue'  onPress={this.clickToAdd}  />
<Button onPress={()=>this.props.navigation.navigate('LoginPage')} title="Login" color="red"/>
            </View>
        )
    }
}