import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function Main() {
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);

  const Handleslike = () => {
    setLikes(Likes + 1);
  };

  const Handledislike = () => {
      setDislikes(Dislikes - 1);
    
  };

  const [Likes2, setLikes2] = useState(0);
  const [Dislikes2, setDislikes2] = useState(0);

  const Handleslike2 = () => {
    setLikes2(Likes2 + 1);
  };

  const Handledislike2 = () => {
      setDislikes2(Dislikes2 - 1);
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Data Diri</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../assets/foto_valent.jpg')}
          style={{ width: 200, height: 200, left: 76, borderRadius: 20 }}
        />
        <Text style={styles.Nama}>Valent Aditya Hermanus</Text>
        <Text style={styles.Isi}>Hi, saya valent dari SMK TELKOM PURWOKERTO</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kontak Saya</Text>
        </TouchableOpacity>
        <Text style={styles.skill}>My Skills</Text>
        <Text style={styles.web}>1. Web Developer</Text>
        <Image
          source={require('../assets/web.jpg')}
          style={{ width: 320, height: 310, borderRadius: 12, left: 25, marginTop: 30 }}
        />
        <Text>Total Like : {Likes + Dislikes}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title="Like" onPress={Handleslike} />
          
          <Button title="Dislike" onPress={Handledislike} />
       
        </View>
        
        <Text style={styles.web}>2. Android Developer</Text>
        <Image
          source={require('../assets/logoandroid.png')}
          style={{ width: 320, height: 310, borderRadius: 12, left: 25, marginTop: 30 }}
        />
       
        
        <Text> Total Like : {Likes2 + Dislikes2} </Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title="Like" onPress={Handleslike2} />
          
          <Button title="Dislike" onPress={Handledislike2} />
       
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Nama: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    fontWeight: 'bold',
    fontSize: 25,
    left: 20,
  },
  Isi: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    fontSize: 15,
    left: 56,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 100,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A084E8',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 70,
    width: 210,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  skill: {
    marginTop: 120,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  web: {
    marginTop: 60,
    fontSize: 18,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f1ca26',
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginTop: -100,
    marginLeft: -20,
    marginRight: -20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
