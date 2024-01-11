import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, ScrollView ,TouchableOpacity} from 'react-native';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here, e.g., make an API request to create a new user.
    // For this example, we'll simply log the user's information to the console.
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.logo}
      />

      <Text style={styles.textregister}>Register Dahulu Sebelum Masuk</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <View style={{width: 300,height: 35,marginTop: 10,overflow: 'hidden', borderRadius: 20}}>
    <Button title="DAFTAR" color="#f1ca26" onPress={() => navigation.navigate('Porto')} />
    </View>
      <View style={styles.daftarContainer}>
        <Text style={styles.akun}>Sudah Ada Akun?</Text>
        <TouchableOpacity>
        <Text style={styles.login} onPress={() => navigation.navigate('Login')}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

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
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    marginTop: 10,
  },
  textregister: {
    fontSize: 20,
    paddingBottom: 30,
    textAlign: 'center', 
   
  },
  // registerButton: {
  //   width: 300,
  //   height: 35,
  //   marginTop: 32,
  //   backgroundColor: '#f1ca26',
  //   borderRadius: 20,
  //   alignItems: 'center', 
  //   justifyContent: 'center',
  // },
  daftarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  akun: {
    marginTop:10,
    color: 'Black', 
  },
  login: {
    marginTop:10,
    color: '#f1ca26', 
    opacity:100,
    fontWeight:'bold',
  },
});


