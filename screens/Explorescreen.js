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
        <View   style ={{marginTop:30}}>
            <Text style={styles.title}>PROJECTS</Text>
           <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}onPress={()=>navigation.navigate('Ep1')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
            <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
             
                <TouchableOpacity style={styles.card} >
                <Text style={styles.cardtitle}>Pclub-Meet</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>!answer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>PSoC</Text>
                </TouchableOpacity>

            </ScrollView>
            
           

        </View>
        <View style={styles.container}>
          <Text style={styles.title}>EVENTS</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}} onPress={()=>navigation.navigate('Ep2')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
                <Card>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:35,width:40,borderRadius:15,marginLeft:15,marginRight:15,marginTop:0,marginBottom:0}} source={require("../images/psoc-logo.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:7}}>PSoC</Text>
                </TouchableOpacity>
                </Card>
                <Card>
                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:30,width:40,borderRadius:15,marginLeft:15,marginRight:15,marginTop:0,marginBottom:0}} source={require("../images/sfd.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:7}}>SFD</Text>
                </TouchableOpacity>
                </Card>
                <Card>
                <TouchableOpacity style={{flexDirection:"row"}}>
                    <Image style={{height:30,width:40,borderRadius:15,marginLeft:15,marginRight:15,marginTop:0,marginBottom:0}} source={require("../images/hu1.png")}></Image>    
                <Text style={{fontFamily:"Montserrat_700Bold",textAlign:"center", marginTop:7}}>HACKUIET</Text>
                </TouchableOpacity>
                </Card>
              

            </ScrollView>

          </View>
          <View style={styles.container}>
          <Text style={styles.title}>SESSIONS</Text>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}onPress={()=>navigation.navigate('Ep3')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
           
                <TouchableOpacity style={styles.card}>
                <Icon name="language-python" style={{marginLeft:5,color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>DJANGO</Text>
              
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Icon name="react" style={{marginLeft:5,color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>REACT</Text>
            
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Icon name="brain" style={{marginLeft:5,color:"#118b06",textAlign:"center"}} size={32} color="#118b06" />
                <Text style={styles.cardtitle}>ML</Text>
                </TouchableOpacity>

            
            </ScrollView>
          </View>
          
          <View style={styles.container}>
          <Text style={styles.title}>AI SATURDAY</Text>

          <Image style={{height:200,width:360,borderRadius:15,marginLeft:15,marginRight:15,marginTop:15,marginBottom:10}} source={require("../images/AIsaturday.jpg")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}}onPress={()=>navigation.navigate('Ep4')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
           <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>Introduction to Neutral Network</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>Optimizing Neutral Network</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>Introduction to CNN</Text>
                </Card>
              

            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title}>RESEARCH FRIDAY</Text>
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:15,marginRight:15,marginTop:15,marginBottom:10}} source={require("../images/RF.png")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:290}} onPress={()=>navigation.navigate('Ep5')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}   Vertical={true}>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>RESEARCH FRIDAY 1</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>RESEARCH FRIDAY 2</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>RESEARCH FRIDAY 3</Text>
                </Card>
              

            </ScrollView>
          </View>
          <View style={styles.container}>
          <Text style={styles.title}>OUR TEAM</Text>
          <Image style={{height:200,width:360,borderRadius:15,marginLeft:15,marginRight:15,marginTop:15,marginBottom:10}} source={require("../images/Psoc-bg.jpg")}></Image>
          <TouchableOpacity style={{flexDirection:"row",marginLeft:295}} onPress={()=>navigation.navigate('Ep6')}>
            
           <Text style={{textAlign:"right",marginRight:5}}>View All</Text>
           <Icon name="chevron-right-circle" style={{marginLeft:5,color:"#118b06",textAlign:"right"}} size={22} color="#118b06" />
           </TouchableOpacity>
          <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true} style={{marginBottom:90}}>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>ASHWANI RATHEE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>ARYAN BASU</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>RIK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>HARBANS SINGH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>KANISHK TYAGI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>MEGHNA THAKUR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>ABHIROOP SINGH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>JATIN JAIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                <Text style={styles.cardtitle}>ADITI SANDHYAL</Text>
                </TouchableOpacity>

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