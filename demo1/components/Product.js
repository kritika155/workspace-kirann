import React,{Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import ProductDetails from './ProductDetails';


export default class Product extends Component{
constructor(props){

    super();


// this.state={
//     products:[
//         {
//             id:1,name:'shoes',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRRWg87NFfnw3UZpu2bYHGe_lWMUeWTMta-1erSFj8S-0Zmf9Uw',description:'Most durable running shoes.Its available in different shape,sizes and colors'
//         },
//     {
//         id:2,name:'watch',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-gm1pqe8UjYavQRrScZ0xcXFYcRQkhKoagSc3pvEJf4eFxTs0Q',description:'Stylish and water-resistant.Availabel for both Men and women in differnent shapes,styles and designs'
//     }
//     ]

// };
}
 render(){
   
     return (
      <View>
         <Text >Welcome to shopping</Text>
         <Image style={{width:200,height:200}} 
      source={{uri:'https://res.cloudinary.com/spectrumobile/image/fetch/e_trim/w_360,h_480,c_fit,f_auto,q_auto,fl_lossy/http%3A%2F%2Fres.cloudinary.com%2Fspectrumobile%2Fimage%2Fupload%2Fv1527810361%2FSpecturm%2520Mobile%2520Buy%2520Flow%2FApple%2FiPhone%2520X%2FMQA62LLA_HERO.png'}}
      /> 
      <Text>Description</Text>
      
           </View>
     )
 }
 




}