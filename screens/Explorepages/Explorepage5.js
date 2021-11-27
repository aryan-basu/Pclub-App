import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import YouTubePlayer from "react-native-youtube-sdk";
const Explorepage5 = ({navigation}) => {

    return (
<View style={styles.container}>
    <ScrollView style={{flex:1}}>
<View style={{flexDirection:"row"}} >
    <Icon onPress={()=>navigation.navigate('Explore')} onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:hp(2.9),marginLeft:wp(3.5),color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>RESEARCH FRIDAY</Text> 
    
    </View>
   
    <Text style={{fontFamily:"Montserrat_700Bold", marginLeft:wp(5),
        marginTop:hp(3),}}>SESSION 1</Text>
               
      
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="bFTcuP1J72s"
  autoPlay={false}
  fullscreen={false}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{width: "95%", height: hp(27),marginBottom:hp(2),marginTop:hp(2),marginLeft:wp(2),marginRight:wp(4)}}
  onError={e => console.log(e)}
  onChangeState={e => console.log(e)}
  onChangeFullscreen={e => console.log(e)}
/>
<Text style={{fontFamily:"Montserrat_700Bold", marginLeft:wp(5),
        marginTop:hp(3),}}>SESSION 2</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="JsyTnB2XIp4"
  autoPlay={false}
  fullscreen={false}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{ width: "95%", height: hp(27),marginBottom:hp(2),marginTop:hp(2),marginLeft:wp(2),marginRight:wp(4)}}
  onError={e => console.log(e)}
  onChangeState={e => console.log(e)}
  onChangeFullscreen={e => console.log(e)}
/>
<Text style={{fontFamily:"Montserrat_700Bold", marginLeft:wp(5),
        marginTop:hp(3),}}>SESSION 3</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="srQOS9Ppas4"
  autoPlay={false}
  fullscreen={false}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{ width: "95%", height: hp(27),marginBottom:hp(2),marginTop:hp(2),marginLeft:wp(2),marginRight:wp(4)}}
  onError={e => console.log(e)}
  onChangeState={e => console.log(e)}
  onChangeFullscreen={e => console.log(e)}
/>
  
                </ScrollView>
</View>

    );
};
export default Explorepage5;

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
        marginLeft:wp(4),
        marginTop:hp(2.9),
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