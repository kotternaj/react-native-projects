import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAa-4-CWjnr6HUwZbyRAWgiRu2Su66qRGQ",
            authDomain: "manager-ab40b.firebaseapp.com",
            databaseURL: "https://manager-ab40b.firebaseio.com",
            projectId: "manager-ab40b",
            storageBucket: "manager-ab40b.appspot.com",
            messagingSenderId: "526695477811"
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
             <View>
                 <Text>
                     Hello!!!
                 </Text>
             </View>
            </Provider>
        );
    }
}

export default App;