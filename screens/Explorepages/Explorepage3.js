import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image,ScrollView,ActivityIndicator,Linking} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import YouTubePlayer from "react-native-youtube-sdk";
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Explorepage3 = ({navigation}) => {
    const [loader,setloader]=useState(true);
    const articles=[];
    const [searchTerm,setsearchTerm]=useState("");
    const [books, setBooks] = useState(null);
    useEffect(() => {
        getData();

        // we will use async/await to fetch this data
        async function getData() {
          
           await firestore().collection('sessions').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                 // console.log(doc.data().email);
                   articles.push({Title:doc.data().title,videoid:doc.data().videoId});
                    //console.log(doc.id, " => ", doc.data().firstName);
                  
                });
               // console.log(maindata);
               // <CSVDownload data={maindata} target="_blank" />
              
              });
   //console.log(articles)
          // store the data into our books variable
          //console.log(maindata);
         setBooks(articles) ;
         setloader(false)
        
        }
      }, []);
    return loader?(<View style={{justifyContent:"center",flex: 1,}}><ActivityIndicator size="large" color="#118b06" /></View>): (
       
<View style={styles.container}>

<View style={{flexDirection:"row"}} >
    <Icon onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:hp(2),marginLeft:wp(3),color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>SESSIONS</Text> 
    
    </View>
    {books && ( 
         <ScrollView>
  {books.filter((val)=>{if(searchTerm===""){
              return val
          }else if(val.dish.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
          }
        }).map((book , index) => index<105&&( 
            <View key={index}>
        <Text style={{fontFamily:"Montserrat_700Bold", marginLeft:wp(6),
        marginTop:hp(3),}}>{book.Title}</Text>
               
             
                <YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId={book.videoid}
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
</View>
                ))}

                </ScrollView>
                    )}
</View>


    );
};
export default Explorepage3;

const styles = StyleSheet.create ({
  
    container :{
        flex:1,
        
       // alignItems:'center',
      //  justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginTop:hp(2),
        textAlign:"center",
        fontSize: 22,
        marginLeft:wp(4)
    
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