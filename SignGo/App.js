//IMPORT FEATURES
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from './src/redux/store';

//IMPORT SCREENS
import HomeScreen from './src/screens/appscreens/HomeScreen';
import ProfileScreen from './src/screens/appscreens/ProfileScreen';
import SearchScreen from './src/screens/appscreens/SearchScreen';
import SettingScreen from './src/screens/appscreens/SettingsScreen';
import TabNavigator from './src/navigation/TabNavigator';
import ObjectScreen from './src/screens/appscreens/ObjectScreen';

//IMPORT LOGIN SCREENS
import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './src/screens/loginscreen/SignInScreen';
import SignUpScreen from './src/screens/loginscreen/SingUpScreen';
import ForgotScreen from './src/screens/loginscreen/ForgotScreen';

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
