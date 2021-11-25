/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View , Text, Button, StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Explorescreen = ({navigation}) => {
    return (
        <ScrollView>
        <View   style ={{marginTop:10}}>
            <Text style={styles.title2}>PROJECTS</Text>
           <TouchableOpacity style={{flexDirection:"row",marginLeft:wp(75)}}onPress={()=>navigation.navigate('Ep1')}>
            
           <Text style={{textAlign:"right",marginRight:wp(1.8)}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:wp(1.8),color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
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
       
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
          <View style={[styles.card2, styles.elevation,{marginTop:20}]}>
                    <TouchableOpacity style={{flexDirection:"row"}}onPress={()=>navigation.navigate('psoc')}>
                    <Image style={{height:hp(4),width:wp(9),borderRadius:15,marginLeft:wp(4.3),marginRight:wp(4.2),marginTop:0,marginBottom:0}} source={require("../images/psoc-logo.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:hp(1)}}>PSoC</Text>
                <AntDesign name="right" style={{marginLeft:wp(52),color:"#000",textAlign:"right",marginTop:hp(1)}} size={20} color="#118b06" />
                </TouchableOpacity>
                </View>
                <View style={[styles.card2, styles.elevation]}>
                <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('sfd')}>
                    <Image style={{height:hp(4),width:wp(9),borderRadius:15,marginLeft:wp(4.3),marginRight:wp(4.2),marginTop:0,marginBottom:0}} source={require("../images/sfd.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:hp(1)}}>SFD</Text>
                <AntDesign name="right" style={{marginLeft:wp(54),color:"#000",textAlign:"right",marginTop:hp(1)}} size={20} color="#118b06" />
                </TouchableOpacity>
                </View>
                <View style={[styles.card2, styles.elevation,{marginBottom:40}]}>
                <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('hackuiet')}>
                    <Image style={{height:hp(4),width:wp(9),borderRadius:15,marginLeft:wp(4.3),marginRight:wp(4.2),marginTop:0,marginBottom:0}} source={require("../images/HackUiet.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:hp(1)}}>HACKUIET</Text>
                <AntDesign name="right" style={{marginLeft:wp(42),color:"#000",marginTop:hp(1)}} size={20} color="#118b06" />
                </TouchableOpacity>
                </View>
              

            </ScrollView>

          </View>
          <View style={styles.container}>
          <Text style={styles.title2}>SESSIONS</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:wp(75)}}onPress={()=>navigation.navigate('Ep3')}>
            
           <Text style={{textAlign:"right",marginRight:wp(1.8)}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:wp(1.9),color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
           
          <View style={[styles.card, styles.elevation,{marginBottom:hp(5)}]}>
                <Icon name="language-python" style={{marginLeft:wp(1),color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>DJANGO</Text>
              
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Icon name="react" style={{marginLeft:wp(1),color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>REACT</Text>
            
                
                </View>
                <View style={[styles.card, styles.elevation]}>
                <Icon name="brain" style={{marginLeft:wp(1),color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>ML</Text>
               </View>

            
            </ScrollView>
          </View>
          
          <View style={styles.container}>
          <Text style={styles.title2}>AI SATURDAY</Text>

          <Image style={[{height:hp(28),width:wp(92),borderRadius:15,marginLeft:wp(3.5),marginRight:wp(3),marginTop:hp(2),marginBottom:hp(1)}]} source={require("../images/AIsaturday.jpg")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginTop:hp(1.5),marginLeft:wp(75)}}onPress={()=>navigation.navigate('Ep4')}>
            
           <Text style={{textAlign:"right",marginRight:wp(1.8)}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:wp(1.9),color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
           <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
           <View style={[styles.card2, styles.elevation,{marginTop:hp(4)}]}>
                <Text style={{fontFamily:"Montserrat_700Bold" ,marginLeft:wp(3.5)}}>Introduction to Neutral Network</Text>
             
              </View>
              <View style={[styles.card2, styles.elevation]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:wp(3.5)}}>Optimizing Neutral Network</Text>
                </View>
                <View style={[styles.card2, styles.elevation,{marginBottom:hp(5)}]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:wp(3.5)}}>Introduction to CNN</Text>
                </View>
              

            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title2}>RESEARCH FRIDAY</Text>
          <Image style={{height:hp(28),width:wp(92),borderRadius:15,marginLeft:wp(3.5),marginRight:wp(2),marginTop:hp(2),marginBottom:hp(1)}} source={require("../images/RF.png")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10,marginLeft:wp(75)}} onPress={()=>navigation.navigate('Ep5')}>
            
           <Text style={{textAlign:"right",marginRight:wp(1.8)}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:wp(1.9),color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
          <View style={[styles.card2, styles.elevation]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:wp(3.5)}}>RESEARCH FRIDAY 1</Text>
             </View>
             <View style={[styles.card2, styles.elevation]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:wp(3.5)}}>RESEARCH FRIDAY 2</Text>
                </View>
                <View style={[styles.card2, styles.elevation,{marginBottom:hp(5)}]}>
                <Text style={{fontFamily:"Montserrat_700Bold",marginLeft:wp(3.5)}}>RESEARCH FRIDAY 3</Text>
                </View>
              

            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title2}>OUR TEAM</Text>
          <Image style={{height:hp(28),width:wp(92),borderRadius:15,marginLeft:wp(3.5),marginRight:wp(2),marginTop:hp(2),marginBottom:hp(1)}} source={require("../images/Psoc-bg.jpg")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginTop:10,marginLeft:wp(75)}} onPress={()=>navigation.navigate('Ep6')}>
            
           <Text style={{textAlign:"right",marginRight:wp(1.8)}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:wp(1.9),color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:50}}>
          <View style={[styles.card, styles.elevation,{marginBottom:hp(6)}]}>
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
    width:wp(65),
    height:hp(20),
    marginTop:hp(3),
    marginRight:wp(5),
    marginLeft:wp(2),
    marginBottom:0,
  },
  card2:{
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent:"center",
    width:wp(93),
    height:hp(8),
    marginTop:hp(2),
    marginRight:wp(2),
    marginLeft:wp(3),
    marginBottom:hp(1),
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
    marginLeft:wp(4.5),
    marginTop:hp(2.5),
    marginBottom:hp(1.2),
    fontSize: 22,

  },
});