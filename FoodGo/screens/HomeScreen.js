import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <View>
        <TouchableOpacity
            style={styles.buttonNavigateOrder}
            title='Navi to Order '
            onPress={() => navigation.navigate("Order")}
        />
        <TouchableOpacity 
            style={styles.buttonNavigateMenu}
            title='Navi to Menu '
            onPress={() => navigation.navigate("Menu")}
        />
        <TouchableOpacity 
            style={styles.buttonNavigateBmi}
            title='Navi to Bmi '
            onPress={() => navigation.navigate("Bmi")}
        />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNavigateOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#6E5ADF',
  },
  buttonNavigateMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#009CDF',
  },
  buttonNavigateBmi: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#222222',
  },
});
