import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const checkToken = async () =>{
    try{
      const token = await AsyncStorage.getItem('token')
      const isLogged = await AsyncStorage.getItem('isLoggedIn')

      if (isLogged == 'true' && token !== null) {
        navigation.navigate('Profile');
      }
    }catch(error){
      console.log('Missing token ', error);
    }
  }

  useEffect(()=>{
    checkToken();
  }, []);

  const handleLogin = async () => {
    console.log(email, password);

    const userData = {
      email: email,
      password,
    }

    axios
      .post("http://192.168.1.126:5001/login", userData)
      .then(res => {
        console.log(res.data);
        if (res.data.status == 'OK') {
          Alert.alert("Logged in");
          AsyncStorage.setItem('token', res.data.data);
          AsyncStorage.setItem('userData', JSON.stringify({
            email: res.data.email,
            username: res.data.username,
            firstName: res.data.firstName
          }));
          AsyncStorage.setItem('isLoggedIn', 'true');
          if(res.data.rank == 3){
            navigation.navigate('Admin', {
              token: res.data.data,
              email: res.data.email,
              username: res.data.username,
              firstName: res.data.firstName
          });
          }else if(res.data.rank == 2){
            navigation.navigate('Vet', {
              token: res.data.data,
              email: res.data.email,
              username: res.data.username,
              firstName: res.data.firstName
          })
          }
          else(
            navigation.navigate('Profile', {
              token: res.data.data,
              email: res.data.email,
              username: res.data.username,
              firstName: res.data.firstName
          }
          ));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={() => handleLogin()} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;