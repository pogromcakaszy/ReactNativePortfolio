import HomeScreen from "./screens/HomeScreen";
import BmiScreen from "./screens/BmiScreen";
import MenuScreen from "./screens/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}