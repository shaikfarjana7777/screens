import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/profile2.jpg')}
          style={styles.profileLogo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.emailText}>johndoe@example.com</Text>
        </View>
      </View>
      <Text style={styles.additionalText}>Lorem ipsum dollar sit amet consectutur adipiscing elit sed niam nonumi Eirmod tempr invidue ut labore et dolore atna delikuyam Erat sed diam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    backgroundColor: '#ebebff',
    padding: 20, 
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    color: 'gray',
  },
  additionalText: {
    fontSize: 17,
    marginTop: 10,
  },
});

export default ProfileScreen;
