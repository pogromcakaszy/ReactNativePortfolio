import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
            style={styles.hugeLogo}
            source={require('./../assets/img/pizzaLogo.png')}
        />
        <View>
            
        <TouchableOpacity
        style={styles.buttonNavigateOrder}
        title='Navi to Order '
        onPress={() => navigation.navigate("Order")}
        >
            <Text style={styles.buttonHomeText}>Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonNavigateMenu}
        title='Navi to Menu '
        Text='Menu'
        onPress={() => navigation.navigate("Menu")}
        >
            <Text style={styles.buttonHomeText}>Menu</Text>
        </TouchableOpacity> 

        <TouchableOpacity
        style={styles.buttonNavigateBmi}
        title='Navi to Bmi '
        Text='BMI'
        onPress={() => navigation.navigate("Bmi")}
        >
            <Text style={styles.buttonHomeText}>Bmi</Text>
        </TouchableOpacity>

        </View>
        <StatusBar style="inverted" />
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
  buttonNavigateOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 10,
    margin: 10,
    backgroundColor: '#6E5ADF',
    borderRadius: 30,
  },
  buttonNavigateMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 10,
    margin: 10,
    backgroundColor: '#009CDF',
    borderRadius: 30,
  },
  buttonNavigateBmi: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 10,
    margin: 10,
    backgroundColor: '#222222',
    borderRadius: 30,
  },
  buttonHomeText: {
    color: 'white',
    height: 20,
    width: 60,
    fontSize: 16,
    fontFamily: 'mtt-regular',
    textAlign: 'center',
  },
  hugeLogo: {
    width: 400,
    height: 200,
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
  },
});
