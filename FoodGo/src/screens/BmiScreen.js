import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image, 
  SafeAreaView,
  TouchableWithoutFeedback, 
  TextInput, 
  Keyboard, 
  Alert 
} from 'react-native';
import React, {useState} from 'react';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);

export default function BmiScreen({ }) {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');

  const handleWeightChange = (text) =>{
    setWeight(text);
  }

  const handleHeightChange = (text) =>{
    setHeight(text);
  }

  const bmiCalc = () =>{
  const weightValue = parseFloat(weight);
  const heightValue = parseFloat(height);

  if(!isNaN(weightValue) && !isNaN(heightValue)){
    
  const bmiResult = ((weightValue)/Math.pow(heightValue,2))*10000
  const finalRes = bmiResult.toFixed(1);
  setBmiResult(finalRes);
  checkBmi(finalRes);
  }else{
    alert('Podaj poprawne dane');
    }
  }

  function checkBmi(finalRes){
    if(finalRes > 18.5 && finalRes < 24.99){
      Alert.alert('Twoje BMI',"twoje bmi jest prawidlowe");
    }else if(finalRes < 16){
      Alert.alert('Twoje BMI', "wygłodzenie");
    }else if(finalRes > 16 && finalRes < 16.99){
      Alert.alert('Twoje BMI',"wychudzenie");
    }else if(finalRes > 17 && finalRes < 18.49){
      Alert.alert('Twoje BMI',"niedowaga");
    }else if(finalRes > 25 && finalRes < 29.99){
        Alert.alert('Twoje BMI',"nadwaga");
    }else if(finalRes > 30 && finalRes < 34.99){
      Alert.alert('Twoje BMI'," I stopień otyłości");
    }else if(finalRes > 35 && finalRes < 39.99){
      Alert.alert('Twoje BMI'," II stopień otyłości");
    }else{
      Alert.alert("grubas");
    }
  }

  const saveData = () =>{
    console.log(height);
    console.log(weight);
  }

  functionCombined = () =>{
    saveData()
    bmiCalc()
  }


  return (
  <DismissKeyboard>
  <SafeAreaView style={styles.container}>
      {/* This is a average menu used to display every kind of events. */}
    <View style={styles.container}>
      <View style={styles.backgroundSquareTop}>
        <View style={styles.gridContainer}>
          <View style={styles.gridRow}>
          
                <Image
                style={styles.productMenuLogo}
                source={require('../../assets/img/weightw.png')}
                />
                    {/* Pierwszy kwadrat w pierwszym rzędzie */}
              
            <TextInput
                style={styles.textInput}
                keyboardType='numeric'
                placeholder='Waga'
                keyboardAppearance='dark'
                placeholderTextColor={'white'}
                onChangeText={handleWeightChange}
                value={weight}
                />
          </View>
          <View style={styles.gridRow}>
            
                <Image
                style={styles.productMenuLogo}
                source={require('../../assets/img/heightw.png')}
                />
                    {/* Pierwszy kwadrat w drugim rzędzie */}
            
            <TextInput
                style={styles.textInput}
                keyboardType='numeric'
                placeholder='Height'
                placeholderTextColor={'white'}
                keyboardAppearance='dark'
                onChangeText={handleHeightChange}
                value={height}
            />

          </View>
            <Text style={styles.textResultBmi}> Twoje BMI {bmiResult}</Text>
        </View>
      </View>
      <View >
        <Text style={styles.textBmiHeader}>
          Zakresy wartości BMI:
        </Text>
        <Text style={styles.textBmiValues}>
          mniej niż 16 - wygłodzenie
        </Text>
        <Text style={styles.textBmiValues}>
          16 - 16.99 - wychudzenie
        </Text>
        <Text style={styles.textBmiValues}>
          17 - 18.49 - niedowaga
        </Text>
        <Text style={styles.textBmiValues}>
          18.5 - 24.99 - wartość prawidłowa
        </Text>
        <Text style={styles.textBmiValues}>
          25 - 29.99 - nadwaga
        </Text>
        <Text style={styles.textBmiValues}>
          30 - 34.99 - I stopień otyłości
        </Text>
        <Text style={styles.textBmiValues}>
          35 - 39.99 - II stopień otyłości
        </Text>
        <Text style={styles.textBmiValues}>
          powyżej 40 - otyłość skrajna
        </Text>

      </View>
      

      <View style={styles.content}>
        <View style={styles.backgroundSquare}>
        
        <TouchableOpacity
        style={styles.buttonNavigateBmi}
        onPress={functionCombined}
        >
            <Text style={styles.buttonHomeText}>Calculate</Text>
        </TouchableOpacity>
        </View>
      </View>
        <StatusBar style="inverted" />
    </View>
  </SafeAreaView>
  </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  backgroundSquare: {
    backgroundColor: '#212121',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    width: 250,
  },
  backgroundSquareTop: {
    flexDirection: 'row',
    backgroundColor: '#212121',
    margin: 25,
    borderRadius: 20,
  },
  buttonNavigateBmi: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 10,
    margin: 10,
    backgroundColor: '#2F2F2F',
    borderRadius: 30,
  },
  buttonHomeText: {
    color: 'white',
    height: 20,
    width: 80,
    fontSize: 16,
    fontFamily: 'mtt-regular',
    textAlign: 'center',
  },
  productMenuLogo: {
    width: 80,
    height: 80,
    margin: 30,
    marginRight: 16,
  },
  textInput:{
    fontSize: 30, 
    fontFamily: 'mtt-regular',
    color: 'white',
  },
  gridContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textBmiValues: {
    color: 'white',
    fontFamily: 'mtt-regular',
    fontSize: 15,
    marginLeft: 50,
  },
  textBmiHeader: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    fontFamily: 'mtt-bold',
    letterSpacing: 5,
  },
  textResultBmi: {
    color: 'white',
    fontFamily: 'mtt-bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 5,
    margin: 20,
  },
});
