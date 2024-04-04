import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminScreen from './screens/AdminScreen';
import VetScreen from './screens/VetScreen';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} 
        options={{
          headerLeft: null,
          gestureEnabled: false
        }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}
          options={{
            headerLeft: null,
            gestureEnabled: false
          }} />
        <Stack.Screen name="Admin" component={AdminScreen}
          options={{
            headerLeft: null,
            gestureEnabled: false
          }} />
        <Stack.Screen name="Vet" component={VetScreen}
          options={{
            headerLeft: null,
            gestureEnabled: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
