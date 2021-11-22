import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Explorepage1 = ({navigation}) => {

    return (
<View style={styles.container}>
    <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>Project</Text> 
    
    </TouchableOpacity>
    <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>PSoC</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>Pclub-MeeT</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>!answer</Text>
                </Card>
                
                <Image style={{height:350,width:380,marginTop:40,marginLeft:10,justifyContent:"center"}} source={require("../../images/NotFound.png")}></Image>
               
</View>

    );
};
export default Explorepage1;

const styles = StyleSheet.create ({
  
    container :{
        
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