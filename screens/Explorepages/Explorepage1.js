import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Image,ScrollView,ActivityIndicator,Linking} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Explorepage1 = ({navigation}) => {
  const [loader,setloader]=useState(true);
    const articles=[];
    const [searchTerm,setsearchTerm]=useState("");
    const [books, setBooks] = useState(null);
    useEffect(() => {
        getData();

        // we will use async/await to fetch this data
        async function getData() {
          
           await firestore().collection('Project').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                 // console.log(doc.data().email);
                   articles.push({Title:doc.data().name,descriptions:doc.data().descriptions,github:doc.data().github});
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
        <ScrollView>
<View style={styles.container}>
    <View style={{flexDirection:"row"}} >
    <Icon onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:hp(3),marginLeft:wp(3),color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>Project</Text> 
    
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
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:20}]}>
        <Text style={styles.cardtitle}>{book.Title}</Text>
        <Text style={{fontFamily:"Montserrat_400Regular",
color:"#767676",
marginTop:hp(2),
textAlign:"center",marginLeft:wp(2),marginRight:wp(2),
fontSize:14,}}>{book.descriptions}</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(12)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.6),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.6),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.6),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    </View>
                ))}

                </ScrollView>
                    )}
    
              
                
             {/*   <Image style={{height:350,width:380,marginTop:40,marginLeft:10,justifyContent:"center"}} source={require("../../images/NotFound.png")}></Image>  */}
               
</View>
</ScrollView>

    );
};
export default Explorepage1;

const styles = StyleSheet.create ({
  
    container :{
        
       // alignItems:'center',
      //  justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginLeft:wp(4),
        marginTop:hp(2.9),
        fontSize: 22,
    
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

        width:wp(92),
        height:hp(40),
        marginTop:hp(7),
        marginRight:wp(1),
        marginLeft:wp(4),
      },
      elevation: {
        elevation: 20,
        shadowColor: '#000',
      },

});