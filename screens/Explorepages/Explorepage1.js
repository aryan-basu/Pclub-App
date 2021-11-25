import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Explorepage1 = ({navigation}) => {

    return (
        <ScrollView>
<View style={styles.container}>
    <View style={{flexDirection:"row"}} >
    <Icon onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:hp(3),marginLeft:wp(3),color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>Project</Text> 
    
    </View>
    
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:20}]}>
        <Text style={styles.cardtitle}>Pclub-Meet</Text>
        <Text style={{fontFamily:"Montserrat_400Regular",
color:"#767676",
marginTop:hp(2),
textAlign:"center",marginLeft:wp(2),marginRight:wp(2),
fontSize:14,}}>Simple Web Application that offer you to create video meeting room using WebRTC and Socket its a project announced by Pclub to meet their needs</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(12)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.6),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.6),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.6),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:hp(6),marginBottom:hp(6)}]}>
        <Text style={styles.cardtitle}>!answer</Text>
        <Text style={{fontFamily:"Montserrat_400Regular",
color:"#767676",
marginTop:hp(2),
textAlign:"center",marginLeft:wp(2),marginRight:wp(2),
fontSize:14,}}>!answer is a discord bot that leverages state of the art artifical intelligence to serve your users in your discord guild. You can give the bot context paragraphs, from which the bot will reply to any questions of users. Best used to answer a user's doubt about FAQs or rules or venue.
!answer also plans to release moderation tools and a real time dashboard for the ease of discord admins and moderators</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(2)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.6),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.6),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.6),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
              
                
             {/*   <Image style={{height:350,width:380,marginTop:40,marginLeft:10,justifyContent:"center"}} source={require("../../images/NotFound.png")}></Image>  */}
               
</View>
</ScrollView>

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
        marginLeft:wp(4),
        marginTop:hp(2.9),
        fontSize: 22,
    
      },
     
      cardtitle:{
fontFamily:"Montserrat_700Bold",
color:"#118b06",
marginTop:hp(3),
textAlign:"center",
fontSize:14,

      },
      card2:{
        backgroundColor: 'white',
        borderRadius: 10,

        width:wp(92),
        height:hp(40),
        marginTop:hp(7),
        marginRight:wp(1),
        marginLeft:wp(4),
      },
      elevation: {
        elevation: 20,
        shadowColor: '#000',
      },

});