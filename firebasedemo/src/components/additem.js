import React, {Component} from 'react';
import {Button, TextInput, View,StyleSheet,Text} from 'react-native';
import {db} from '../config';
let addItem=(item)=>{
    db.ref('/items').push({
        itemInfo:item
    });
}
let itemsRef=db.ref('/items');
export default class AddItem extends Component{
   constructor(props){
       super(props);
       this.state={
           itemInfo:'',
           items:[]
       }
       this.handleChange=this.handleChange.bind(this);
       this.clickToAdd=this.clickToAdd.bind(this);

   }
   clickToAdd(){
       addItem(this.state.itemInfo);
   }
   handleChange(e){
       this.setState({itemInfo:e.nativeEvent.text})
   }
   componentDidMount(){
       itemsRef.on('value',snapshot=>{
               let data=snapshot.val();
               let items=Object.values(data);
               this.setState({items});
       });
   }
   render(){
       return(<View style={styles.container}> 
                <TextInput  style={{margin:8,
                width:200,
            height:50,
        borderColor:'red',
    borderWidth:2,
    alignItems:'center'
}}
                    onChange={this.handleChange}
                    value={this.state.itemInfo}/>
                <Button 
                onPress={this.clickToAdd} 
                title="submit" 
                color='blue'/>
{
    this.state.items.map(
        x=>{
            return <Text>
                {x.itemInfo}
            </Text>
        }
    )
}
           </View>
       )
   }
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });