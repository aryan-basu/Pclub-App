import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image,ActivityIndicator,Linking} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Explorepage6 = ({navigation}) => {
    const [loader,setloader]=useState(true);
    const articles=[];
    const [searchTerm,setsearchTerm]=useState("");
    const [books, setBooks] = useState(null);
    useEffect(() => {
        getData();

        // we will use async/await to fetch this data
        async function getData() {
          
           await firestore().collection('Teams').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                 // console.log(doc.data().email);
                   articles.push({Name:doc.data().name,Github:doc.data().github,LinkedIn:doc.data().linkedin,Email:doc.data().email});
                    //console.log(doc.id, " => ", doc.data().firstName);
                //  console.log(doc.data().id);
                });
               // console.log(maindata);
               // <CSVDownload data={maindata} target="_blank" />
              
              });
   //console.log(articles)
          // store the data into our books variable
          //console.log(maindata);
         setBooks(articles) ;
         setloader(false)
        
        }
      }, []);
    return loader?(<View style={{justifyContent:"center",flex: 1,}}><ActivityIndicator size="large" color="#118b06" /></View>):(
       <View>
<ScrollView>
<View style={{flexDirection:"row"}} >
    <Icon onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>OUR TEAM</Text> 
    
    </View>
    {books && ( 
         <ScrollView>
  {books.filter((val)=>{if(searchTerm===""){
              return val
          }else if(val.dish.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
          }
        }).map((book , index) => index<105&&( 
            <View key={index}>
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:40}]}>
        <Text style={styles.cardtitle}>{book.Name}</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    </View>
                ))}

                </ScrollView>
                    )}

  

    </ScrollView>
    </View>


    );
};
export default Explorepage6;

const styles = StyleSheet.create ({
  
    container :{
  
        
       // alignItems:'center',
      //  justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginLeft:20,
        marginTop:20,
        marginHorizontal: 10,
        fontSize: 22,
    
      },
      card:{
          marginTop:30,
          marginLeft:20,
          height:180,
          width:350,
          backgroundColor:"#fff",
          borderRadius:10,
          borderColor:"#118b06",
          borderWidth:2,
      },
      cardtitle:{
fontFamily:"Montserrat_700Bold",
color:"#118b06",
marginTop:hp(3),
textAlign:"center",
fontSize:14,

      },
      card2:{
        backgroundColor: 'white',
        borderRadius: 10,

        width:wp(91),
        height:hp(26),
        marginTop:hp(4),
        marginRight:wp(2),
        marginLeft:wp(4),
      },
      elevation: {
        elevation: 20,
        shadowColor: '#000',
      },
});