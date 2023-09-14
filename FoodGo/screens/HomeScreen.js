import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Button
        title='Navi to Bmi '
        onPress={() => navigation.navigate("Bmi")}
        />
        <Button
        title='Navi to Menu '
        onPress={() => navigation.navigate("Menu")}
        />
        <Text>HomeScreen</Text>
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
});
