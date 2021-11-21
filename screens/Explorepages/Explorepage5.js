import React from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity} from 'react-native';
import { Card } from "react-native-elements/dist/card/Card";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Explorepage5 = ({navigation}) => {

    return (
<View style={styles.container}>
<TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>RESEARCH FRIDAY</Text> 
    
    </TouchableOpacity>
   
    <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SESSION 1</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SESSION 2</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SESSION 3</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SESSION 4</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SESSION 5</Text>
                </Card>
                <Card>
                <Text style={{fontFamily:"Montserrat_700Bold"}}>SESSION 6</Text>
                </Card>
</View>

    );
};
export default Explorepage5;

const styles = StyleSheet.create ({
  
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