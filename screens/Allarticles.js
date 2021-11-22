import React,{useEffect,useState} from "react";
import {View , Text, Button , StyleSheet,TouchableOpacity,Images,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Allarticles = ({navigation}) => {
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
<View style={styles.container}>
    <ScrollView>
    <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Home')}>
    <Icon name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"right"}} size={28} color="#118b06" />
    <Text style={styles.title}>Popular Articles</Text> 
    </TouchableOpacity>
    {books && ( 
         <ScrollView>
  {books.filter((val)=>{if(searchTerm===""){
              return val
          }else if(val.dish.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
          }
        }).map((book , index) => index<105&&(
          <TouchableOpacity key={index} style={styles.card} onPress={()=>navigation.navigate('article',{Name:book.Name,Title:book.Title,Description:book.Description,Email:book.Email})} >
          <Text style={styles.cardtitle}>{book.Title}</Text>
          <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:10,marginBottom:5,marginTop:10,marginRight:1,justifyContent:"space-evenly"}} numberOfLines={4}>{book.Description}</Text>
             <View style={{flexDirection:"row"}}>
               <Icon name="account-circle" style={{marginTop:10,marginLeft:15,color:"#118b06",textAlign:"left"}} size={28} color="#118b06" />
  <Text style={{marginTop:14,fontFamily: "Montserrat_700Bold",color:'#000',marginLeft:10,marginRight:10,fontSize:15}}>{book.Name}</Text>
  </View>
  </TouchableOpacity>
          ))}
  </ScrollView>
      )}
    </ScrollView>
</View>

    );
};
export default Allarticles;

const styles = StyleSheet.create ({
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
        height:185,
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