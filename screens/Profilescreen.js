import React, { useState, useEffect } from 'react';
import {View , Text, Button , StyleSheet,Image,TouchableOpacity,SectionList,ScrollView} from 'react-native';
import { color } from "react-native-reanimated";
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { updateId } from 'expo-updates';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Profilescreen = ({navigation}) => {
  const [userdata, updateuserdata] = useState('Robohash')
  const [photo,updatephoto]=useState('https://gravatar.com/avatar/ba51395b85ae7e37c96b7a3712f9c48e?s=400&d=robohash&r=x')
  const [institute,updateinstitute]=useState('University Institute of Engineering and Technology')
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
 // console.log(data)
  if(data){
  if(data.displayName!=null){
  updateuserdata(data.displayName);
  updatephoto(data.photoURL);
  }
  else if(data.email!=null)
  {
    firestore()
  .collection('user')
  .doc(`${data.email}`)
  .get()
  .then(documentSnapshot => {
  updateinstitute(documentSnapshot.data().institution)
  updateuserdata(documentSnapshot.data().name)
    //  console.log('User data: ', documentSnapshot.data());
    });
  }
}
 // console.log(userdata);

})
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
<View style={styles.container}>
<Image 
  source={{
    uri: `${photo}`
  }} 
  style={{width: wp(45), height: hp(23), borderRadius: 400/ 2,marginTop:hp(3),backgroundColor:"#ffffff"}} 
/>
    <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: hp(2),
      marginBottom:hp(1),
      fontSize: 19,
      lineHeight: 24,
      marginLeft: wp(2),
     }}>{userdata}</Text>
      <Text style={{ color: "#767676",
      fontFamily: "Montserrat_400Regular",
      marginTop: hp(0.5),
      marginBottom:hp(2),
      fontSize: 19,
      lineHeight: 24,
      marginLeft: wp(2),
      marginRight:wp(2),
      textAlign:"center"
     }}>{institute}</Text>
     </View>
     <View style={styles.newconatiner}>
       <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}} onPress={()=>navigation.navigate('writearticle')}>
     <Icon name="pencil-box-multiple-outline" style={{marginRight:wp(5),borderColor:"#373636",color:"#000",}} size={22} />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Write an article</Text></TouchableOpacity>
    <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}}>
     <Icon name="bookmark-multiple-outline" style={{marginRight:wp(5),color:"#373636"}} size={22} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Saved Articles</Text></TouchableOpacity>
         
         <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}}>
     <AntDesign name="download" style={{marginRight:wp(5),color:"#373636"}} size={22} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Offline Articles</Text></TouchableOpacity>
           <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}}>
     <Icon name="star-outline" style={{marginRight:wp(5),color:"#373636"}} size={24} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Interests</Text></TouchableOpacity>
             <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}}>
     <Icon name="information-outline" style={{marginRight:wp(5),color:"#373636"}} size={22} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>About us</Text></TouchableOpacity>
         <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}}>
     <Icon name="security" style={{marginRight:wp(5),color:"#373636"}} size={22} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Privacy and Policy</Text></TouchableOpacity>
           <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}}>
     <Icon name="bug-outline" style={{marginRight:wp(5),color:"#373636"}} size={22}  />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Feedback</Text></TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(1),marginLeft: wp(5),}}>
     <Icon name="cogs" style={{marginRight:wp(5),color:"#373636"}} size={22}  />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
      
     }}>Settings</Text></TouchableOpacity>
         <TouchableOpacity onPress={signout} style={{flexDirection: 'row', marginTop: hp(3),
      marginBottom:hp(10),marginLeft: wp(5),}}>
     <Icon name="logout" style={{marginRight:wp(5),color:"#373636"}} size={22} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat_500Medium",
     
      fontSize: 15,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Logout</Text></TouchableOpacity>
     
  
</View>


</View>
</ScrollView>

    );
};
export default Profilescreen;

const styles = StyleSheet.create ({
  
    container : {
     alignItems:"center",
     marginTop:0,
     backgroundColor:"#f5f5f5",
     },
   
     newconatiner:{
   backgroundColor:"#ffffff"
     }
});