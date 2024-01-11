import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput,Button } from 'react-native';

export default function TextInputPassword() {

  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Password:', password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
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
