import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View ,Image, Text, Button , StyleSheet,TextInput,Pressable,SocialIcon,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Awesome from 'react-native-vector-icons/FontAwesome'
import Profilescreen from './Profilescreen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const handlePress=()=>{

     
    alert('Login')
}


const Signupscreen = ({navigation}) => {
  
    //const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name,setName]=useState();
    const [institution,setInstitution]=useState();

    async function register (email,password){
      const data={
        email:email,
        name:name,
        institution:institution
      }
      console.log(data);
      await firestore().collection('user').doc(`${email}`).set(data).then(
       auth().createUserWithEmailAndPassword(email,password)).then(navigation.navigate('Home'));
      

    }
    return (
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
<View  style={styles.container}>

    <Text style={styles.title}>Create an Account</Text>
    <Text style={styles.text}>Sign-up To get Started!</Text>
    <TouchableOpacity style={{flexDirection:"row", borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:hp(1.5),
        marginBottom:hp(1.5),}}>
   <Icon name="account" style={{marginRight:wp(5),color:"#666"}} size={25} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Name'
        onChangeText={(name) => setName(name)}
        placeholderTextColor="#666"
        blurOnSubmit={false}
        autoFocus={true}
      /></TouchableOpacity>
    <View style={{flexDirection:"row", borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:hp(1),
        marginBottom:hp(1),}}>
   <Icon name="email" style={{marginRight:wp(5),color:"#666"}} size={25} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={(email) => setEmail(email)}
        placeholderTextColor="#666"
        autoFocus={true}
        blurOnSubmit={false}
      /></View>
     <View style={{flexDirection:"row", borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:hp(1),
        marginBottom:hp(1),}}>
   <Awesome name="institution" style={{marginRight:wp(4.5),color:"#666"}} size={25} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Institution/Organization'
        onChangeText={(institution) => setInstitution(institution)}
        placeholderTextColor="#666"
        blurOnSubmit={false}
        autoFocus={true}
      /></View>
        <View style={{flexDirection:"row", borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:hp(1),
        marginBottom:hp(1),}}>
   <Icon name="key" style={{marginRight:wp(5),color:"#666"}} size={25} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={(password) => setPassword(password)}
        placeholderTextColor="#666"
        secureTextEntry
        blurOnSubmit={false}
        autoFocus={true}
      /></View>
        <View style={{flexDirection:"row", borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:hp(1),
        marginBottom:hp(1),}}>
   <Icon name="key" style={{marginRight:wp(5),color:"#666"}} size={25} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        placeholderTextColor="#666"
        secureTextEntry
        blurOnSubmit={false}
        autoFocus={true}
      /></View>
       <View style={{ 
      fontSize: 14,
      //lineHeight: 2,
      marginTop:hp(1),
      marginBottom:hp(2),
      //flex: 1,
      flexDirection: 'row',
      justifyContent:"center"
    }}>
       <Text style={{ color: "#767676",
      fontFamily: "Montserrat_400Regular",
    
      fontSize: 14,
   
     
      }}>I have Read and accept The </Text><Text style={{color:"#118b06",  fontFamily: "Montserrat_400Regular",
    
      fontSize: 14,
  }}onPress={() =>navigation.navigate("Signup")}> Privacy and policy</Text></View>
      <Pressable style={styles.continue}   onPress={()=>register(email, password)} >
      <Text style={styles.skiptext}>Sign Up</Text>
    </Pressable>
 
    <View style={{ marginTop: hp(1),
      marginBottom:hp(1),
      fontSize: 14,
      lineHeight: 1,
      flex: 1,
      flexDirection: 'row',
      justifyContent:"center"
    }}>
    <Text style={{ color: "#767676",
      fontFamily: "Montserrat_400Regular",
     
     
      }}>Already have an account ?</Text><Text style={{color:"#118b06",marginBottom:hp(4)}}onPress={() =>navigation.navigate("Login")}> Sign in Now!</Text></View>
    
    <Pressable style={styles.continue}   onPress={()=>navigation.navigate('Home')} >
      <Text style={styles.skiptext}>Sign Up</Text>
    </Pressable>

</View>
</ScrollView>

    );
};
export default Signupscreen;

const styles = StyleSheet.create ({
  
  container : {
    flex: 1,
    paddingTop: hp(12),
    marginHorizontal: wp(7.6),
   },
   title: {
    fontFamily: "Montserrat_700Bold",
    marginTop: 0,
    
    marginHorizontal: wp(1.9),
    fontSize: 22,

  },
    input: {
      
    },
  text: {
    color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: hp(1),
    marginBottom:hp(1),
    fontSize: 19,
    lineHeight: 24,
    marginLeft: wp(1),
   
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
    marginTop:0,
    borderWidth:2,
    marginBottom:hp(1),
borderRadius:10,
  },
  skiptext:{
    color:"#FFF",
    fontFamily: "Montserrat_400Regular",
    
        fontSize: 16,
      
        
        textAlign: 'center',
    
    paddingTop:hp(1),
    paddingBottom:hp(1.5)
    
      },
});