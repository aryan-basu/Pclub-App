
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
import Upcoming from "./screens/Upcoming";
import Explorepage1 from "./screens/Explorepages/Explorepage1";
import Explorepage2 from "./screens/Explorepages/Explorepage2";
import Explorepage3 from "./screens/Explorepages/Explorepage3";
import Explorepage4 from "./screens/Explorepages/Explorepage4";
import Explorepage5 from "./screens/Explorepages/Explorepage5";
import Explorepage6 from "./screens/Explorepages/Explorepage6";
import WriteArticle from "./screens/WriteArticle";
import Article from "./screens/Article";
import Allarticles from "./screens/Allarticles";
import FlashMessage from "react-native-flash-message";
import Demo from "./screens/Demo";
import Sfd from "./screens/Sfd";
import Hackuiet from "./screens/Hackuiet";
import PsoC from "./screens/PsoC";
import Search from "./screens/Search";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
        
        //left: 20,
        //right:20,
        elevation: 0,
        backgroundColor: '#ffffff',
        height: hp(8),
        
        
      },
    }

    }

    >
      <Tab.Screen name="Home" component={Homescreen}
        options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center',top:1,flex:1}} >

            
<Octicons name="home" style={{color:focused ? '#118b06':'#767676',}} size={focused?28:25} color="#900" />
              
              <Text style={{color:focused ? '#118b06':'#767676',fontSize:12,fontFamily: "Montserrat_400Regular" }} > Home</Text>
            </View>
          
      
          )
        }}
      
      
      />
      <Tab.Screen name="Explore" component={Explorescreen} 
      options={{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center',top:1,flex:1}} >


<Icon name="star-outline" style={{color:focused ? '#118b06':'#767676',}} size={focused?31:29} color="#900" />
            
            <Text style={{color:focused ? '#118b06':'#767676',fontSize:12,fontFamily: "Montserrat_400Regular" }} > Explore</Text>
          </View>
        
    
        )
      }}
      
      />
       <Tab.Screen name="Upcoming" component={Upcoming}
      
      options={{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center',top:1,flex:1}} >

<Icon name="calendar-month-outline" style={{color:focused ? '#118b06':'#767676',}} size={focused?28:25} color="#900" />
          
            
            <Text style={{color:focused ? '#118b06':'#767676',fontSize:12,
      fontFamily: "Montserrat_400Regular" }} > Upcoming</Text>
          </View>
        
    
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profilescreen}
      
      options={{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center',top:1,flex:1}} >

<Icon name="account-outline" style={{color:focused ? '#118b06':'#767676',}} size={focused?28:25} color="#900" />
          
            
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
    <AppStack.Screen name="Ep1"component={Explorepage1}/>
    <AppStack.Screen name="Ep2"component={Explorepage2}/>
    <AppStack.Screen name="Ep3"component={Explorepage3}/>
    <AppStack.Screen name="Ep4"component={Explorepage4}/>
    <AppStack.Screen name="Ep5"component={Explorepage5}/>
    <AppStack.Screen name="Ep6"component={Explorepage6}/>
    <AppStack.Screen name="writearticle"component={WriteArticle}/>
    <AppStack.Screen name="article"component={Article}/>
    <AppStack.Screen name="allarticle"component={Allarticles}/>
    <AppStack.Screen name="demo"component={Demo}/>
    <AppStack.Screen name="sfd"component={Sfd}/>
    <AppStack.Screen name="hackuiet"component={Hackuiet}/>
    <AppStack.Screen name="psoc"component={PsoC}/>
    <AppStack.Screen name="search"component={Search}/>



  </AppStack.Navigator>
  <FlashMessage position="top" />
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