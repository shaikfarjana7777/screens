import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in to your  PopX account</Text>
    
      <Text style={styles.subtitle}>Lorem ipsum dollar sit amet consectutur adipiscing elit ,</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput style={styles.input} placeholder="Enter Email Address" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Account Settings');
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    marginRight:'36%'
  },
  subtitle: {
    fontSize: 18,
    marginRight: '36%',
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#c7c7ff',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignupScreen;
