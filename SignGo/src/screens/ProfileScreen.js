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
import { FIREBASE_AUTH } from '../../firebase';
import React, { useState } from 'react';

function ProfileScreen ({ navigation, Tabs, route }) {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.squareBot}>
              <Text> Data:  2</Text>
              
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
        backgroundColor: '#AD2831',
        //top: 70,
        padding: '30%',
        height: '40%',
        borderRadius: 40,
    },
});

export default ProfileScreen;