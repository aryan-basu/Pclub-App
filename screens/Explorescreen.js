/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Explorescreen = ({navigation}) => {
    return (
        <ScrollView>
        <View   style ={{marginTop:30}}>
            <Text style={styles.title}>PROJECTS</Text>
           <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
            <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
             
                <View style={styles.card}>
                <Text style={styles.cardtitle}>Pclub-Meet</Text>
                </View>
                
                <View style={styles.card}>
                <Text style={styles.cardtitle}>!answer</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>PSoC</Text>
                </View>

            </ScrollView>
            
           

        </View>
        <View style={styles.container}>
          <Text style={styles.title}>EVENTS</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>PSoC</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SFD</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>HACKUIET</Text>
                </Card>
              

            </ScrollView>

          </View>
          <View style={styles.container}>
          <Text style={styles.title}>SESSIONS</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
           
                <View style={styles.card}>
                <Text style={styles.cardtitle}>DJANGO</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>REACT</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>ML</Text>
                </View>

            
            </ScrollView>
          </View>
          
          <View style={styles.container}>
          <Text style={styles.title}>AI SATURDAY</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
          <ScrollView style={{marginLeft:0}}>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>DJANGO</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>REACT</Text>
                </View>
                
                </ScrollView>
                <ScrollView style={{marginLeft:20}}>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>DJANGO</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>REACT</Text>
                </View>
                </ScrollView>
                <ScrollView style={{marginLeft:20}}>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>DJANGO</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>REACT</Text>
                </View>
                </ScrollView>
            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title}>RESEARCH FRIDAY</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>PSoC</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SFD</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>HACKUIET</Text>
                </Card>
              

            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title}>OUR TEAM</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:90}}>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>ASHWANI RATHEE</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>ARYAN BASU</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>RIK</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>HARBANS SINGH</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>KANISHK TYAGI</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>MEGHNA THAKUR</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>ABHIROOP SINGH</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>JATIN JAIN</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.cardtitle}>ADITI SANDHYAL</Text>
                </View>

            </ScrollView>
          </View>
          </ScrollView>
      
    );
};

export default Explorescreen;
const styles = StyleSheet.create({

    container :{
        flex:1,
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
      cardtitle:{
fontFamily:"Montserrat_700Bold",
color:"#000",
marginTop:16,
textAlign:"center",
fontSize:14,

      },

});