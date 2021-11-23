import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';

const Hackuiet = () => {

    return (
       <ScrollView>
           </ScrollView>
    );
};
export default Hackuiet;

const styles = StyleSheet.create ({
  
    container : {
     
     alignItems:'center',
     justifyContent:'center',
     },
     heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 3,
      },
      title: {
        fontFamily: "Montserrat_700Bold",
        textAlign:"center",
        fontSize: 22,
    
      },
      card: {
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent:"center",
        width:240,
        height:140,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
      },
      card2:{
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent:"center",
        width:370,
        height:190,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
      },
      elevation: {
        elevation: 40,
        shadowColor: '#32CD32',
      },
});