// In App.js in a new project

import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './compo/HomeScreen';
import Temperature from './compo/Temperature';
import Length from './compo/Length';
import Money from './compo/Money';
import Height from './compo/Height';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>                      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Length" component={Length} />
        <Stack.Screen name="Money" component={Money} />
        <Stack.Screen name="Height" component={Height} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;