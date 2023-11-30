import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Title, Snackbar } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleLogin = () => {
    // Simulated login logic
    if (username !== '' && password !== '') {
      // Implement your actual login logic here
      // For example, send a request to your backend for authentication
      // If successful, navigate to HomeScreen
      navigation.navigate('Home');
    } else {
      setSnackbarVisible(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Title>Login</Title>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={{ width: '80%', marginVertical: 10 }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ width: '80%', marginVertical: 10 }}
      />
      <Button mode="contained" onPress={handleLogin} style={{ width: '80%', marginTop: 20 }}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('Registration')} style={{ marginTop: 10 }}>
        Go to Registration
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={{ backgroundColor: 'red' }}
      >
        Please enter valid credentials.
      </Snackbar>
    </View>
  );
};

export default LoginScreen;
