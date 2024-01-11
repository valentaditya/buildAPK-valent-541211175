import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput,Button } from 'react-native';



const Login = ({ navigation }) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.logo}
      />
      <Text style={styles.textlogin}>Login Dahulu Sebelum Masuk</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.lupaPassword}>Lupa Password?</Text> 

      
      <View style={{width: 300,height: 35,marginTop: 10,overflow: 'hidden', borderRadius: 20}}>
    <Button title="Login" color="#f1ca26" onPress={() => navigation.navigate('Porto')}/>
    </View>


      <View style={styles.daftarContainer}>
        <Text style={styles.akun}>Tidak Punya Akun?</Text>
        <TouchableOpacity>
          <Text style={styles.daftar} onPress={() => navigation.navigate('Register')}> Daftar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Login;
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
  },
  
  // registerButton: {
  //   width: 300,
  //   height: 35,
  //   marginTop: 10,
  //   backgroundColor: '#f1ca26',
  //   borderRadius: 20,
  //   alignItems: 'center', 
  //   justifyContent: 'center',
  // },
  textlogin: {
    fontSize: 20,
    paddingBottom: 30,
    textAlign: 'center',
  },
  daftarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  akun: {
    marginTop: 10,
    color: 'black',
  },
  daftar: {
    marginTop: 10,
    color: '#f1ca26',
    fontWeight: 'bold',
  },
  lupaPassword: {
    // marginTop: 1,
    paddingRight:16,
    alignSelf: 'flex-end',
    color:'#f1ca26',
    
  },
});
