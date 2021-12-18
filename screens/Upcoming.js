import React from "react";
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity,Image,ActivityIndicator,Linking} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ion from 'react-native-vector-icons/Ionicons';
import CountDown from 'react-native-countdown-component';
const Upcoming= ({navigation}) => {
    const [rl,setrl]=useState("");
    const [image2,setimage2]=useState("");
    const [image3,setimage3]=useState("");
    const [image4,setimage4]=useState("");
  const [loader,setloader]=useState(true);
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const doc1=await firestore().collection('image').doc('image1').get();
setrl(doc1.data());
      
const doc2=await firestore().collection('image').doc('image2').get();
setimage2(doc2.data().url);
const doc3=await firestore().collection('image').doc('image3').get();
setimage3(doc3.data());
const doc4=await firestore().collection('image').doc('image4').get();
setimage4(doc4.data().url);
     setloader(false)
    }
  
  }, []);
  return loader?(<View style={{justifyContent:"center",flex: 1,}}><ActivityIndicator size="large" color="#118b06" /></View>):(
    <ScrollView showsVerticalScrollIndicator={false}>
       <View style={{flexDirection:"row"}}>
         <Text style={{ fontFamily: "Montserrat_700Bold",
    marginTop: 0,
    marginLeft:wp('7%'),
    marginTop:hp('4%'),
    fontSize: 22,
    marginBottom:hp('1%')}}>Upcoming Sessions</Text>
    
         </View>
         
     
 
       <ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:hp(0.8),marginTop:hp(2)}}>
    
        
       <View style={[styles.card2,styles.elevation,{marginTop:hp(7),marginBottom:hp(7)}]}>
      <Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${rl.url}`}}></Image>

      <View   >
        <View style={{flexDirection:"row"}}>
          <Text style={styles.cardtitle}>Introduction to Linux</Text>
          <View style={{borderRadius:5,height:hp(7),width:wp(12),backgroundColor:"#118b06",position:"absolute",right:15,marginTop:hp(-1.5),justifyContent:"center",padding:wp(2)}}>
            <Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:14}}numberOfLines={2}>24 Oct</Text>
          </View>
          </View>
          <View style={{flexDirection:"row"}}>
          <Ion name="location-outline" style={{marginTop:hp(2),marginLeft:wp(2),color:"#118b06"}} size={22} color="#118b06" />
          <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      alignItems:"flex-start",
     }}>Online</Text>
      <Ion name="time-outline" style={{marginTop:hp(2),position:"absolute",right:80,color:"#118b06"}} size={22} color="#118b06" />
      <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      position:"absolute",
      right:10
     }}>6:00 Pm</Text>
          </View>
  <View style={{borderRadius:7,height:hp(5),width:wp(25),backgroundColor:"#118b06",marginLeft:wp(30),marginTop:hp(2),padding:wp(2)}}
  >
<Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:18}}onPress={ ()=> Linking.openURL(`${rl.Meetlink}`) }>Join</Text>
  </View>

  </View>
      
</View>
<View style={[styles.card2,styles.elevation,{marginTop:hp(7),marginBottom:hp(7)}]}>
      <Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${image3.url}`}}></Image>

      <View   >
        <View style={{flexDirection:"row"}}>
          <Text style={styles.cardtitle}>Introduction to Linux</Text>
          <View style={{borderRadius:5,height:hp(7),width:wp(12),backgroundColor:"#118b06",position:"absolute",right:15,marginTop:hp(-1.5),justifyContent:"center",padding:wp(2)}}>
            <Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:14}}numberOfLines={2}>24 Oct</Text>
          </View>
          </View>
          <View style={{flexDirection:"row"}}>
          <Ion name="location-outline" style={{marginTop:hp(2),marginLeft:wp(2),color:"#118b06"}} size={22} color="#118b06" />
          <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      alignItems:"flex-start",
     }}>Online</Text>
      <Ion name="time-outline" style={{marginTop:hp(2),position:"absolute",right:80,color:"#118b06"}} size={22} color="#118b06" />
      <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      position:"absolute",
      right:10
     }}>6:00 Pm</Text>
          </View>
  <View style={{borderRadius:7,height:hp(5),width:wp(25),backgroundColor:"#118b06",marginLeft:wp(30),marginTop:hp(2),padding:wp(2)}}
  >
<Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:18}}onPress={ ()=> Linking.openURL(`${rl.Meetlink}`) }>Join</Text>
  </View>

  </View>
      
</View>
<View style={[styles.card2,styles.elevation,{marginTop:hp(7),marginBottom:hp(7)}]}>
      <Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${image2}`}}></Image>

      <View   >
        <View style={{flexDirection:"row"}}>
          <Text style={styles.cardtitle}>Introduction to Linux</Text>
          <View style={{borderRadius:5,height:hp(7),width:wp(12),backgroundColor:"#118b06",position:"absolute",right:15,marginTop:hp(-1.5),justifyContent:"center",padding:wp(2)}}>
            <Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:14}}numberOfLines={2}>24 Oct</Text>
          </View>
          </View>
          <View style={{flexDirection:"row"}}>
          <Ion name="location-outline" style={{marginTop:hp(2),marginLeft:wp(2),color:"#118b06"}} size={22} color="#118b06" />
          <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      alignItems:"flex-start",
     }}>Online</Text>
      <Ion name="time-outline" style={{marginTop:hp(2),position:"absolute",right:80,color:"#118b06"}} size={22} color="#118b06" />
      <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      position:"absolute",
      right:10
     }}>7:00 Pm</Text>
          </View>
  <View style={{borderRadius:7,height:hp(5),width:wp(25),backgroundColor:"#118b06",marginLeft:wp(30),marginTop:hp(2),padding:wp(2)}}
  >
<Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:18}}onPress={ ()=> Linking.openURL(`${rl.Meetlink}`) }>Join</Text>
  </View>

  </View>
      
</View>
<View style={[styles.card2,styles.elevation,{marginTop:hp(7),marginBottom:hp(7)}]}>
      <Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${rl.url}`}}></Image>

      <View   >
        <View style={{flexDirection:"row"}}>
          <Text style={styles.cardtitle}>Introduction to Linux</Text>
          <View style={{borderRadius:5,height:hp(7),width:wp(12),backgroundColor:"#118b06",position:"absolute",right:15,marginTop:hp(-1.5),justifyContent:"center",padding:wp(2)}}>
            <Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:14}}numberOfLines={2}>24 Oct</Text>
          </View>
          </View>
          <View style={{flexDirection:"row"}}>
          <Ion name="location-outline" style={{marginTop:hp(2),marginLeft:wp(2),color:"#118b06"}} size={22} color="#118b06" />
          <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      alignItems:"flex-start",
     }}>Online</Text>
      <Ion name="time-outline" style={{marginTop:hp(2),position:"absolute",right:80,color:"#118b06"}} size={22} color="#118b06" />
      <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     marginTop:hp(2),
      fontSize: 15,
      lineHeight: 24,
      marginLeft:wp(1),
      position:"absolute",
      right:10
     }}>8:00 Pm</Text>
          </View>
  <View style={{borderRadius:7,height:hp(5),width:wp(25),backgroundColor:"#118b06",marginLeft:wp(30),marginTop:hp(2),padding:wp(2)}}
  >
<Text style={{color:"#ffff",fontFamily: "Montserrat_700Bold",textAlign:"center",fontSize:18}}onPress={ ()=> Linking.openURL(`${rl.Meetlink}`) }>Join</Text>
  </View>

  </View>
      
</View>

        
      
 
</ScrollView>
</ScrollView>

    );
};
export default Upcoming;

const styles = StyleSheet.create ({
  
    container : {
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     },
     title: {
        fontFamily: "Montserrat_700Bold",
        marginTop: 0,
        marginLeft:wp('7%'),
        marginTop:hp('2%'),
        fontSize: 22,
        marginBottom:hp('1%')
    
      },
   
    cardtitle:{
        fontFamily:"Montserrat_700Bold",
        color:"#000",
        marginTop:hp(2),
      marginLeft:wp(3),

        fontSize:14,
      marginRight:wp(1)  
              },

              card2:{
                backgroundColor: 'white',
                borderRadius: 10,
    
                width:wp(86),
                height:hp(60.5),
                marginTop:hp(0.5),
                marginRight:wp(2),
                marginLeft:wp(4),
              },
              elevation: {
                elevation: 20,
                shadowColor: '#000',
              },
            
});