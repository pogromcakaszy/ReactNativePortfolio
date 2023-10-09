import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  View, 
  SafeAreaView, 
} from 'react-native';
import React from 'react';


export default function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text> HomeScreen </Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        alignItems: 'center',
        justifyContent: 'center',
    },
});