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
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ObjectScreen from './src/screens/ObjectScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs({ navigation, route}){

  
  const { email } = route.params;
  return(
    <Provider store={store}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#38040E',
        tabBarStyle:{
          height: 90,
          borderRadius: 30,
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

      <Tab.Screen name="Profiles" 
      component={ProfileScreen} 
      initialParams={{ email: email }} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='person-sharp' color={color} size={size}/>
      )}}
      />

      <Tab.Screen name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='home-sharp' color={color} size={size}/>
      )}}
      />

      <Tab.Screen name="Settings" 
      component={SettingScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='settings-sharp' color={color} size={size}/>
      )}}
      />



    </Tab.Navigator>
    </Provider>
  );
}

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
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="FogrotPassword" component={ForgotScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={HomeTabs} />
        <Stack.Screen name="Object" component={ObjectScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

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
