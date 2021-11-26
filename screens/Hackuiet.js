import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import YouTubePlayer from "react-native-youtube-sdk";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Hackuiet = ({navigation}) => {

    return (
       <ScrollView style={{marginBottom:20,marginTop:hp(3)}} showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:0,marginLeft:wp(2),color:"#118b06",textAlign:"right",marginRight:wp(2)}} size={28} color="#118b06" />
    <Text style={{   fontFamily: "Montserrat_700Bold",
    
        textAlign:"center",
        fontSize: 22,}}>HackUiet</Text> 
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:20}}>
    <Image style={{height:hp(47),width:wp(94),borderRadius:15,marginLeft:wp(2.5),marginRight:wp(3)}} source={require("../images/hackuietmain.jpg")}></Image></TouchableOpacity>

    <Text style={{marginTop:hp(3),marginLeft:wp(2),marginRight:wp(2),textAlign:"center",fontFamily:"Montserrat_400Regular",fontSize:14,color: "#767676",lineHeight:22}}>
HackUIET is UIET, PU's premier hackathon organised in the month of November. This year, the hackathon is being held from 12 to 14 November,2021 .We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes. Throughout the weekend hackers at HackUiet will have unique opportunities to learn from each other trying hands in new technologies .We are determined to have an all-inclusive and diverse group of students attending.So come join us for a 48 hours sprint to build things and most importantly, to learn! Participants are requested to carefully fill the google form. Happy Hacking!</Text>
<Text style={styles.title}>Our Judges</Text>
         
         
         
<ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:20,marginTop:20}}>
        <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(1)}} source={require("../images/judges1.jpg")}></Image></TouchableOpacity>
        
        
          <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(1)}} source={require("../images/judges2.jpg")}></Image></TouchableOpacity>
          
        </ScrollView>
        <Text style={styles.title}>Winner</Text>
        <ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:20,marginTop:20}}>
        <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(2)}} source={require("../images/winner.jpg")}></Image></TouchableOpacity>
        
        
          <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(2)}} source={require("../images/award.jpg")}></Image></TouchableOpacity>
          
        </ScrollView>
        

        

{/* 
        <Text style={{fontFamily:"Montserrat_700Bold", marginLeft:20,
        marginTop:20,}}>HackUiet Opening Ceremony</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="bE98MAU7Epw"
  autoPlay={false}
  fullscreen={false}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{ width: "100%", height: 200,marginBottom:20,marginTop:20,marginLeft:10,marginRight:10}}
  onError={e => console.log(e)}
  onChangeState={e => console.log(e)}
  onChangeFullscreen={e => console.log(e)}
/>
<Text style={{fontFamily:"Montserrat_700Bold", marginLeft:20,
        marginTop:20,}}>HackUiet Closing Ceremony</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="Y_B3Ca1DioE"
  autoPlay={false}
  fullscreen={false}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{ width: "100%", height: 200,marginBottom:20,marginTop:20,marginLeft:10,marginRight:10}}
  onError={e => console.log(e)}
  onChangeState={e => console.log(e)}
  onChangeFullscreen={e => console.log(e)}
/>
*/}


        <Text style={styles.title}>Our Sponsers</Text>
         
<ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:20,marginTop:20}}>
        <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:10}} source={require("../images/sponser1.jpg")}></Image></TouchableOpacity>
        
        
          <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(2)}} source={require("../images/sponser2.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(2)}} source={require("../images/sponser3.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(2)}} source={require("../images/sponser4.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:hp(45),width:wp(90),borderRadius:15,marginLeft:wp(4),marginRight:wp(2)}} source={require("../images/sponser5.jpg")}></Image></TouchableOpacity>

        </ScrollView>
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