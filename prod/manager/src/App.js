import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
              <LoginForm />
            </Provider>
        );
    }
}

export default App;