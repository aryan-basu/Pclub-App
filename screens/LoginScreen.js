import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View ,Image, Text, Button , StyleSheet,TextInput,Pressable,SocialIcon,ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const LoginScreen = ({navigation}) => {
  
    //const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function signin(email,password){
      // var user=GoogleSignin.getCurrentUser();
      //console.log(user);
      auth().signInWithEmailAndPassword(email,password).then(navigation.navigate('Home'))
     }

     async function googlelogin(){
      try {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
    
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential)//.then(navigation.navigate('Profile')) //.then(navigation.navigate('Profile'))
        await navigation.navigate('Home')
       
       
        .catch(error => {
            console.log('Something went wrong with sign up: ', error);
        });
      } catch(error) {
        console.log({error});
      }
         
      
    }
    useEffect(() => {
      GoogleSignin.configure({

        webClientId:
         '213404143944-opjfievv337vaf2va1c2r5q3kh5b447o.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
         // if you want to access Google API on behalf of the user FROM YOUR SERVER
         offlineAccess:true
      });
    }, []);
    return (
<View style={styles.container}>

    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.text}>Sign-In To Contiue!</Text>
   <View style={{flexDirection:"row", borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:hp(1.5),
        marginBottom:hp(1.5),}}>
   <Icon name="email" style={{marginRight:20,color:"#666"}} size={25} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Email or Username'
        onChangeText={(email) => setEmail(email)}
        placeholderTextColor="#666"
      /></View>
       <View style={{flexDirection:"row", borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:hp(1.5),
        marginBottom:hp(1.5),}}>
   <Icon name="key" style={{marginRight:20,color:"#666"}} size={25} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={(password) => setPassword(password)}
        placeholderTextColor="#666"
        secureTextEntry
      /></View>
       <Text style={{ color: "#767676",
      fontFamily: "Montserrat_400Regular",
      marginTop: hp(0.8),
      marginBottom:hp(1),
      fontSize: 14,
      lineHeight: 24,
      textAlign:"right"
      }}>Forgot Password ?</Text>
      <Pressable style={styles.continue}   onPress={()=>signin(email,password)} >
      <Text style={styles.skiptext}>Sign In</Text>
    </Pressable>
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:hp(1),
      borderWidth:2,
      marginBottom:hp(1),
      
      flexDirection:"row",
  borderRadius:10,}}   onPress={googlelogin} >
         <Icon name="google" style={{ marginTop:5,marginLeft:wp(9),color:"#373636"}} size={25} color="#900" />
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          marginLeft:wp(10),
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10}}>Sign In with Google</Text>
    </Pressable>
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:hp(1),
      borderWidth:2,
      marginBottom:hp(1),
      
      flexDirection:"row",
  borderRadius:10,}}   onPress={()=>navigation.navigate('Onboarding')} >
         <Icon name="facebook" style={{ marginTop:5,marginLeft:wp(9),color:"#373636"}} size={25} color="#900" />
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          marginLeft:wp(9),
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10}}>Sign In with Facebook</Text>
    </Pressable>
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:hp(1),
      borderWidth:2,
      marginBottom:hp(1),
     
      flexDirection:"row",
  borderRadius:10,}}   onPress={()=>navigation.navigate('Onboarding')} >
         <Icon name="github" style={{ marginTop:hp(1),marginLeft:wp(9),color:"#373636"}} size={25} color="#900" />
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          
          textAlign: 'center',
          marginLeft:wp(10),
      paddingTop:10,
      paddingBottom:10}}>Sign In with Github</Text>
    </Pressable>
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:hp(1),
      borderWidth:2,
      marginBottom:hp(1),
      
      flexDirection:"row",
  borderRadius:10,}}   onPress={()=>navigation.navigate('Onboarding')} >
         <Icon name="linkedin" style={{ marginTop:hp(1),marginLeft:wp(9),color:"#373636"}} size={25} color="#900" />
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          marginLeft:wp(10),
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10}}>Sign In with linkedin</Text>
    </Pressable>
  
    <View style={{ marginTop: hp(1),
      marginBottom:hp(1),
      fontSize: 14,
      lineHeight: 24,
      flex: 1,
      flexDirection: 'row',
      justifyContent:"center"
    }}>
    <Text style={{ color: "#767676",
      fontFamily: "Montserrat_400Regular",
     
     
      }}>Don't have an account ?</Text><Text style={{color:"#118b06"}}onPress={() =>navigation.navigate("Signup")}> Sign up Now!</Text></View>
    
 
    
</View>

    );
};
export default LoginScreen;

const styles = StyleSheet.create ({
  
    container : {
      flex: 1,
      paddingTop: hp(13),
      marginHorizontal: wp(7.6),
     },
     title: {
      fontFamily: "Montserrat_700Bold",
      marginTop: 0,
      
      marginHorizontal: wp(2.5),
      fontSize: 22,
  
    },
      input: {
       
      },
    text: {
      color: "#767676",
      fontFamily: "Montserrat_400Regular",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 10,
     
    },
    abc:{
height:70,
width:160,
left:10,
    },
    continue:{
      backgroundColor:"#118b06",
      borderColor:"#118b06",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:hp(1.5),
      borderWidth:2,
      marginBottom:hp(1.5),
  borderRadius:10,
    },
    skiptext:{
      color:"#FFF",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10
      
        },
});