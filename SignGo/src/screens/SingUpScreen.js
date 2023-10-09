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
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import React from 'react';
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


export default function SignUpScreen ({ navigation }) {

    const pressedButton = () => {
        Alert.alert('test')
    };

    
    const forgotPasswordPressed = () => {
        navigation.navigate("FogrotPassword")
    };

    const signUpPressed = () => {
        navigation.navigate("SignUp")
    };

    

    return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>

            

            <View style={styles.squareBot}>
                <CustomInput placeholder={'Email'}/>
                <CustomInput placeholder={'Password'} secureTextEntry={true}/>

                <CustomButton onPress={pressedButton} color={'#640D14'} text={'Sign Up'} marginVertical={10}/>
                <CustomButton onPress={forgotPasswordPressed} color={'#38040E'} text={'Forgot password?'} marginVertical={50}/>
            </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AD2831',
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
});