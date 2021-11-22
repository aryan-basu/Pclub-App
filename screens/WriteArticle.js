import React, { useState } from "react";
import {View , Text, Button , StyleSheet,TextInput,TouchableOpacity,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { showMessage, hideMessage } from "react-native-flash-message";
const WriteArticle = ({navigation}) => {
    async function Post(title,description)
    {
 //console.log(title);
 var user = auth().currentUser;
 if(user)
 {
     const data={
         Name:user.displayName,
         email:user.email,
         title:title,
         description:description
     }
     await firestore().collection('article').doc(`${title}${user.email}`).set(data)
      showMessage({
        message: "Posted",
        description: "Your Article is Posted!",
        type: "success",
        icon:"success",
      })
      await setTitle('');
      await setDescription('')
 }
    }
    const [title,setTitle]=useState();
    const [description,setDescription]=useState();
    let numOfLinesCompany = 0;
    return (
<View style={styles.container}>
<TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Profile')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>Write An Article</Text> 
    
    </TouchableOpacity>
    
    <TextInput style={{flexDirection:"row", borderColor: "gray",
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:"20%",
        marginLeft:"5%",
        marginRight:"5%",
        marginBottom:10,}}
        onChangeText={(title) => setTitle(title)}
        value={title}
        placeholder='Title'
        placeholderTextColor="#666"/>
     
    <TextInput
        placeholder='Description'
        multiline={true}
        numberOfLines={numOfLinesCompany}
        onContentSizeChange={(e) => {
            numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
        }}
        
        style={{flexDirection:"row", borderColor: "gray",
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:"5%",
        marginLeft:"5%",
        marginRight:"5%",
        marginBottom:10,}}
        onChangeText={(description) => setDescription(description)}
        textAlignVertical={'top'}
        value={description}
        
        placeholderTextColor="#666"
      />
  <Pressable style={styles.continue}   onPress={() => Post(title,description)} >
      <Text style={styles.skiptext}>Post</Text>
    </Pressable>

</View>

    );
};
export default WriteArticle;

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
         fontSize: 22,
     
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
       continue:{
        backgroundColor:"#118b06",
        borderColor:"#118b06",
        //marginTop:20,
        //marginTop:h * 0.09,
        marginTop:10,
        borderWidth:2,
        marginBottom:10,
    borderRadius:10,
    marginLeft:14,
    marginRight:14
      },
       cardtitle:{
 fontFamily:"Montserrat_700Bold",
 color:"#000",
 marginTop:16,
 textAlign:"center",
 fontSize:14,
 
       },
    input:{
height:"60%",

       },
       skiptext:{
        color:"#FFF",
        fontFamily: "Montserrat_400Regular",
        
            fontSize: 16,
          
            
            textAlign: 'center',
        
        paddingTop:10,
        paddingBottom:10
        
          },
});