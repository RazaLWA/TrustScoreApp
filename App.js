import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import TrustScoreScreen from './screens/TrustScoreScreen';
import ScoreResultScreen from './screens/ScoreResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ title: 'Seller Login' }}
          />
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ title: 'Seller Dashboard' }}
          />
          <Stack.Screen 
            name="TrustScore" 
            component={TrustScoreScreen}
            options={{ title: 'Calculate Trust Score' }}
          />
          <Stack.Screen 
            name="ScoreResult" 
            component={ScoreResultScreen}
            options={{ title: 'Trust Score Result' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
