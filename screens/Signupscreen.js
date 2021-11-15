import React from "react";
import {View , Text, Button , StyleSheet} from 'react-native';

const Signupscreen = ({navigation}) => {

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
export default Signupscreen;

const styles = StyleSheet.create ({
  
    container : {
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     },
});