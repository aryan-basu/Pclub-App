import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Explorepage2 = ({navigation}) => {

    return (
<View style={styles.container}>
<TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>Events</Text> 
    
    </TouchableOpacity>
   
    <View style={[styles.card2, styles.elevation,{marginTop:20}]}>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>PSoC</Text>
                </View>
                <View style={[styles.card2, styles.elevation,{marginTop:20}]}>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SFD</Text>
                </View>
                <View style={[styles.card2, styles.elevation,{marginTop:20}]}>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>HACKUIET</Text>
               </View>
               <View style={[styles.card2, styles.elevation,{marginTop:20}]}>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>HACKOCTOBERFEST</Text>
              </View>
                <Image style={{height:350,width:380,justifyContent:"center"}} source={{uri:'https://robohash.org/b?size=400x400'}}></Image>
                <Text style={{ fontFamily: "Montserrat_700Bold",fontSize:22,marginTop:18,textAlign:"center"}}>All Done!</Text>
                <Text style={{ fontFamily: "Montserrat__400Regular",textAlign:"center",marginTop:12,color:"#767676"}}>You are all caught up</Text>
               
</View>

    );
};
export default Explorepage2;

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
  card2:{
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent:"center",
    width:370,
    height:60,
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    marginBottom:5,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#000',
  },
});