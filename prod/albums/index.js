// Index.ios.js

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => {
    return (
      <Text>Some Text</Text>
    );
};

// Render it to a device
AppRegistry.registerComponent('albums', () => App);

