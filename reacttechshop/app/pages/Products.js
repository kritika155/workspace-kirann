import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import {Icon,Header,Card, ListItem} from 'react-native-elements';
import TopNav from '../components/TopNav';

export default class Products extends Component{
    static navigationOptions=({navigation})=>{
        navigation.title='Products'
    return{
        // headerLeft:<TopNav navigation={navigation}/>,
        // headerRight:<TopNavCart navigation={navigation}/>
        header:<TopNav navigation={navigation}/>

    };
};
render(){
return(
//     <View style={styles.container}>
//     <Text style={styles.welcome}>Products</Text>
//     <Icon
//   raised
//   name='shopping-bag'
//   type='font-awesome'
//   color='#f50'
//   onPress={() => this.props.navigation.navigate('Home')} />
//     <Button title="Go Back to Home" onPress={() => this.props.navigation.navigate('Home')}/>
// </View>



// implemented with Text and Button as children
<View>
<Card
  title='HELLO WORLD'
  image={require('../images/1.png')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />

</Card>
<Button title="Go Back to Home" onPress={() => this.props.navigation.navigate('Home')}/>

    </View>
)
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'powderblue',
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