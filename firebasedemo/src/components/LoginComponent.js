import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,Button,ToastAndroid } from 'react-native';
import {loginUser} from '../Services/services';
import { Input, Avatar,Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return null;
  };
  

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            message:'User Logged In',
           user:{  password: '', email:""}
        }

        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }

    static navigationOptions = ({ navigation }) => {
        navigation.title = "LoginComponent"     
    }
    login(){
        loginUser(this.state.user).then(result=>{
            this.setState({message:'User Logged Successfully',visible:true});
            this.props.navigation.navigate('ProfileComponent');
        }).catch(err=>{
            this.setState({message:err.message,visible:true});
        });
    }
    handleChange(e,fieldName){
        let currentState=this.state;
        currentState.user[fieldName]=e.nativeEvent.text;
        this.setState(currentState);
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Bhilwara Attendence App</Text>
            <Text style={styles.welcome}>Login</Text>
            
            <Avatar 
 size="xlarge"
rounded
 containerStyle={{marginLeft:70,marginRight:40,marginTop:40}}
 source={{
    uri:'http://www.barraques.cat/imgdirs/big/3/39592_best-wallpapers-for-girls.jpg'
}}

 />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'email')
                    }}
                    leftIcon={
                        <Icon
                          name='user'
                          size={24}
                          color='black'
                        />
                      }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'password')
                    }}
                    leftIcon={
                        <Icon
                          name='lock'
                          size={24}
                          color='black'
                        />
                      }
                />
                <Button 
                    title='Login'
                    onPress={this.login}
                />
    <Toast visible={this.state.visible} message={this.state.message} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: 'powderblue',
      margin: 10,
      padding: 8,
      color: 'black',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    }, welcome: {
        fontSize: 20,
        fontWeight:'bold',
        margin: 10,
        color:'red'
    },welcome1: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight:'bold',
    },
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'steelblue'
    }
  })