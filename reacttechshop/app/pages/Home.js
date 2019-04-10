import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,Dimensions} from 'react-native';
import TopNav from '../components/TopNav';
import {Icon,Header} from 'react-native-elements';
import TopNavCart from '../components/TopNavCart';
import Camera from 'react-native-camera';
export default class Home extends Component{
    
    static navigationOptions=({navigation})=>{
        navigation.title='Home'
    return{
        // headerLeft:<TopNav navigation={navigation}/>,
        // headerRight:<TopNavCart navigation={navigation}/>
        header:<TopNav navigation={navigation}/>

    };
};
render(){
return(
    <View style={styles.container}>
    <Text style={styles.welcome}>Home</Text>
    <Camera
  ref={cam => {this.camera = cam}}
  style={styles.preview}
  aspect={Camera.constants.Aspect.fill}
>
  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
    [CAPTURE]
  </Text>
</Camera>
    <Icon
  raised
  name='home'
  type='font-awesome'
  color='#f50'
  onPress={() => this.props.navigation.navigate('Home')} />
    <Button title="Go to Products" onPress={() => this.props.navigation.navigate('Products')}/>

</View>
);
}
takePicture() {
    this.camera
      .capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4682b4',
      color: '#ff0000'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#000000',
      marginBottom: 5,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width},
        capture: {
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          color: '#000',
          padding: 10,
          margin: 40  
        }
      
  });
