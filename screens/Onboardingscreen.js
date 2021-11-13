import React, { useEffect } from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

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
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
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
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    textAlign: 'center',
  },
});

const Onboardingscreen = () => {

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
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
        style={styles.wrapper}
        showsButtons={true}
        paginationStyle={{
          marginRight: w * 0.7,
          marginBottom: h * 0.02,
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
            }}
          >
            <AntDesign name="arrowright" size={22} color="#FFF" />
          </View>
        }
        prevButton={
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
      >
        <View style={styles.slide}>
          <Image source={require("../images/tpp.png")} style={styles.abc} />
          <Text style={styles.logotitle}>Programming Club</Text>
          <Text style={styles.logotext}>
          An portal for uiet students
          </Text>
          
        
        </View>
        <View style={styles.slide}>
          <Image source={require("../images/gain.png")} style={styles.img} /> 
          <Text style={styles.title}>Gain knowledge from Session</Text>
          <Text style={styles.text}>
           In your coding journey make a pitstop through our session and gain some knowledge about exciting world of coding !
          </Text>
        </View>

        <View style={styles.slide}>
          <Image source={require("../images/os.png")} style={styles.img} />
          <Text style={styles.title}>Explore Open-source</Text>
          <Text style={styles.text}>
          Explore different open source project and new stacks with our experts and get a 
chance to be a part of open source community
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("../images/topic.png")} style={styles.img} />
          <Text style={styles.title}>Explore Popular Topics</Text>
          <Text style={styles.text}>
           Come and explore a variety of topics that are extremely important to know and understand which will help you to be future ready!
          </Text>
        </View>
      </Swiper>
  );
  // }
};
export default Onboardingscreen;