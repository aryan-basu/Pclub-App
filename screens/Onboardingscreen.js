import React, { useEffect } from "react";
import { StyleSheet, Image,Button, Dimensions, Text, View, Pressable  } from "react-native";
import { useNavigation } from '@react-navigation/native';


import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
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
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  abc :{
    alignItems:"center",
    alignSelf: "center",
    height: 235,
    width: 215,
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
    marginTop:70,
    borderWidth:2,
borderRadius:5,
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  skip:{
backgroundColor:"transparent",
borderColor:"#118b06",
borderWidth:2,
borderRadius:5,
color:"#FFFF",
width:80,
marginLeft:260,
marginTop:-50,
marginBottom:30
  },
  skiptext:{
color:"#118b06",
fontFamily: "Montserrat_400Regular",

    fontSize: 16,
  
    
    textAlign: 'center',

paddingTop:10,
paddingBottom:10

  },
  title: {
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 22,

  },
  text: {
    color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    textAlign: 'center',
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
  
  return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        paginationStyle={{
         // marginLeft: w * 0.7,
          marginBottom: h * 0.07,
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
   
        <View style={styles.slide}>
        <Pressable style={styles.skip} onPress={()=>navigation.navigate('Login')} >
      <Text style={styles.skiptext}>Skip</Text>
    </Pressable>
          <Image source={require("../images/tpp.png")} style={styles.abc} />
          <Text style={styles.logotitle}>Programming Club</Text>
          <Text style={styles.skiptext}>
          An portal for uiet students
          </Text>
    
          
        
        </View>
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
          <Image source={require("../images/topic.png")} style={styles.img} />
          <Text style={styles.title}>Explore Popular Topics</Text>
          <Text style={styles.text}>
           Come and explore a variety of topics that are extremely important to know and understand which will help you to be future ready!
          </Text>
         
          <Pressable style={styles.continue} onPress={()=>navigation.navigate('Login')} >
      <Text style={styles.skiptext}>Get Started</Text>
    </Pressable>
        </View>
       
      </Swiper>
    
  );
  // }
};
export default Onboardingscreen;