import React, { useEffect, useState } from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Article = ({route,navigation}) => {
const [name,SetName]=useState('');
const [title,SetTitle]=useState('');
const [description,SetDescription]=useState('');
const [email,SetEmail]=useState('');
    useEffect(() => {
       /* const name = route.params.Name;
        const title=route.params.Title;
        const description=route.params.Description;
        const email=route.params.Email
        
        
        console.log(name)
        console.log(title)
        console.log(description)
        console.log(email)   */

        SetDescription(route.params.Description)
        SetEmail(route.params.Email);
        SetName(route.params.Name);
        SetTitle(route.params.Title);
       
        
    }, []);
    return (
<View style={styles.container}>
    <ScrollView>
<TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Home')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
   
    
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text> 
    <Text style={{marginTop:20,fontFamily: "Montserrat__400Regular",color:'#767676',marginLeft:15,marginRight:10,fontSize:20}}>{description}</Text>

    <Text style={{marginTop:20,fontFamily: "Montserrat_700Bold",color:'#767676',marginLeft:15,marginRight:10,fontSize:18}}>ARTICLE CONTRIBUTED BY:</Text>

    <View style={{flexDirection:"row",marginBottom:20}}>
    <Icon name="account-circle" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={58} color="#118b06" />
    <View>
    <Text style={{marginTop:20,fontFamily: "Montserrat_700Bold",color:'#767676',marginLeft:15,marginRight:10,fontSize:20}}>{name}</Text>
    <Text style={{marginTop:10,fontFamily: "Montserrat__400Regular",color:'#767676',marginLeft:15,marginRight:10,fontSize:14}}>{email}</Text>
    </View>
    </View>
 
    </ScrollView>
</View>

    );
};
export default Article;

const styles = StyleSheet.create ({
  
    container :{
       
        // alignItems:'center',
       //  justifyContent: 'center',
         backgroundColor: '#f5f5f5',
     },
     title: {
         fontFamily: "Montserrat_700Bold",
         marginTop: 0,
         marginLeft:20,
         marginTop:20,
         marginHorizontal: 10,
         fontSize: 24,
     
       },
       card:{
           marginTop:15,
           marginLeft:10,
           height:80,
           width:120,
           backgroundColor:"#fff",
           borderRadius:10,
           borderColor:"#118b06",
           borderWidth:2,
       },
       cardtitle:{
 fontFamily:"Montserrat_700Bold",
 color:"#000",
 marginTop:16,
 textAlign:"center",
 fontSize:14,
 
       },
});