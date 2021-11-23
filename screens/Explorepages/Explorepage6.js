import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Explorepage6 = ({navigation}) => {

    return (
       <View>
<ScrollView>
<TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>OUR TEAM</Text> 
    
    </TouchableOpacity>
    
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:40}]}>
        <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
        
    </TouchableOpacity>
   
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ASHWANI RATHEE</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ARYAN BASU</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>RIK</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>HARBANS SINGH</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>MEGHNA THAKUR</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>KANISHK TYAGI</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>GURIKA</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ADITI SANDHYAL</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>NITIN</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>PRIYANSHI</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>SHUBHAM</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ABHIROOP SINGH</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>JATIN JAIN</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>RITVIK</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>AMRINDER KAUR</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
        
    </TouchableOpacity>
    <Image style={{height:350,width:380,justifyContent:"center"}} source={{uri:'https://robohash.org/b?size=400x400'}}></Image>
                <Text style={{ fontFamily: "Montserrat_700Bold",fontSize:22,marginTop:18,textAlign:"center"}}>All Done!</Text>
                <Text style={{ fontFamily: "Montserrat__400Regular",textAlign:"center",marginTop:12,color:"#767676",marginBottom:20}}>You are all caught up</Text>
    </ScrollView>
    </View>


    );
};
export default Explorepage6;

const styles = StyleSheet.create ({
  
    container :{
  
        
       // alignItems:'center',
      //  justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginLeft:20,
        marginTop:20,
        marginHorizontal: 10,
        fontSize: 22,
    
      },
      card:{
          marginTop:30,
          marginLeft:20,
          height:180,
          width:350,
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
        borderRadius: 10,

        width:360,
        height:190,
        marginTop:20,
        marginRight:15,
        marginLeft:15,
      },
      elevation: {
        elevation: 20,
        shadowColor: '#000',
      },
});