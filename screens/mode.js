import auth from '@react-native-firebase/auth';
import React, {useContext,useState, useEffect } from 'react';

import LoginScreen from './LoginScreen';
import Signupscreen from './Signupscreen';
import Profilescreen from './Profilescreen';

const mode = ({navigation}) => {


    function register(email,password){
        auth().createUserWithEmailAndPassword(email,password).then(alert('created'));
    }
    




}


export default mode;