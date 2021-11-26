import React, { useEffect } from "react";
import { StyleSheet, Image,Button, Dimensions, Text, View, Pressable  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import Homescreen from "./Homescreen";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import AppLoading from "expo-app-loading";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
 
  slide: {
    flex:1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  abc :{
    alignItems:"center",
    alignSelf: "center",
    height: 335,
    width: 335,
    marginTop:50
  },
  logotitle:{
    fontFamily: "Montserrat_700Bold",
    justifyContent:"center",
    fontSize:32,
    marginTop: 40,
  },
  logotext:{
    color: "#118b06",
    fontFamily: "Montserrat_400Regular",
    marginTop: 10,
    marginLeft:50,
    fontSize: 16,
    alignItems:"center",
  },
  continue:{
    backgroundColor:"transparent",
    borderColor:"#118b06",
    //marginTop:20,
    //marginTop:h * 0.09,
    marginTop:hp(4),
    borderWidth:2,
borderRadius:5,
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: hp(51),
    width: wp(90),
  },
  skip:{
backgroundColor:"transparent",
borderColor:"#118b06",
borderWidth:2,
borderRadius:5,
color:"#FFFF",
width:wp(22),
marginLeft:wp(65),
marginBottom:0,
marginTop:hp(-6)
  },
  skiptext:{
    color:"#118b06",
    fontFamily: "Montserrat_400Regular",
    
        fontSize: 16,
      
        
        textAlign: 'center',
    
    paddingTop:hp(1),
    paddingBottom:hp(1.2)
    
      },
  title: {
    fontFamily: "Montserrat_700Bold",
    marginTop: hp(1),
    textAlign: 'center',
    
    fontSize: 22,

  },
  text: {
    color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: hp(2),
    fontSize: 16,
    lineHeight: 22,
   marginBottom:hp(2),
    textAlign: 'center',
    flex:1
  },
});

const Onboardingscreen = ({navigation}) => {


  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
    useEffect (() => {

      var data=auth().currentUser
      // console.log(data)
       if(data){
navigation.navigate('Home')
       }
     
      // console.log(userdata);
     
     })
     return (
       <View style={{flex:1}}>
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          flex: 1,
         
          
          
        }}
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        paginationStyle={{
         marginBottom:hp(7),
         
         flex:1
          
        }}
        activeDotColor="#118b06"
        dotColor="#998FA2"
        nextButton={
          <View 
            style={{
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              backgroundColor: "#118b06",
              marginHorizontal: 20,
            }}
          
          >
            <AntDesign name="arrowleft" size={22} color="#FFF" />
        
          </View>
        }
        
     onIndexChanged={(index)=>{
      
      if(index===3)
    {
      
     /* setTimeout(() => {
        navigation.navigate('Login'); //this.props.navigation.navigate('Login')
    }, 5000); 
     //  navigation.navigate('Login'); */
    }}
  }
      >
   {/*
        <View style={styles.slide}>
        <Pressable style={styles.skip} onPress={()=>navigation.navigate('Login')} >
      <Text style={styles.skiptext}>Skip</Text>
    </Pressable>
          <Image source={require("../images/Pclub.png")} style={styles.abc} />
         
    
          
        
   </View> */}
        <View style={styles.slide}>
        <Pressable style={styles.skip} onPress={()=>navigation.navigate('Login')} >
      <Text style={styles.skiptext}>Skip</Text>
    </Pressable>
          <Image source={require("../images/gain.png")} style={styles.img} /> 
          <Text style={styles.title}>Regular Session</Text>
          <Text style={styles.text}>
           In your coding journey make a pitstop through our session and gain some knowledge about exciting world of coding !
          </Text>
        
        </View>
  
        <View style={styles.slide}>
        <Pressable style={styles.skip} onPress={()=>navigation.navigate('Login')} >
      <Text style={styles.skiptext}>Skip</Text>
    </Pressable>
          <Image source={require("../images/os.png")} style={styles.img} />
          <Text style={styles.title}>Explore Open-source</Text>
          <Text style={styles.text}>
          Explore different open source project and new stacks with our experts and get a 
  chance to be a part of open source community
          </Text>
         
        </View>
        
        <View style={styles.slide} >
        <Pressable style={styles.skip} onPress={()=>navigation.navigate('Login')} >
      <Text style={styles.skiptext}>Skip</Text>
    </Pressable>
          <Image source={require("../images/topic.png")} style={{alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: hp(47),
    width: wp(90),}} />
          <Text style={{ fontFamily: "Montserrat_700Bold",
    marginTop: hp(4.5),
    textAlign:"center",
    
    fontSize: 21,}}>Gain knowledge from articles</Text>
          <Text style={{color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: hp(2),
    fontSize: 16,
    lineHeight: 22,
    textAlign:"center",
    flex:1
    }}>
           Come and explore a variety of articles that are extremely important to know and understand which will help you to be future ready!
          </Text>
         
          <Pressable style={{  backgroundColor:"transparent",
    borderColor:"#118b06",
    //marginTop:20,
    //marginTop:h * 0.09,
    marginBottom:hp(3),
    borderWidth:2,
borderRadius:5,}} onPress={()=>navigation.navigate('Login')} >
      <Text style={{color:"#118b06",
    fontFamily: "Montserrat_400Regular",
    
        fontSize: 16,
      
        
        textAlign: 'center',
    paddingTop:hp(1.2),
    paddingBottom:hp(1.4)}}>Get Started</Text>
    </Pressable>
        </View>
       
      </Swiper>
      </View>
    
  );
  // }
};
export default Onboardingscreen;