import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyClY9Q_Pd-oYlPSE_WmOVFNLkjDB1-DUNY",
            authDomain: "authentication-2e79e.firebaseapp.com",
            databaseURL: "https://authentication-2e79e.firebaseio.com",
            projectId: "authentication-2e79e",
            storageBucket: "authentication-2e79e.appspot.com",
            messagingSenderId: "955523906005"
          });
    
    }

    render(){
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <Text>I'm the new auth app!</Text>
            </View>
        );
    }
}

export default App;

