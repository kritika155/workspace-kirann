import React,{Component} from 'react';
import {View} from 'react-native';

import {Icon,Header} from 'react-native-elements';
export default class TopNav extends Component{
render(){
return(
    
      <Header
  leftComponent={{ icon: 'menu', color: '#fff' }} 
  centerComponent={{ text: this.props.navigation.title, style: { color: '#fff' } }}
  rightComponent={{ icon: 'cart-plus', type:'font-awesome',color: '#fff' }}
  />
  );

  //    {/*<View> <Icon
  // raised
  // name='home'
  // type='font-awesome'
  // color='#f50'
  // onPress={() => this.props.navigation.navigate('Home')} /> */}
  //   {/* <Icon
  // raised
  // name='cart'
  // type='font-awesome'
  // color='#f50'
  // onPress={() => this.props.navigation.navigate('Cart')} /></View> */}


}
}