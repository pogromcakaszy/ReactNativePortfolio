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
import React, { useState } from 'react';
import ForgotScreen from './ForgotScreen';
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebase';


const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


export default function SignInScreen ({ navigation }) {
    
    const auth = FIREBASE_AUTH;

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const pressedButton = () => {
        Alert.alert('test')
    };

    const handleSignIn = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        }catch(error){
            console.log(error);
            alert('We cannot login to your account ' + error.message);
        }finally {
            setLoading(false);
        }
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

            <View style={styles.squareTop}>
                <Image 
                style={styles.logo}
                source={require('../../assets/img/logo.png')}/>
            </View>

            <View style={styles.squareBot}>
                <CustomInput placeholder={'Email'} value={email} setValue={setEmail}/>
                <CustomInput placeholder={'Password'} secureTextEntry={true} setValue={setPassword}/>

                <CustomButton onPress={handleSignIn} color={'#640D14'} text={'Sign In'} marginVertical={10}/>
                <CustomButton onPress={signUpPressed} color={'#640D14'} text={'Sign Up'} marginVertical={10}/>
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
        top: 70,
        padding: '15%',
        height: '60%',
        borderRadius: 40,
    },
    logo: {
        bottom: 60,
        height: '450%',
        width: '450%',
    },
});