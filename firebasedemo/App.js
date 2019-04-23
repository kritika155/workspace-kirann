import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import AddItem from './src/components/additem';
import {Icon,Header} from 'react-native-elements';
import Registration from './src/components/registerComponent';
import Login from './src/components/LoginComponent';
import RouterConfig from './src/routes/AppRouting';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  render() {
    
      // <AddItem/>
      return (
      
    
          <RouterConfig/>
    
        );
    
  }
}

