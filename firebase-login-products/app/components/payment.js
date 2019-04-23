import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
TouchableOpacity,
    NativeModules,
    NativeEventEmitter
  } from 'react-native';
  
  import RazorpayCheckout from 'react-native-razorpay';
export default class Payment extends Component{
  render(){
    return (
        <TouchableHighlight onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_eBo2WLCNcDZkTU',
              amount: '5000',
              name: 'foo',
              prefill: {
                email: 'roykritika00@gmail.com',
                contact: '9038187690',
                name: 'Kritika Roy'
              },
              theme: {color: '#F37254'}
            }
            RazorpayCheckout.open(options).then((data) => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            }).catch((error) => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
          }
          }>
          <Text  style={styles.text}>Pay</Text>
         
          </TouchableHighlight>
       );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  input: {
    padding: 15,
    height: 50
  },
  item: {
    backgroundColor: '#2e99e4',
    padding: 15,
    margin: 10,
    marginBottom: 5
  },
  text: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center'
    
  }
});