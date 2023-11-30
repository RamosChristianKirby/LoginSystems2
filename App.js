import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegisterScreen';
import AccountRecoveryScreen from './AccountRecoveryScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{ title: 'Landing' }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ title: 'Registration' }}
          />
          <Stack.Screen
            name="AccountRecovery"
            component={AccountRecoveryScreen}
            options={{ title: 'Account Recovery' }}
          />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
