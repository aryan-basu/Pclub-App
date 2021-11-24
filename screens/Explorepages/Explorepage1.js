import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Explorepage1 = ({navigation}) => {

    return (
        <ScrollView>
<View style={styles.container}>
    <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>Project</Text> 
    
    </TouchableOpacity>
    
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:20}]}>
        <Text style={styles.cardtitle}>Pclub-Meet</Text>
        <Text style={{fontFamily:"Montserrat_400Regular",
color:"#767676",
marginTop:16,
textAlign:"center",marginLeft:5,marginRight:5,
fontSize:14,}}>Simple Web Application that offer you to create video meeting room using WebRTC and Socket its a project announced by Pclub to meet their needs</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:95}}>
        <FontAwesome name="envelope-square" style={{marginTop:20,marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:20,marginLeft:8,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:20,marginLeft:8,color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:40,marginBottom:40}]}>
        <Text style={styles.cardtitle}>!answer</Text>
        <Text style={{fontFamily:"Montserrat_400Regular",
color:"#767676",
marginTop:16,
textAlign:"center",marginLeft:5,marginRight:5,
fontSize:14,}}>!answer is a discord bot that leverages state of the art artifical intelligence to serve your users in your discord guild. You can give the bot context paragraphs, from which the bot will reply to any questions of users. Best used to answer a user's doubt about FAQs or rules or venue.
!answer also plans to release moderation tools and a real time dashboard for the ease of discord admins and moderators</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:15}}>
        <FontAwesome name="envelope-square" style={{marginTop:20,marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:20,marginLeft:8,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:20,marginLeft:8,color:"#118b06",}} size={38} color="#118b06" />
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
color:"#118b06",
marginTop:16,
textAlign:"center",
fontSize:14,

      },
      card2:{
        backgroundColor: 'white',
        borderRadius: 10,

        width:360,
        height:290,
        marginTop:20,
        marginRight:15,
        marginLeft:15,
      },
      elevation: {
        elevation: 20,
        shadowColor: '#000',
      },

});