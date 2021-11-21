import React from "react";
import {View , Text, Button , StyleSheet} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";

const Explorepage1 = () => {

    return (
<View style={styles.container}>
    <Text style={styles.title}>Project</Text>
    <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>PSoC</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>Pclub-MeeT</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>!answer</Text>
                </Card>
</View>

    );
};
export default Explorepage1;

const styles = StyleSheet.create ({
  
    container :{
        flex:1,
        
       // alignItems:'center',
      //  justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginTop: 0,
        marginLeft:20,
        marginTop:20,
        marginHorizontal: 10,
        fontSize: 22,
    
      },
      card:{
          marginTop:15,
          marginLeft:10,
          height:80,
          width:120,
          backgroundColor:"#fff",
          borderRadius:10,
          borderColor:"#118b06",
          borderWidth:2,
      },
      cardtitle:{
fontFamily:"Montserrat_700Bold",
color:"#000",
marginTop:16,
textAlign:"center",
fontSize:14,

      },

});