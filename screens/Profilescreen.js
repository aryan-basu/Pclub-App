import React from "react";
import {View , Text, Button , StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profilescreen = ({navigation}) => {

    return (
      <View>
<View style={styles.container}>
<Image 
  source={{
    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
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
     }}>Aryan Basu</Text>
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
     <Icon name="play" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>My courses</Text></View>
    <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="bookmark" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Saved Articles</Text></View>
         
         <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="download" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Offline Articles</Text></View>
           <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="star" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Interests</Text></View>
             <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="info-circle" style={{marginRight:22,color:"#373636"}} size={26} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>About us</Text></View>
         <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="play" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Privacy and Policy</Text></View>
           <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="bug" style={{marginRight:20,color:"#373636"}} size={25}  />
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
         <View style={{flexDirection: 'row', marginTop: 10,
      marginBottom:10,marginLeft: 20,}}>
     <Icon name="sign-out" style={{marginRight:20,color:"#373636"}} size={25} color="#900" />
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__400Regular",
     
      fontSize: 19,
      lineHeight: 24,
      
      alignItems:"flex-start",
     }}>Logout</Text></View>
     
    <Button
  style={{fontSize: 20, color: 'green'}}
  styleDisabled={{color: 'red'}}
  onPress={()=>navigation.navigate('Onboarding')}
  title="Press Me"
>
  Press Me
</Button>
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