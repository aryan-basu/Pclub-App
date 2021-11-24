import React from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity} from 'react-native';

const Demo = () => {

    return (
        <View>
        <ScrollView   showsHorizontalScrollIndicator={false}  horizontal={true}>
<View style={[styles.card, styles.elevation]}>
<TouchableOpacity>
          <Text style={styles.title}>Pclub-Meet</Text>
          
        </TouchableOpacity>
         
       
</View>
<View style={[styles.card, styles.elevation]}>
<TouchableOpacity>
          <Text style={styles.title}>!answer</Text>
          
        </TouchableOpacity>  

</View>
<View style={[styles.card, styles.elevation]}>
<TouchableOpacity>
          <Text style={styles.title}>PSoC</Text>
          
        </TouchableOpacity>
</View>
</ScrollView>
<View style={[styles.card2, styles.elevation]}>
<TouchableOpacity>
          <Text style={styles.title}>PSoC</Text>
          
        </TouchableOpacity>
</View>
</View>
    );
};
export default Demo;

const styles = StyleSheet.create ({
  
    container : {
     
     alignItems:'center',
     justifyContent:'center',
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
        marginTop:20,
        marginRight:10,
        marginLeft:10,
      },
      card2:{
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent:"center",
        width:370,
        height:190,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
      },
      elevation: {
        elevation: 40,
        shadowColor: '#32CD32',
      },
});