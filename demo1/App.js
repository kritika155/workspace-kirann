// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.h1}>Welcome to Bhilwara!</Text>
 
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   h1:{
//     color:'#008F68',
//     fontSize:40,
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
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import ProductImage from './components/Productimage';
import {Platform, StyleSheet, Text,Image, View,Button} from 'react-native';
// import TextBox from './components/textBox';

import Product from './components/Product';

// import { whileStatement } from '@babel/types';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props){

    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
      {/* <Text style={styles.h1}>Welcome to Bhilwara</Text>
      <Button
     title='Click here'
     style={styles.button}
     color='#008F68'
     borderRadius='5'
     />
       */}
{/* <Image style={{width:200,height:200}} 
      source={{uri:'https://previews.123rf.com/images/gresei/gresei1509/gresei150900067/45224138-beautiful-close-up-red-rose.jpg'}}
      />
       <ProductImage/>
<Image source={require('./assets/j.jpg')} style={{width:80,height:80,}}
       />
     
      

       {/* <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        /> */}
      {/* <Text style={styles.h1}>Welcome to Bhilwara</Text>
      <TextBox />  */}
      <Product />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
   
    // backgroundColor: 'white',
  

    width:'100%'
  },

  h1 :{
color: '#008F68',
fontSize:40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
  button:{
color:'#008F68',
borderRadius:5,
padding:8,
margin:8
  },
  
  
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
