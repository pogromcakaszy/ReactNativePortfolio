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
import ProfileScreen from './src/screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './src/screens/SearchScreen';
import SettingScreen from './src/screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


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
        <Stack.Screen name="Home" component={HomeTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs(){
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      unmountOnBlur: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarActiveTintColor: '#38040E',
      tabBarStyle:{
        height: 90,
        borderRadius: 20,
        backgroundColor: '#AD2831',
        position: 'absolute',
        overflow: 'hidden',
        borderTopWidth: 0,        
      },
      tabBarItemStyle:{
        backgroundColor:'#800E13',
        margin: 5,
        top: 10,
        borderRadius:50,
      }
    }}
    >
      <Tab.Screen
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='home-sharp' color={color} size={size}/>
        )}}/>

      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='person-sharp' color={color} size={size}/>
      )}}/>

      <Tab.Screen name="Setting" component={SettingScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='settings-sharp' color={color} size={size}/>
      )}}/>

      <Tab.Screen name="Search" component={SearchScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='search-sharp' color={color} size={size}/>
      )}}/>

    </Tab.Navigator>
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
//name="search-circle-outline" <ion-icon name="search-sharp"></ion-icon>