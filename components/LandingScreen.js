import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to PopX</Text>
        <Text style={styles.subtitle}>Lorem ipsum dollar sit amet </Text>
        <Text style={styles.subtitle}>consectutur adipiscing elit</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#7B68EE' }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#c7c7ff', marginTop: 10 }]}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={[styles.buttonText, { color: 'black' }]}>
          Already registered? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  content: {
    marginBottom: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: '36%',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginRight: '36%',
    color:'gray'
  },
  button: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LandingScreen;
