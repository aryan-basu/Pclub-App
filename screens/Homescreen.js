/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity,Image,TouchableHighlight,ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Card,Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
import { color } from 'react-native-reanimated';
const Homescreen = ({navigation}) => {
  const articles=[];
  const [books, setBooks] = useState(null);
    const [searchTerm,setsearchTerm]=useState("");
const [rl,setrl]=useState("");
const [loader,setloader]=useState(true);
    useEffect(() => {
      getData();
  
      // we will use async/await to fetch this data
      async function getData() {
        const doc=await firestore().collection('image').doc('image1').get();
setrl(doc.data().url);
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
       await setBooks(articles) ;
      
       setloader(false)
      }
    
    }, []);

    return loader?(<View style={{justifyContent:"center",flex: 1,}}><ActivityIndicator size="large" color="#118b06" /></View>):(
        <View style ={{ backgroundColor: '#f5f5f5',marginBottom:hp(7)}}>
           
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{flexDirection:"row"}}>
             <Text style={styles.title}>POPULAR ARTICLES</Text>
             <AntDesign onPress={()=>navigation.navigate('search')} name="search1" style={{marginTop:hp('3%'),color:"#118b06",position:"absolute",right:wp(4)}} size={24} color="#118b06" />  
             </View>
             <TouchableOpacity style={{flexDirection:"row",marginLeft:wp('75%'),marginTop:hp('0.6%')}}onPress={()=>navigation.navigate('allarticle')}>
         
            <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
            <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
            </TouchableOpacity>
         
     
          

        <ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:hp(0.8),marginTop:hp(2)}}>
        <TouchableOpacity>
          <Image style={{height:hp(26),width:wp(86),borderRadius:15,marginLeft:hp(2),marginRight:hp(2.5)}}  source={require("../images/sql.png")}></Image></TouchableOpacity>
 
            
          
          <TouchableOpacity>
        
          <Image style={{height:hp(26),width:wp(92),borderRadius:15,marginLeft:hp(0),marginRight:hp(2)}} source={require("../images/interview.png")}></Image></TouchableOpacity>
 <TouchableOpacity>
          <Image style={{height:hp(26),width:wp(92),borderRadius:15,marginLeft:hp(2),marginRight:hp(2)}} source={require("../images/Django.jpg")}></Image>
          </TouchableOpacity>
  <TouchableOpacity>
          <Image style={{height:hp(26),width:wp(92),borderRadius:15,marginLeft:hp(2),marginRight:hp(2)}} source={require("../images/react.png")}></Image> 
</TouchableOpacity>
<TouchableOpacity>
         <Image style={{height:hp(26),width:wp(92),borderRadius:15,marginLeft:hp(2),marginRight:hp(2)}} source={require("../images/blockchain.png")}></Image> 
         </TouchableOpacity>
        </ScrollView>
       {/* display books from the API */}
       {books && ( 
         <ScrollView>
  {books.filter((val)=>{if(searchTerm===""){
              return val
          }else if(val.Title.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
          }
        }).map((book , index) => index<5&&(
          <TouchableOpacity key={index} style={[styles.card2,styles.elevation,]} onPress={()=>navigation.navigate('article',{Name:book.Name,Title:book.Title,Description:book.Description,Email:book.Email})} >
          <Text style={styles.cardtitle}>{book.Title}</Text>
          <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:wp(2),marginBottom:hp(1),marginTop:hp(1),marginRight:wp(1),justifyContent:"space-evenly"}} numberOfLines={6}>{book.Description}</Text>
            
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
        marginLeft:wp('7%'),
        marginTop:hp('2%'),
        fontSize: 22,
        marginBottom:hp('1%')
    
      },
   
    cardtitle:{
        fontFamily:"Montserrat_700Bold",
        color:"#000",
        marginTop:hp(2),
      marginLeft:wp(2),

        fontSize:14,
      marginRight:wp(1)  
              },

              card2:{
                backgroundColor: 'white',
                borderRadius: 10,
    
                width:wp(94),
                height:hp(24.5),
                marginTop:hp(4),
                marginRight:wp(2),
                marginLeft:wp(3),
              },
              elevation: {
                elevation: 20,
                shadowColor: '#000',
              },

});