import React,{Component} from 'react';
import {View} from 'react-native';

import {Icon,Header} from 'react-native-elements';
export default class TopNav extends Component{
render(){
return(
    
      <Header
  leftComponent={{ icon: 'person', color: '#fff' }} 
  centerComponent={{ text: this.props.navigation.title, style: { color: '#fff' } }}
  rightComponent={{ icon: 'lock', type:'font-awesome',color: '#fff' }}
  />
  );
}
}