
import React, { useEffect } from "react";
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';


import Onboardingscreen from "./screens/Onboardingscreen";
import LoginScreen from "./screens/LoginScreen";
import Signupscreen from "./screens/Signupscreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppStack = createStackNavigator();
const App = () => {


return ( <NavigationContainer>
  <AppStack.Navigator screenOptions={{ headerShown: false}}>

    <AppStack.Screen name="Onboarding" component= {Onboardingscreen} />
    <AppStack.Screen name="Login"component ={LoginScreen} />
    <AppStack.Screen name="Signup" component= {Signupscreen} />




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