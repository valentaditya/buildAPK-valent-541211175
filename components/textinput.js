import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput,Button } from 'react-native';

export default function Login() {
  const [username, setUsername] = useState('');


  const handleLogin = () => {
    console.log('Username:', username);

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  
 
  textlogin: {
    fontSize: 20,
    paddingBottom: 30,
    textAlign: 'center',
  },
  
});
