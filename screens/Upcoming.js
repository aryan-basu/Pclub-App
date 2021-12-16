import React from "react";
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity,Image,ActivityIndicator,Linking} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
    
        
       <View style={[styles.card2,styles.elevation,{marginBottom:40}]}>
      <Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${rl.url}`}}></Image>

      <View   >
          <Text style={styles.cardtitle}>Linux</Text>
          <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:wp(2),marginBottom:hp(1),marginTop:hp(1),marginRight:wp(1),justifyContent:"space-evenly"}} numberOfLines={12} >{rl.descriptions}</Text>
          <Text style={{color:"#118b06",marginBottom:hp(4)}}onPress={ ()=> Linking.openURL(`${rl.Meetlink}`) }> Meet link!</Text>   
  </View>
      
</View>

        
      
   
<View style={[styles.card2,styles.elevation,{marginBottom:40}]}>
      <Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${image2}`}}></Image>

      <View   >
          <Text style={styles.cardtitle}>Linux</Text>
          <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:wp(2),marginBottom:hp(1),marginTop:hp(1),marginRight:wp(1),justifyContent:"space-evenly"}} numberOfLines={12} >Hola freshers🤩!

          Did you know Linux is a community of open-source Unix like operating systems that are based on Linux Kernel?Are you puzzled and unsure where to begin with Linux?🤔
          So, we are again back with a bang🤩.
          We, however, do have a solution to it🥳. Pclub is organizing an Introductory session on Linux on December 17, 2021. Don't miss out on the chance to learn about Linux🤩 and have a chit-chat with us🙌🏻.</Text>
          <Text style={{color:"#118b06",marginBottom:hp(4)}}onPress={ ()=> Linking.openURL('https://google.com') }> Meet link!</Text> 
  </View>
  
      
</View>
<View style={[styles.card2,styles.elevation,{marginBottom:40}]}>
<Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${image3.url}`}}></Image>
      <View>
      <Text style={styles.cardtitle}>Introduction to DSA</Text>
      <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:wp(2),marginBottom:hp(1),marginTop:hp(1),marginRight:wp(1),justifyContent:"space-evenly"}} >{image3.descriptions}</Text>
          <Text style={{color:"#118b06",marginBottom:hp(4)}}onPress={ ()=> Linking.openURL(`${rl.Meetlink}`) }> Meet link!</Text>   
      </View>
      </View>
      <View style={[styles.card2,styles.elevation,{marginBottom:40}]}>
<Image style={{height:hp(42),width:wp(86),borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:hp(0),marginRight:hp(0)}}  source={{uri:`${image3.url}`}}></Image>
      <View>
      <Text style={styles.cardtitle}>Introduction to DSA</Text>
      <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:wp(2),marginBottom:hp(1),marginTop:hp(1),marginRight:wp(1),justifyContent:"space-evenly"}} >{image3.descriptions}</Text>
          <Text style={{color:"#118b06",marginBottom:hp(4)}}onPress={ ()=> Linking.openURL(`${rl.Meetlink}`) }> Meet link!</Text>   
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
      marginLeft:wp(2),

        fontSize:14,
      marginRight:wp(1)  
              },

              card2:{
                backgroundColor: 'white',
                borderRadius: 10,
    
                width:wp(86),
                height:hp(76.5),
                marginTop:hp(0.5),
                marginRight:wp(2),
                marginLeft:wp(4),
              },
              elevation: {
                elevation: 20,
                shadowColor: '#000',
              },
            
});