import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async () => {
    const userData = {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password,
    };

    axios
      .post("http://192.168.1.126:5001/register", userData)
      .then((res) => {console.log(res.data)
      if(res.data.status=="ok"){
        Alert.alert("Register succed")
        navigation.navigate('Login');
      }else if(res.data.data=="User already exists"){
        Alert.alert("User already exists")
    }});
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        autoCapitalize="none"
      />
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
        placeholder="First name"
        onChangeText={setFirstName}
        value={firstName}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        onChangeText={setLastName}
        value={lastName}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="numeric"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
