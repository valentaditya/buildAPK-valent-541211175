import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput,Button } from 'react-native';

export default function Logo() {
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.logo}
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
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  
});
