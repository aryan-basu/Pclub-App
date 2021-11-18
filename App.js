
import React, { useEffect } from "react";
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import {View ,Image, Text, Button , StyleSheet,TextInput,Pressable,SocialIcon} from 'react-native';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Onboardingscreen from "./screens/Onboardingscreen";
import LoginScreen from "./screens/LoginScreen";
import Signupscreen from "./screens/Signupscreen";
import Profilescreen from "./screens/Profilescreen";
import Homescreen from "./screens/Homescreen";
import Explorescreen from "./screens/Explorescreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator
    
    screenOptions={{
      headerShown: false, // we can make it true for showing header with same name
      tabBarShowLabel:false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        //left: 20,
        //right:20,
        elevation: 0,
        backgroundColor: '#ffffff',
        height: 60,
        
        
      },
    }

    }

    >
      <Tab.Screen name="Home" component={Homescreen}
        options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center',top:1}} >

            
<Octicons name="home" style={{color:"#373636"}} size={25} color="#900" />
              
              <Text style={{color:focused ? '#118b06':'#767676',fontSize:12,fontFamily: "Montserrat_400Regular" }} > Home</Text>
            </View>
          
      
          )
        }}
      
      
      />
      <Tab.Screen name="Explore" component={Explorescreen} 
      options={{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center',top:1}} >


<Icon name="star-outline" style={{color:"#373636"}} size={25} color="#900" />
            
            <Text style={{color:focused ? '#118b06':'#767676',fontSize:12,fontFamily: "Montserrat_400Regular" }} > Explore</Text>
          </View>
        
    
        )
      }}
      
      />
      <Tab.Screen name="Profile" component={Profilescreen}
      
      options={{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center',top:1}} >

<Icon name="account-outline" style={{color:"#373636"}} size={25} color="#900" />
          
            
            <Text style={{color:focused ? '#118b06':'#767676',fontSize:12,
      fontFamily: "Montserrat_400Regular" }} > Profile</Text>
          </View>
        
    
        )
      }}
      />
    </Tab.Navigator>
  );
}



const App = () => {


return ( <NavigationContainer>
  <AppStack.Navigator screenOptions={{ headerShown: false}}>

    <AppStack.Screen name="Onboarding" component= {Onboardingscreen} />
    <AppStack.Screen name="Login"component ={LoginScreen} />
    <AppStack.Screen name="Signup" component= {Signupscreen} />
    <AppStack.Screen name="Home" component={HomeTabs} />
   



  </AppStack.Navigator>
</NavigationContainer>
);
}

export default App;   





// for showing onboardingscreen only one time after install

/*
import React, { useEffect } from "react";
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage  from '@react-native-community/async-storage';
//import LoginScreen from "./screens/LoginScreen";
const AppStack = createStackNavigator();
const App = () => {

 const [isFirstLaunch,setIsFirstLaunched]=React.useState(null);
  useEffect(()=>{
AsyncStorage.getItem('alreadyLaunched').then(value=>{
if(value ==null){
AsyncStorage.setItem('alreadyLaunched','true');
setIsFirstLaunched(true);
}else{
  setIsFirstLaunched(false);
}


  });
},[]);

if(isFirstLaunch === null)
return null;
else if(isFirstLaunch === true){ 
return ( <NavigationContainer>
  <AppStack.Navigator screenOptions={{ headerShown: false}}>

    <AppStack.Screen name="Onboarding" component= {OnboardingScreen} />
    <AppStack.Screen name="Login"component ={LoginScreen} />



  </AppStack.Navigator>
</NavigationContainer>
);
}
else
return <LoginScreen/>;
  
} 
export default App;

*/