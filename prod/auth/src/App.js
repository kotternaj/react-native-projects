import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyClY9Q_Pd-oYlPSE_WmOVFNLkjDB1-DUNY",
            authDomain: "authentication-2e79e.firebaseapp.com",
            databaseURL: "https://authentication-2e79e.firebaseio.com",
            projectId: "authentication-2e79e",
            storageBucket: "authentication-2e79e.appspot.com",
            messagingSenderId: "955523906005"
        });

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              this.setState({ loggedIn: true });
          } else {
              this.setState({ loggedIn: false });
          }
        });    
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
              return <Button>Log Out</Button>;
            case false:
              return <LoginForm />;
            default:
              return <Spinner size="large" />;
        }
    }

    render(){
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;

