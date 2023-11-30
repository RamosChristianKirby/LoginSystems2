import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Snackbar } from 'react-native-paper';

const RecoveryScreen = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleRecovery = () => {
    // Simulated recovery logic
    if (emailOrUsername !== '') {
      // Implement your actual recovery logic here
      // For example, send a recovery email to the provided email/username
      setSnackbarVisible(true); // Display a success message
    } else {
      setSnackbarVisible(true); // Display an error message if input is empty
    }
  };

  return (
    <View style={styles.container}>
      <Title>Account Recovery</Title>
      <TextInput
        label="Email or Username"
        value={emailOrUsername}
        onChangeText={(text) => setEmailOrUsername(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleRecovery} style={styles.button}>
        Recover Account
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={{ backgroundColor: snackbarVisible ? 'green' : 'red' }}
      >
        {emailOrUsername ? 'Recovery email sent!' : 'Please enter email or username'}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    marginTop: 15,
    width: '100%',
  },
});

export default RecoveryScreen;
