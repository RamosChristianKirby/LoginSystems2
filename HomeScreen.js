import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params || {};

  const handleLogout = () => {
    // Implement logout logic here
    // For example, clear user session/token and navigate back to Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Title>Welcome {username ? `, ${username}!` : 'to MyApp!'}</Title>
      <Button mode="contained" onPress={handleLogout} style={styles.button}>
        Logout
      </Button>
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
  button: {
    marginTop: 20,
    width: '100%',
  },
});

export default HomeScreen;
