import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
const LoginScreen = ({ navigation }) => {
    const [isAgency, setIsAgency] = useState(null);

    const handleSignup = () => {
        if (isAgency === null) {
       
          return;
        }
        navigation.navigate('Account Settings');
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your   PopX account</Text>
    

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full name" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone number</Text>
        <TextInput style={styles.input} placeholder="0123456789" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email address</Text>
        <TextInput style={styles.input} placeholder="Enter your Email address" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Company Name</Text>
        <TextInput style={styles.input} placeholder="Enter your Company Name" secureTextEntry />
      </View>
      <Text style={styles.subtitle}>Are you an agency ?</Text>
      <View style={styles.radioContainer}>
        <View style={styles.radioButton}>
          <RadioButton
            value="yes"
            status={isAgency === 'yes' ? 'checked' : 'unchecked'}
            onPress={() => setIsAgency('yes')}
          />
          <Text>Yes</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="no"
            status={isAgency === 'no' ? 'checked' : 'unchecked'}
            onPress={() => setIsAgency('no')}
          />
          <Text>No</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>Create Account</Text>
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
      marginRight:'46%'
    },
    subtitle: {
        fontSize: 15,
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
      height: 50,
      borderWidth: 1,
      borderColor: 'gray',
      paddingLeft: 10,
      borderRadius: 8,
    },
    button: {
      backgroundColor: '#7B68EE',
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
    radioContainer: {
        flexDirection: 'row',
        marginBottom: 15,
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
      },
});

export default LoginScreen;
