import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function OrderScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Button
        title='Navi to Home '
        onPress={() => navigation.navigate("Home")}
        />
        <Text>oirder Screen </Text>
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
