import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import YouTubePlayer from "react-native-youtube-sdk";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const PsoC = ({navigation}) => {

    return (
        <ScrollView   style={{marginBottom:20,marginTop:20}} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection:"row"}} >
    <Icon onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:0,marginLeft:wp(2),color:"#118b06",textAlign:"right",marginRight:wp(2)}} size={28} color="#118b06" />
    <Text style={{    fontFamily: "Montserrat_700Bold",
        
        textAlign:"center",
        fontSize: 22,}}>Pclub Summer of Code</Text> 
    
    </View>
    <TouchableOpacity style={{marginTop:20}}>
    <Image style={{height:hp(48),width:wp(94),borderRadius:15,marginLeft:wp(2.7)}} source={require("../images/psocmain.jpg")}></Image></TouchableOpacity>
    <Text style={{marginTop:hp(2),marginLeft:wp(1),marginRight:wp(1),textAlign:"center",fontFamily:"Montserrat_400Regular",fontSize:14,color: "#767676",lineHeight:22}}>
    PClub Summer of Code is the 2 month long Open Source program during summers conducted by Programming Club, UIET, with an aim to help beginners get started with Open Source Development while encouraging diversity. Throughout the program, participants contribute to different projects under guidance of experienced mentors. Mentors get to make their ideas alive and Mentees get to learn tech.

PSoC is targeted at audience who want to dwell in OpenSource Development as well as who are already into FOSS development. This program will help students for other opensource programs like Gsoc, Outreachy, etc. </Text>
   
<Text style={styles.title}>Our Sponsers</Text>
         
         <ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:20,marginTop:20}}>
                 <TouchableOpacity>
                   <Image style={{height:hp(45.5),width:wp(87),borderRadius:15,marginLeft:wp(6.5),marginRight:wp(3)}} source={require("../images/psocsponser1.jpg")}></Image></TouchableOpacity>
                 
                 
                   <TouchableOpacity>
                   <Image style={{height:hp(45.5),width:wp(87),borderRadius:15,marginLeft:wp(6.5),marginRight:wp(3)}} source={require("../images/psocsponser2.jpg")}></Image></TouchableOpacity>
                   <TouchableOpacity>
                   <Image style={{height:hp(45.5),width:wp(87),borderRadius:15,marginLeft:wp(6.5),marginRight:wp(3)}} source={require("../images/psocsponser3.jpg")}></Image></TouchableOpacity>
                   <TouchableOpacity>
                   <Image style={{height:hp(45.5),width:wp(87),borderRadius:15,marginLeft:wp(4.5),marginRight:wp(8)}} source={require("../images/psocsponser4.jpg")}></Image></TouchableOpacity>
    
         
                 </ScrollView>
    </ScrollView>
    );
};
export default PsoC;

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
        marginTop:20,
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