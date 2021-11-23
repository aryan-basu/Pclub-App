/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity,Image,TouchableHighlight} from 'react-native';

import { Card,Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
const Homescreen = ({navigation}) => {
  const articles=[];
  const [books, setBooks] = useState(null);
    const [searchTerm,setsearchTerm]=useState("");


    useEffect(() => {
      getData();
  
      // we will use async/await to fetch this data
      async function getData() {
        
         await firestore().collection('article').get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
               // console.log(doc.data().email);
                 articles.push({Title:doc.data().title,Description:doc.data().description,Name:doc.data().Name,Email:doc.data().email});
                  //console.log(doc.id, " => ", doc.data().firstName);
                
              });
             // console.log(maindata);
             // <CSVDownload data={maindata} target="_blank" />
            
            });
 //console.log(articles)
        // store the data into our books variable
        //console.log(maindata);
       setBooks(articles) ;
      
      
      }
    }, []);

    return (
        <View style ={{ backgroundColor: '#f5f5f5',marginBottom:80}}>
           
            <ScrollView>
             <Text style={styles.title}>POPULAR ARTICLES</Text>
          
             <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}onPress={()=>navigation.navigate('allarticle')}>
         
            <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
            <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
            </TouchableOpacity>
         
     
          

        <ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:20,marginTop:20}}>
        <TouchableOpacity>
          <Image style={{height:200,width:370,borderRadius:15,marginLeft:20,marginRight:10}} source={require("../images/sql.png")}></Image></TouchableOpacity>
          <TouchableOpacity>
        
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:10,marginRight:20}} source={require("../images/interview.png")}></Image></TouchableOpacity>
 <TouchableOpacity>
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:10,marginRight:20}} source={require("../images/Django.jpg")}></Image>
          </TouchableOpacity>
  <TouchableOpacity>
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:10,marginRight:20}} source={require("../images/react.png")}></Image> 
</TouchableOpacity>
<TouchableOpacity>
         <Image style={{height:200,width:360,borderRadius:15,marginLeft:10,marginRight:20}} source={require("../images/blockchain.png")}></Image> 
         </TouchableOpacity>
        </ScrollView>
       {/* display books from the API */}
       {books && ( 
         <ScrollView>
  {books.filter((val)=>{if(searchTerm===""){
              return val
          }else if(val.dish.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
          }
        }).map((book , index) => index<5&&(
          <TouchableOpacity key={index} style={[styles.card2,styles.elevation]} onPress={()=>navigation.navigate('article',{Name:book.Name,Title:book.Title,Description:book.Description,Email:book.Email})} >
          <Text style={styles.cardtitle}>{book.Title}</Text>
          <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:10,marginBottom:14,marginTop:10,marginRight:1,justifyContent:"space-evenly"}} numberOfLines={6}>{book.Description}</Text>
            
  </TouchableOpacity>
          ))}
  </ScrollView>
      )}

      </ScrollView>
      
        </View>
    );
};

export default Homescreen;
const styles = StyleSheet.create({

    container :{
        flex:1,
        
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginTop: 0,
        marginLeft:20,
        marginTop:20,
        marginHorizontal: 10,
        fontSize: 22,
        marginBottom:10
    
      },
      card:{
        marginTop:15,
        marginLeft:20,
        height:160,
        width:350,
        backgroundColor:"#fff",
        borderRadius:10,
        borderColor:"#118b06",
        borderWidth:2,
    },
    text: {
        color: "#767676",
        fontFamily: "Montserrat_400Regular",
        marginTop: 10,
        marginBottom:10,
        fontSize: 19,
        lineHeight: 24,
        marginLeft: 10,
       
      },
    cardtitle:{
        fontFamily:"Montserrat_700Bold",
        color:"#000",
        marginTop:16,
      marginLeft:10,
        fontSize:14,
        
              },
              img:{
height:200,
width:470,
borderRadius:15,
              },
              card2:{
                backgroundColor: 'white',
                borderRadius: 10,
    
                width:370,
                height:190,
                marginTop:20,
                marginRight:10,
                marginLeft:10,
              },
              elevation: {
                elevation: 20,
                shadowColor: '#000',
              },

});