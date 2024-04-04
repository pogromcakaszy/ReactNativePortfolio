import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const HomeScreen = ({ navigation, route }) => {
  const { email, username, firstName, token } = route.params;
  const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
      const fetchToken = async () => {
          try {
              const storedToken = await AsyncStorage.getItem('token');
              console.log(storedToken);
              setUserToken(storedToken);
              const storedUserData = await AsyncStorage.getItem('userData');
              if(storedUserData){
                  const userData = JSON.parse(storedUserData)
                  setUserData(userData)
              }
          } catch (error) {
              console.error('Error retrieving token:', error);
          }
      };
      fetchToken();
  }, []);

  const handleLogout = async () => {
      try {
          await AsyncStorage.removeItem('token');
          await AsyncStorage.setItem('isLoggedIn', 'false'); // Użyj await, aby upewnić się, że operacja zapisu jest zakończona przed kontynuacją
          navigation.replace('Login');
      } catch (error) {
          console.error('Error logging out:', error);
      }
  };


  return (
    <View style={styles.container}>
            <Text style={styles.text}>Welcome, {userData?.firstName}!</Text>
            <Text style={styles.text}>Your email: {userData?.email}</Text>
            <Text style={styles.text}>Your username: {userData?.username}</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile', {
        token: token,
        email: email,
        username: username,
        firstName: firstName
      })} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
