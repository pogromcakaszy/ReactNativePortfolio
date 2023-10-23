import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  View, 
  SafeAreaView, 
} from 'react-native';
import React, { useState } from 'react';


function SettingsScreen ({ navigation, Tabs }) {

    return (
      
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.squareBot}>
              <Text> settings SCREEN</Text>
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
        padding: '15%',
        height: '50%',
        borderRadius: 40,
    },
});

export default SettingsScreen;