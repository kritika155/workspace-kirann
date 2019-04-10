import React,{Component} from 'react';
import { Image,View,Text,StyleSheet} from 'react-native';


export default class ProductImage extends Component{
constructor(props){
super();
}



 render(){
     let  pic={
         uri:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png'
     }
    
    return (
     <View style={styles.container}>
<Text style={styles.h1}>India</Text>
    
        <Image source={pic} style={{height:300,width:400}}/>
     </View>
     );
 }
 }
 const styles = StyleSheet.create({
    container: {
       width:20,
       height:20,
       justifyContent: 'space-between',
     alignItems:'center',
        // backgroundColor: '#000',
        width:'20%'
    },
  
    h1 :{
  color: 'green',
  fontSize:30,
  alignItems:'center'
    },
});