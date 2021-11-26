import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import YouTubePlayer from "react-native-youtube-sdk";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Sfd = ({navigation}) => {

    return (
        <ScrollView   style={{marginBottom:20,marginTop:20}}>
            <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:hp(1),marginLeft:wp(2),color:"#118b06",textAlign:"right",marginRight:wp(3)}} size={28} color="#118b06" />
    <Text style={styles.title}>Software Freedom Day</Text> 
    
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:20}}>
    <Image style={{height:hp(25),width:wp(94),borderRadius:15,marginLeft:wp(3),marginRight:wp(2)}} source={require("../images/sfdmain.jpg")}></Image></TouchableOpacity>

<Text style={{marginTop:hp(3),marginLeft:wp(2),marginRight:wp(2),marginBottom:hp(2),textAlign:"center",fontFamily:"Montserrat_400Regular",fontSize:14,color: "#767676",lineHeight:22}}>Software Freedom Day is a worldwide event to celebrate the usage of Free and Open Source Software. It is a public education effort to increase awareness of free software and its virtues and encouraging its use. Each year the event has seen a growing number of participants. Our past speakers were from many prestigious software companies like Facebook, Microsoft and Google, enlightening us about the various software developments. SFD aims to bring together developers and students, of all levels, on a single platform to share their thoughts, ideas and inspirations.</Text>


<Text style={styles.title}>Our Speakers</Text>

<ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:hp(3),marginTop:hp(3)}}>
        <TouchableOpacity>
          <Image style={{height:hp(46),width:wp(88),borderRadius:15,marginLeft:wp(6),marginRight:wp(4)}} source={require("../images/speaker1.jpg")}></Image></TouchableOpacity>
        
        
          <TouchableOpacity>
          <Image style={{height:hp(46),width:wp(88),borderRadius:15,marginLeft:wp(6),marginRight:wp(4)}} source={require("../images/speaker2.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:hp(46),width:wp(88),borderRadius:15,marginLeft:wp(6),marginRight:wp(4)}} source={require("../images/speaker3.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:hp(46),width:wp(88),borderRadius:15,marginLeft:wp(6),marginRight:wp(4)}} source={require("../images/speaker4.jpg")}></Image></TouchableOpacity>
          <TouchableOpacity>
          <Image style={{height:hp(46),width:wp(88),borderRadius:15,marginLeft:wp(6),marginRight:wp(7)}} source={require("../images/speaker5.jpg")}></Image></TouchableOpacity>

        </ScrollView>

        <Text style={{fontFamily:"Montserrat_700Bold", marginLeft:20,
        marginTop:20,}}>Open Source is your Destiny | Madhava Jay</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="ghvE6Y1oIrs"
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
        marginTop:20,}}>Climbing up the Ladder Through Open-Source Contribution | Zarreen Naowal Reza </Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="zOuT6WU02_4"
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
        marginTop:20,}}>Post Quantum Cryptography | Gokul Alex </Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="NbSv1gRlE1c"
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
        marginTop:20,}}>Cosmos: The Internet of Blockchains | Sonia Singla</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="gHUIEWrOKxw"
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
        marginTop:20,}}>My Journey from Open Source to HackerRank | Adyash Mohanty </Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="uGNL9Uls_LQ"
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
        marginTop:20,}}>Panel discussion | Jivitesh Dhaliwal | Akshay Kumar | Pranav Kumar </Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="4JVsONj8YZk"
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
        marginTop:hp(1),
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