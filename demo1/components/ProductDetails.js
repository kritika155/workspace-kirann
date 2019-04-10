import React, { Component } from 'react';
import {Platform, StyleSheet, Text,Image, View,Button} from 'react-native';


export default class ProductDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View className="List" >
           <Text> {this.props.details.id}</Text><br/>
           <Text>Name:{this.props.details.name}</Text><br/>

            <image source={this.props.details.image}/><br/>
<Text>Description:{this.props.details.description}</Text><br/>


{/* <button>Add to Cart</button> */}

            </View>
        )
    }
}