import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddItem from './src/components/additem';
import Registration from './src/components/registration';

// import TopNav from '../components/TopNav';
import {Icon,Header} from 'react-native-elements';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
//   static navigationOptions=({navigation})=>{
//     navigation.title='Home'
// return{
//     // headerLeft:<TopNav navigation={navigation}/>,
//     // headerRight:<TopNavCart navigation={navigation}/>
//     header:<TopNav navigation={navigation}/>

// };
// };
  render() {
    
      // <AddItem/>
      return (
      <View>
        <Registration/>
        </View>
        );
    
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
