import React, { useState, useEffect } from 'react';
import {View , Text, Button , StyleSheet,Image,TouchableOpacity} from 'react-native';
import { color } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { updateId } from 'expo-updates';


const Profilescreen = ({navigation}) => {
  const [userdata, updateuserdata] = useState('Null')
  const [photo,updatephoto]=useState('https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png')
async function signout(){
  try {
   
    var user = auth().currentUser;
    if(user)
    {
      await auth().signOut();
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut().then(navigation.navigate('Login'));
      
    
    }
    else
    navigation.navigate('Login');
    //this.setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
 

}
useEffect (() => {
  var data=auth().currentUser
  if(data){
  updateuserdata(data.displayName);
  updatephoto(data.photoURL);
  }
 // console.log(userdata);

})
    return (
      <View>
<View style={styles.container}>
<Image 
  source={{
    uri: `${photo}`
  }} 
  style={{width: 180, height: 180, borderRadius: 400/ 2,marginTop:40}} 
/>
    <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 20,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 10,
     }}>{userdata}</Text>
      <Text style={{ color: "#767676",
      fontFamily: "Montserrat_400Regular",
      marginTop: 5,
      marginBottom:20,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 10,
      marginRight:10,
      textAlign:"center"
     }}>University Institute of Engineering and Technology</Text>
     </View>
     <View style={styles.newconatiner}>
       <View style={{flexDirection: 'row', marginTop: 20,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="play-box-outline" style={{marginRight:20,borderColor:"#373636",color:"#000",}} size={25} />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>My courses</Text></View>
    <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="bookmark-multiple-outline" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Saved Articles</Text></View>
         
         <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <AntDesign name="download" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Offline Articles</Text></View>
           <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="star-outline" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Interests</Text></View>
             <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="information-outline" style={{marginRight:22,color:"#373636"}} size={26} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>About us</Text></View>
         <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="security" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Privacy and Policy</Text></View>
           <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="bug-outline" style={{marginRight:20,color:"#373636"}} size={25}  />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Feedback</Text></View>
            <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="cogs" style={{marginRight:20,color:"#373636"}} size={25}  />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Settings</Text></View>
         <TouchableOpacity onPress={signout} style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="logout" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Logout</Text></TouchableOpacity>
     
  
</View>
</View>

    );
};
export default Profilescreen;

const styles = StyleSheet.create ({
  
    container : {
     alignItems:"center",
     marginTop:0,
     backgroundColor:"#f5f5f5",
     },
     abc:{
       marginTop:40,
       borderRadius:40,
       height:80,
       width:90,
     },
     newconatiner:{
   backgroundColor:"#ffffff"
     }
});