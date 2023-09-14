import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function BmiScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text>Bmi Screen</Text>
        <Button
        title='Navi to Home '
        onPress={() => navigation.navigate("Home")}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
