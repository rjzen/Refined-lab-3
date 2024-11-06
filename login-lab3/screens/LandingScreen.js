import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Siah's Vlog</Text>
      <Text style={styles.subtitle}>Login to know me, my love.</Text>
      <Button 
        mode="contained" 
        buttonColor="#FA812F"
        style={styles.button} 
        onPress={() => navigation.navigate('Login')}
      >
        LOGIN
      </Button>
      
      <Button 
        mode="outlined" 
        textColor="#FA812F"
        style={styles.button} 
        onPress={() => navigation.navigate('Register')}
      >
        SIGN UP
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FAB12F',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FAB12F',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
});
