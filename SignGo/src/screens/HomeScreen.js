import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  Image,
  Alert,
  View, 
  SafeAreaView, 
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';

function HomeScreen ({ navigation, Tabs }) {

    
    const auth = getAuth();
    const route = useRoute();
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.squareBot}>  
              <TouchableOpacity
              style={styles.button}
              onPress={signOut}
              ></TouchableOpacity>
            </View>
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
    squareTop: {
        padding: '40%',
        backgroundColor: '#38040E',
        position: 'absolute',
        top: 30, 
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareBot: {
        backgroundColor: '#800E13',
        //top: 70,
        padding: '15%',
        height: '50%',
        borderRadius: 40,
    },
    button: {
      backgroundColor: '#FFFFFF',
      padding: '15%',
      height: '50%',
      borderRadius: 40,
  },
});

export default HomeScreen;