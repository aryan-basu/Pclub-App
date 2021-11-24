import React,{useEffect,useState} from "react";
import {View , Text, Button , StyleSheet,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Search = ({navigation}) => {
    const [searchTerm,setsearchTerm]=useState("");
    const articles=[];
    const [books, setBooks] = useState(null);
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
  <ScrollView style={styles.container}>
      <View style={{flexDirection:"row"}}>
    {/*      <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigation.navigate('Explore')}>  */}
    <Icon onPress={()=>navigation.navigate('Explore')} name="arrow-left" style={{marginTop:20,marginLeft:15,color:"#118b06",textAlign:"left"}} size={28} color="#118b06" />  
    <TouchableOpacity style={{flexDirection:"row", borderColor: "gray",
        width: "82%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop:15,
        marginLeft:15,
        marginBottom:10,
        backgroundColor:"white"}}>
   <AntDesign name="search1" style={{marginRight:20,color:"#666"}} size={22} color="#900" />
    <TextInput
        style={styles.input}
        placeholder='Search'
        onChangeText={(searchTerm) => setsearchTerm(searchTerm)}
        placeholderTextColor="#666"
      /></TouchableOpacity>
    
     </View>
  
     {/* display books from the API */}
     {books && ( 
         <ScrollView>
  {books.filter((val)=>{if(searchTerm===""){
              return val
          }else if(val.Title.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
          }
        }).map((book , index) => index<5&&(
          <TouchableOpacity key={index} style={[styles.card2,styles.elevation]} onPress={()=>navigation.navigate('article',{Name:book.Name,Title:book.Title,Description:book.Description,Email:book.Email})} >
          <Text style={styles.cardtitle}>{book.Title}</Text>
          <Text style={{  color: "#767676",
          fontFamily: "Montserrat_400Regular", marginLeft:10,marginBottom:14,marginTop:10,marginRight:1,justifyContent:"space-evenly"}} numberOfLines={6}>{book.Description}</Text>
            
  </TouchableOpacity>
          ))}
  </ScrollView>
      )}
  </ScrollView>
    );
};
export default Search;

const styles = StyleSheet.create ({
  
    container : {
     
    
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
        marginTop:20,
        marginRight:10,
        marginLeft:10,
      },
      cardtitle:{
        fontFamily:"Montserrat_700Bold",
        color:"#000",
        marginTop:16,
      marginLeft:10,
        fontSize:14,
        
              },
      card2:{
        backgroundColor: 'white',
        borderRadius: 10,

        width:370,
        height:190,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
      },
      elevation: {
        elevation: 20,
        shadowColor: '#000',
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
        height:160,
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
});