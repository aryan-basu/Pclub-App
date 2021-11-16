import React from "react";
import { useNavigation } from '@react-navigation/native';
import {View ,Image, Text, Button , StyleSheet,TextInput,Pressable,SocialIcon} from 'react-native';



const handlePress=()=>{

     
    alert('Login')
}

const LoginScreen = ({navigation}) => {
  
    //const navigation = useNavigation();
    return (
<View style={styles.container}>

    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.text}>Sign-In To Contiue!</Text>
    <TextInput
        style={styles.input}
        placeholder='Email or Username'
        placeholderTextColor="#666"
      />
       <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor="#666"
      />
       <Text style={{ color: "#767676",
      fontFamily: "Montserrat_400Regular",
      marginTop: 5,
      marginBottom:5,
      fontSize: 14,
      lineHeight: 24,
      textAlign:"right"
      }}>Forgot Password ?</Text>
      <Pressable style={styles.continue}   onPress={()=>navigation.navigate('Onboarding')} >
      <Text style={styles.skiptext}>Sign In</Text>
    </Pressable>
 
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:10,
      borderWidth:2,
      marginBottom:10,
  borderRadius:10,}}   onPress={()=>navigation.navigate('Onboarding')} >
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10}}>Sign In with Google</Text>
    </Pressable>
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:10,
      borderWidth:2,
      marginBottom:10,
  borderRadius:10,}}   onPress={()=>navigation.navigate('Onboarding')} >
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10}}>Sign In with Facebook</Text>
     

    </Pressable>
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:10,
      borderWidth:2,
      marginBottom:10,
  borderRadius:10,}}   onPress={()=>navigation.navigate('Onboarding')} >
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10}}>Sign In with Github</Text>
    </Pressable>
    <Pressable style={{ backgroundColor:"#dcdcdc",
      borderColor:"#dcdcdc",
      //marginTop:20,
      //marginTop:h * 0.09,
      marginTop:10,
      borderWidth:2,
      marginBottom:10,
  borderRadius:10,}}   onPress={()=>navigation.navigate('Onboarding')} >
      <Text style={{ color:"#000000",
      fontFamily: "Montserrat_400Regular",
      
          fontSize: 16,
        
          
          textAlign: 'center',
      
      paddingTop:10,
      paddingBottom:10}}>Sign In with LinkedIn</Text>
    </Pressable>
    <View style={{ marginTop: 10,
      marginBottom:10,
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
      paddingTop: 80,
      marginHorizontal: 30,
     },
     title: {
      fontFamily: "Montserrat_700Bold",
      marginTop: 0,
      
      marginHorizontal: 10,
      fontSize: 22,
  
    },
      input: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:10,
        marginBottom:10,
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
      marginTop:10,
      borderWidth:2,
      marginBottom:10,
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