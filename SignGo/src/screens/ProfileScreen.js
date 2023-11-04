import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, Alert, View, SafeAreaView, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';
import React from 'react';

function ProfileScreen({ navigation, route }) {

  const { email } = route.params;
  const auth = getAuth();

  // SIGN OUT SYSTEM
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      alert('Logged out successfully');
      navigation.navigate("SignIn");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.squareBot}>
          <Text style={styles.text}> Hello,</Text>
          <Text style={styles.text}> {email} </Text>
          
        </View>
        <TouchableOpacity 
            style={styles.button}
            onPress={handleSignOut}
          >
            <Text style={styles.text2}>Sign Out</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800E13',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareBot: {
    backgroundColor: '#AD2831',
    padding: '20%',
    height: '30%',
    borderRadius: 40,
  },
  button: {
    backgroundColor: '#38040E',
    padding: '10%',
    height: '15%',
    //width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});

export default ProfileScreen;
