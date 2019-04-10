import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Icon} from 'react-native-elements';
export default class Invoice extends Component{
render(){
return(
    <View style={styles.container}>
    <Text style={styles.welcome}>Invoice</Text>
    <Button title="Go to Products" onPress={() => this.props.navigation.navigate('Products')}/>
</View>
)
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'navy',
      color:'#000000'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'#000000'
    },
    instructions: {
      textAlign: 'center',
      color:'#000000',
      marginBottom: 5,
    },
  });