import React from "react";
import {View , Text, Button , StyleSheet,Image} from 'react-native';

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
     <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>My courses</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>Save Articles</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>Offline Articles</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>Interests</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>About Us</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>Privacy and Policy</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>Feedback</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>Settings</Text>
          <Text style={{ color: "#000",
      fontFamily: "Montserrat__700Bold",
      marginTop: 10,
      marginBottom:10,
      fontSize: 19,
      lineHeight: 24,
      marginLeft: 40,
      alignItems:"flex-start",
     }}>Logout</Text>
     
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