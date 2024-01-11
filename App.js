import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './form/login'
import Register from './form/register'
import Porto from './form/main.js'
import Logo from './components/logo'
import Tombol from './components/button'
import TextInputt from './components/textinput'
import TextInputPassword from './components/textinputpassword'

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer> 

       <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Porto" component={Porto} />
      
      </Stack.Navigator>
        
      </NavigationContainer> 
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});

