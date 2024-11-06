import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <TextInput 
        label="Username" 
        mode="outlined" 
        outlineColor="#B3A0E5"
        activeOutlineColor="#FAB12F"
        textColor="#333333"
        placeholderTextColor="#888888"
        style={styles.input} 
      />
      
      <TextInput 
        label="Email address" 
        mode="outlined" 
        outlineColor="#B3A0E5"
        activeOutlineColor="#FAB12F"
        textColor="#333333"
        placeholderTextColor="#888888"
        style={styles.input} 
      />
      
      <TextInput 
        label="Password" 
        mode="outlined" 
        secureTextEntry 
        outlineColor="#B3A0E5"
        activeOutlineColor="#FAB12F"
        textColor="#333333"
        placeholderTextColor="#888888"
        style={styles.input} 
      />
      
      <TextInput 
        label="Confirm password" 
        mode="outlined" 
        secureTextEntry 
        outlineColor="#B3A0E5"
        activeOutlineColor="#FAB12F"
        textColor="#333333"
        placeholderTextColor="#888888"
        style={styles.input} 
      />
      
      <Button 
        mode="contained" 
        style={styles.button} 
        onPress={() => {}}
        textColor="#FFFFFF"
        buttonColor="#FAB12F"
      >
        REGISTER
      </Button>
      
      <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FAB12F',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginTop: 10,
  },
  linkText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#FAB12F',
  },
});
