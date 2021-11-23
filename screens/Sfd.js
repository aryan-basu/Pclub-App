import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Sfd = () => {

    return (
        <ScrollView   style={{marginBottom:20,marginTop:20}}>
            <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:0,marginLeft:15,color:"#118b06",textAlign:"right",marginRight:10}} size={28} color="#118b06" />
    <Text style={styles.title}>Software Freedom Day</Text> 
    
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:20}}>
    <Image style={{height:200,width:370,borderRadius:15,marginLeft:10,marginRight:10}} source={require("../images/sfdmain.jpg")}></Image></TouchableOpacity>

<Text style={{marginTop:20,marginLeft:10,marginRight:10,textAlign:"center",fontFamily:"Montserrat_400Regular",fontSize:14,color: "#767676",lineHeight:22}}>Software Freedom Day is a worldwide event to celebrate the usage of Free and Open Source Software. It is a public education effort to increase awareness of free software and its virtues and encouraging its use. Each year the event has seen a growing number of participants. Our past speakers were from many prestigious software companies like Facebook, Microsoft and Google, enlightening us about the various software developments. SFD aims to bring together developers and students, of all levels, on a single platform to share their thoughts, ideas and inspirations.</Text>


<Text style={styles.title}>Our Speakers</Text>

<ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:20,marginTop:20}}>
        <TouchableOpacity>
          <Image style={{height:350,width:350,borderRadius:15,marginLeft:20,marginRight:10}} source={require("../images/speaker1.jpg")}></Image></TouchableOpacity>
        
        
          <TouchableOpacity>
          <Image style={{height:350,width:350,borderRadius:15,marginLeft:20,marginRight:10}} source={require("../images/speaker2.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:350,width:350,borderRadius:15,marginLeft:20,marginRight:10}} source={require("../images/speaker3.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:350,width:350,borderRadius:15,marginLeft:20,marginRight:10}} source={require("../images/speaker4.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:350,width:350,borderRadius:15,marginLeft:20,marginRight:10}} source={require("../images/speaker5.jpg")}></Image></TouchableOpacity>

        </ScrollView>
          </ScrollView>
    );
};
export default Sfd;

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