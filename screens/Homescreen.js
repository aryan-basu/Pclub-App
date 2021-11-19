/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity,Image,TouchableHighlight} from 'react-native';

import { Card,Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Homescreen = ({navigation}) => {
    return (
        <View style ={{ backgroundColor: '#f5f5f5',marginBottom:80}}>
           
            <ScrollView>
             <Text style={styles.title}>POPULAR ARTICLES</Text>
          
             <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}>
         
            <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
            <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
            </TouchableOpacity>
         
     
          

        <ScrollView  showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:20,marginTop:20}}>
        <TouchableOpacity>
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:20,marginRight:10}} source={require("../images/sql.png")}></Image></TouchableOpacity>
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
      
       <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>Flipkart Interview</Text>
                <Text style={{  color: "#767676",
        fontFamily: "Montserrat_400Regular", marginLeft:10,marginBottom:14,marginTop:10,marginRight:1,justifyContent:"space-evenly"}} numberOfLines={4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak</Text>
              
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>Google SDE-I Interview Experience</Text>
                <Text style={{  color: "#767676",
        fontFamily: "Montserrat_400Regular", marginLeft:10,marginBottom:14,marginTop:10,marginRight:1,justifyContent:"space-evenly"}} numberOfLines={4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak</Text>
              
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>MySql important questions</Text>
                <Text style={{  color: "#767676",
        fontFamily: "Montserrat_400Regular", marginLeft:10,marginBottom:14,marginTop:10,marginRight:1,justifyContent:"space-evenly"}} numberOfLines={4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak</Text>
              
        </TouchableOpacity>
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
        height:140,
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
              }

});