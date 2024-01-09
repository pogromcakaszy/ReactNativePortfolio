import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import AdminDashboard from '../screens/AdminDashboard';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={Splash}
                    name="Splash"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={Login}
                    name="Login"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={Register}
                    name="Register"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={Dashboard}
                    name="Dashboard"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={AdminDashboard}
                    name="AdminDashboard"
                    options={{ headerShown: false }}
                />
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

export default AppNavigator;