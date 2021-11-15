import React from "react";
import { useNavigation } from '@react-navigation/native';
import {View , Text, Button , StyleSheet} from 'react-native';
import {App} from '../App';
import Onboardingscreen
 from "./Onboardingscreen";
const handlePress=()=>{

     
    alert('Login')
}

const LoginScreen = ({navigation}) => {
  
    //const navigation = useNavigation();
    return (
<View style={styles.container}>
    <Text>Login Screen</Text>
    <Button
  style={{fontSize: 20, color: 'green'}}
  styleDisabled={{color: 'red'}}
  onPress={()=>navigation.navigate('Onboarding')}
  title="Press Me"
>
  Press Me
</Button>
    
</View>

    );
};
export default LoginScreen;

const styles = StyleSheet.create ({
  
    container : {
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     },
});