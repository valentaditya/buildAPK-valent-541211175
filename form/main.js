import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function Main() {
  const [likes1, setLikes1] = useState(0);
  const [dislikes1, setDislikes1] = useState(0);

  const handleLike1 = () => {
    setLikes1(likes1 + 100000);
  };

  const handleDislike1 = () => {
    setDislikes1(dislikes1 + 100);
  };
  const formatLikes1 = (likes1) => {
    
    if (likes1 >= 1000000000) {
      return (likes1 / 1000000000).toFixed(1) + 'B';
    }else if (likes1 >= 1000000) {
      return (likes1 / 1000000).toFixed(1) + 'M';
    }else if (likes1 >= 1000) {
      return (likes1 / 1000).toFixed(1) + 'K';
    }else {
      return likes1.toString();
    }
    
  };
  const formatDislikes1 = (dislikes1) => {
    if (dislikes1 >= 1000) {
      return (dislikes1 / 1000).toFixed(1) + 'K';
    } else {
      return dislikes1.toString();
    }
  };
  const [likes2, setLikes2] = useState(0);
  const [dislikes2, setDislikes2] = useState(0);

  const handleLike2 = () => {
    setLikes2(likes2 + 1);
  };

  const handleDislike2 = () => {
    setDislikes2(dislikes2 + 1);
  };

  const [likes3, setLikes3] = useState(0);
  const [dislikes3, setDislikes3] = useState(0);

  const handleLike3 = () => {
    setLikes3(likes3 + 1);
  };

  const handleDislike3 = () => {
    setDislikes3(dislikes3 + 1);
  };

  const [likes4, setLikes4] = useState(0);
  const [dislikes4, setDislikes4] = useState(0);

  const handleLike4 = () => {
    setLikes4(likes4 + 1);
  };

  const handleDislike4 = () => {
    setDislikes4(dislikes4 + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../assets/foto_valent.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.Nama}>Valent Aditya Hermanus</Text>
        <Text style={styles.Isi}>Web Developer & Mobile Developer</Text>



        {/* Logo di atas kotak "Tentang" */}
        <View style={styles.barislogo}>
        <Image
          source={require('../assets/logo_discord.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('../assets/logo_instagram.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('../assets/logo_github.png')}
          style={styles.logoImage}
        />
        <Image
          source={require('../assets/logo_telegram.png')}
          style={styles.logoImage}
        />
        </View>

        
        

        {/* Kotak "Tentang" */}
        <View style={styles.aboutBox}>
          <Text style={styles.aboutTitle}>Tentang</Text>
          <Text style={styles.aboutText}>Saya dari Indonesia, dan saya bersekolah di SMK Telkom Purwokerto selama 3 tahun. Saya belajar dan memahami UI/UX, Mobile Developer (Android), tidak hanya itu saya diajarkan Web Developer.</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kontak Saya</Text>
        </TouchableOpacity>




        {/* Form My projek */}
        <Text style={styles.skill}>Projek Saya</Text>

        {/* Diginet */}
        <Text style={styles.skillName}>1. Diginet Media (Website)</Text>
        <Image
          source={require('../assets/diginet.jpg')}
          style={styles.skillImageDiginet}
          
        />

        <View style={styles.rowtextlike}>
        <Text style={styles.textlike}>suka: {formatLikes1(likes1)}</Text>
        <Text style={styles.textdislike}>tidak suka: {formatDislikes1(dislikes1)}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <View style={{width: 60,height: 35,marginTop: 10,overflow: 'hidden',borderRadius: 8, marginRight: 5}}>
          <Button title="Like" onPress={handleLike1} color="#f1ca26"/>
          </View>
          <View style={{width: 70,height: 35,marginTop: 10,overflow: 'hidden',borderRadius: 8, marginLeft: 5}}>
          <Button title="Dislike" onPress={handleDislike1} color="#f1ca26"/>
          </View>
        </View>


        {/* Damkar" */}
        <Text style={styles.skillName}>2. Damkar Yogyakarta (Website)</Text>
        <Image
          source={require('../assets/damkar.png')}
          style={styles.skillImage}
        />

        <View style={styles.rowtextlike}>
        <Text style={styles.textlike}>suka: {likes2}</Text>
        <Text style={styles.textdislike}>tidak suka: {dislikes2}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <View style={{width: 60,height: 35,marginTop: 10,overflow: 'hidden',borderRadius: 8, marginRight: 5}}>
          <Button title="Like" onPress={handleLike2} color="#f1ca26"/>
          </View>
          <View style={{width: 70,height: 35,marginTop: 10,overflow: 'hidden',borderRadius: 8, marginLeft: 5}}>
          <Button title="Dislike" onPress={handleDislike2} color="#f1ca26"/>
          </View>
        </View>


        {/* Bontang */}
        <Text style={styles.skillName}>3. Bontang (Android)</Text>
        <Image
          source={require('../assets/bontang.png')}
          style={styles.skillImageandroid}
        />

        <View style={styles.rowtextlike}>
        <Text style={styles.textlike}>suka: {likes3}</Text>
        <Text style={styles.textdislike}>tidak suka: {dislikes3}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <View style={{width: 60,height: 35,marginTop: 10,overflow: 'hidden', borderRadius: 8, marginRight: 5}}>
          <Button title="Like" onPress={handleLike3} color="#f1ca26"/>
          </View>
          <View style={{width: 70,height: 35,marginTop: 10,overflow: 'hidden', borderRadius: 8, marginLeft: 5}}>
          <Button title="Dislike" onPress={handleDislike3} color="#f1ca26"/>
          </View>
          
        </View>


        {/* Tourguide" */}
        <Text style={styles.skillName}>4. GoBuddies/Tourguide (Android)</Text>
        <Image
          source={require('../assets/tourguide.png')}
          style={styles.skillImageandroid}
        />
        <View style={styles.rowtextlike}>
        <Text style={styles.textlike}>suka: {likes4}</Text>
        <Text style={styles.textdislike}>tidak suka: {dislikes4}</Text>
        </View>
        
        <View style={styles.buttonGroup}>
         <View style={{width: 60,height: 35,marginTop: 10,overflow: 'hidden', borderRadius: 8, marginRight: 5}}>
          <Button title="Like" onPress={handleLike4} color="#f1ca26"/>
          </View>
          <View style={{width: 70,height: 35,marginTop: 10,overflow: 'hidden',borderRadius: 8, marginLeft: 5}}>
          <Button title="Dislike" onPress={handleDislike4} color="#f1ca26"/>
          </View>
        </View>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Nama: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
  },
  Isi: {
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  button: {
    backgroundColor: '#f1ca26',
    padding: 16,
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  skill: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  skillName: {
    marginTop: 20,
    fontSize: 18,
  },
  skillImage: {
    width: 320,
    height: 310,
    borderRadius: 12,
    alignSelf: 'center',
    margin: 10,
    borderColor: 'white',
    borderWidth: 40,
    
  },
  skillImageDiginet: {
    width: 670,
    height: 510,
    borderRadius: 12,
    alignSelf: 'center',
    margin: 10,
    borderColor: 'white',
    borderWidth: 40,
    
  },
  skillImageandroid: {
    width: 320,
    height: 700,
    borderRadius: 12,
    alignSelf: 'center',
    margin: 10,
    borderColor: 'white',
    borderWidth: 40,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    margin: 20,
    borderColor: 'black',
    borderWidth: 4,
  },
  logoImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    margin: 10,
    
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#F9F9F9',
    paddingBottom: 30,
    borderBottomWidth: 4,
    borderBottomColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    marginVertical: -100,
    marginLeft:-25,
    width: 320,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutBox: {
    backgroundColor: '#A0A0A0', // Warna latar belakang kotak "Tentang"
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  aboutText: {
    fontSize: 16,
  },
  barislogo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textlike:{
    fontSize:20,
    left:10,
    paddingBottom :30
  },
  textdislike:{
    fontSize:20,
    paddingBottom :30,
   position:'absolute',
   right:2,
  },
  rowtextlike:{
    flexDirection: 'row',
    
   
   
  }
});
