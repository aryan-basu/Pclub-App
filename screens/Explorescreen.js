/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Explorescreen = ({navigation}) => {
    return (
        <ScrollView>
        <View   style ={{marginTop:10}}>
            <Text style={styles.title2}>PROJECTS</Text>
           <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}onPress={()=>navigation.navigate('Ep1')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
            <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
             
            <View style={[styles.card, styles.elevation,{marginBottom:40}]}>
                <Text style={styles.cardtitle}>Pclub-Meet</Text>
                </View>
                
                <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>!answer</Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>PSoC</Text>
                </View>

            </ScrollView>
            
           

        </View>
        <View style={styles.container}>
          <Text style={styles.title2}>EVENTS</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}} onPress={()=>navigation.navigate('Ep2')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
          <View style={[styles.card2, styles.elevation,{marginTop:20}]}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:35,width:40,borderRadius:15,marginLeft:15,marginRight:15,marginTop:0,marginBottom:0}} source={require("../images/psoc-logo.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:7}}>PSoC</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.card2, styles.elevation]}>
                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:30,width:40,borderRadius:15,marginLeft:15,marginRight:15,marginTop:0,marginBottom:0}} source={require("../images/sfd.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:7}}>SFD</Text>
                </TouchableOpacity>
                </View>
                <View style={[styles.card2, styles.elevation,{marginBottom:40}]}>
                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:30,width:40,borderRadius:15,marginLeft:15,marginRight:15,marginTop:0,marginBottom:0}} source={require("../images/HackUiet.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:7}}>HACKUIET</Text>
                </TouchableOpacity>
                </View>
              

            </ScrollView>

          </View>
          <View style={styles.container}>
          <Text style={styles.title2}>SESSIONS</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}onPress={()=>navigation.navigate('Ep3')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
           
          <View style={[styles.card, styles.elevation,{marginBottom:40}]}>
                <Icon name="language-python" style={{marginLeft:5,color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>DJANGO</Text>
              
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Icon name="react" style={{marginLeft:5,color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>REACT</Text>
            
                
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Icon name="brain" style={{marginLeft:5,color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>ML</Text>
               </View>

            
            </ScrollView>
          </View>
          
          <View style={styles.container}>
          <Text style={styles.title2}>AI SATURDAY</Text>

          <Image style={[{height:200,width:360,borderRadius:15,marginLeft:15,marginRight:15,marginTop:15,marginBottom:10}]} source={require("../images/AIsaturday.jpg")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10,marginLeft:290}}onPress={()=>navigation.navigate('Ep4')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
           <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
           <View style={[styles.card2, styles.elevation,{marginTop:20}]}>
                <Text style={{fontFamily:"Montserrat_700Bold" ,marginLeft:15}}>Introduction to Neutral Network</Text>
              </View>
              <View style={[styles.card2, styles.elevation]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:15}}>Optimizing Neutral Network</Text>
                </View>
                <View style={[styles.card2, styles.elevation,{marginBottom:40}]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:15}}>Introduction to CNN</Text>
                </View>
              

            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title2}>RESEARCH FRIDAY</Text>
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:15,marginRight:15,marginTop:15,marginBottom:10}} source={require("../images/RF.png")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10,marginLeft:290}} onPress={()=>navigation.navigate('Ep5')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
          <View style={[styles.card2, styles.elevation]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:15}}>RESEARCH FRIDAY 1</Text>
             </View>
             <View style={[styles.card2, styles.elevation]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:15}}>RESEARCH FRIDAY 2</Text>
                </View>
                <View style={[styles.card2, styles.elevation,{marginBottom:40}]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:15}}>RESEARCH FRIDAY 3</Text>
                </View>
              

            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title2}>OUR TEAM</Text>
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:15,marginRight:15,marginTop:15,marginBottom:10}} source={require("../images/Psoc-bg.jpg")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10,marginLeft:295}} onPress={()=>navigation.navigate('Ep6')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:50}}>
          <View style={[styles.card, styles.elevation,{marginBottom:40}]}>
                <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>ASHWANI RATHEE</Text>
               </View>
               <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>ARYAN BASU</Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>RIK</Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>HARBANS SINGH</Text>
               </View>
               <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>KANISHK TYAGI</Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>MEGHNA THAKUR</Text>
               </View>
               <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>ABHIROOP SINGH</Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Text style={styles.cardtitle}>JATIN JAIN</Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
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
heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    textAlign:"center",
    fontSize: 22,

  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent:"center",
    width:240,
    height:140,
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    marginBottom:0,
  },
  card2:{
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent:"center",
    width:370,
    height:60,
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    marginBottom:5,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#000',
  },
  cardtitle:{
fontFamily:"Montserrat_700Bold",
color:"#000",

textAlign:"center",
fontSize:16,

  },
  title2: {
    fontFamily: "Montserrat_700Bold",
    marginTop: 0,
    marginLeft:20,
    marginTop:25,
    marginBottom:10,
    marginHorizontal: 10,
    fontSize: 22,

  },
});