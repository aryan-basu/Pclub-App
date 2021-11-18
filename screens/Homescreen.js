/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View , Text, Button, StyleSheet} from 'react-native';

const Homescreen = ({navigation}) => {
    return (
        <View style ={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Click Here" onPress={() => alert('Button Clicked')} />

        </View>
    );
};

export default Homescreen;
const styles = StyleSheet.create({

    container :{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

});