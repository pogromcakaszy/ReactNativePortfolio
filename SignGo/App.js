import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from 'react-native-splash-screen';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from './src/screens/SignInScreen';
import { useFonts } from 'expo-font';
import ForgotScreen from './src/screens/ForgotScreen';
import SignUpScreen from './src/screens/SingUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded){
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if(!isLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
      }}
      >

        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="FogrotPassword" component={ForgotScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
