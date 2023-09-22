import HomeScreen from "./src/screens/HomeScreen";
import BmiScreen from "./src/screens/BmiScreen";
import MenuScreen from "./src/screens/MenuScreen";
import OrderScreen from "./src/screens/OrderScreen";
import SignInScreen from "./src/screens/signInScreen/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, View } from "react";

const Stack = createNativeStackNavigator();


//SplashScreen.preventAutoHideAsync();


export default function App() {

  const [isLoaded] = useFonts({
    'mtt-black': require('./assets/fonts/Montserrat-Black.ttf'),
    'mtt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'mtt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
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
        
        <Stack.Screen
          name= "SignIn"
          component={SignInScreen}
          options={{title: "sign in"}}
        />
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options={{title: "home screen"}}
        />
        <Stack.Screen
          name = "Bmi"
          component={BmiScreen}
          options={{title: "bmi screen"}}
        />
        <Stack.Screen
          name = "Menu"
          component={MenuScreen}
          options={{title: "menu screen"}}
        />
        <Stack.Screen
          name = "Order"
          component={OrderScreen}
          options={{title: "order screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}