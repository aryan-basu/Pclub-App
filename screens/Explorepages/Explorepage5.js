import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import YouTubePlayer from "react-native-youtube-sdk";
const Explorepage5 = ({navigation}) => {

    return (
<View style={styles.container}>
    <ScrollView>
<TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>RESEARCH FRIDAY</Text> 
    
    </TouchableOpacity>
   
    <Text style={{fontFamily:"Montserrat_700Bold", marginLeft:20,
        marginTop:20,}}>SESSION 1</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="bFTcuP1J72s"
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
        marginTop:20,}}>SESSION 2</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="JsyTnB2XIp4"
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
        marginTop:20,}}>SESSION 3</Text>
               
                
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="srQOS9Ppas4"
  autoPlay={false}
  fullscreen={false}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{ width: "100%", height: 200,marginBottom:40,marginTop:20,marginLeft:10,marginRight:10}}
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