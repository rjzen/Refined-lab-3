import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Checkbox, Dialog, Portal, Paragraph } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("First enter your email");
  const [email, setEmail] = useState("");

  const showForgotPasswordDialog = () => {
    if (email.trim() === "") {
      setDialogMessage("First enter your email");
    } else {
      setDialogMessage("Your password has been sent to your email");
    }
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      
      <TextInput 
        label="Username" 
        mode="outlined" 
        outlineColor="#B3A0E5"
        activeOutlineColor="#FAB12F"
        textColor="#333333"
        placeholderTextColor="#888888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
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
      
      <View style={styles.row}>
        <Checkbox uncheckedColor="#FAB12F" color="#FAB12F" />
        <Text style={styles.checkboxLabel}>Remember me</Text>
        <Button onPress={showForgotPasswordDialog} textColor="#FA4032">Forgot Password?</Button>
      </View>
      
      <Button 
        mode="contained" 
        style={styles.button} 
        onPress={() => {}}
        textColor="#FFFFFF"
        buttonColor="#FAB12F"
      >
        LOGIN
      </Button>
      
      <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Sign up
      </Text>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Forgot Password</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{dialogMessage}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#333333',
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
