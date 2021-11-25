import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Explorepage6 = ({navigation}) => {

    return (
       <View>
<ScrollView>
<View style={{flexDirection:"row"}} >
    <Icon onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>OUR TEAM</Text> 
    
    </View>
    
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginTop:40}]}>
        <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
   
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ASHWANI RATHEE</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ARYAN BASU</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>RIK</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>HARBANS SINGH</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>MEGHNA THAKUR</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>KANISHK TYAGI</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>GURIKA</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ADITI SANDHYAL</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>NITIN</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>PRIYANSHI</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>SHUBHAM</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>ABHIROOP SINGH</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>JATIN JAIN</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>RITVIK</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>AMRINDER KAUR</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation]}>
        <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card2,styles.elevation,{marginBottom:hp(6)}]}>
        <Text style={styles.cardtitle}>GURNAMEH SINGH</Text>
        <Text style={styles.cardtitle}>Core Team Member</Text>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:hp(1)}}>
        <FontAwesome name="envelope-square" style={{marginTop:hp(2.7),marginLeft:0,color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="github-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06"}} size={38} color="#118b06" />
        <FontAwesome name="linkedin-square" style={{marginTop:hp(2.7),marginLeft:wp(2),color:"#118b06",}} size={38} color="#118b06" />
        </View>
        
    </TouchableOpacity>

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