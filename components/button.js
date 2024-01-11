import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput,Button } from 'react-native';

export default function button() {
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <View style={{width: 300,height: 35,marginTop: 10,overflow: 'hidden', borderRadius: 20}}>
    <Button title="Login" color="#f1ca26" />
    </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
