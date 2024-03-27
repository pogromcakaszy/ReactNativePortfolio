import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const HomeScreen = ({ navigation, route }) => {
  const [token, setToken] = useState('');
  const { email, username, firstName } = route.params;

  useEffect(() => {
    if (route.params && route.params.token) {
      AsyncStorage.setItem('token', route.params.token);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {firstName}!</Text>
      <Text style={styles.text}>Your email: {email}</Text>
      <Text style={styles.text}>Your username: {username}</Text>

      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
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
