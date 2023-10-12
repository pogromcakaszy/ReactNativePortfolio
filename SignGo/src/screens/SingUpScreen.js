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
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FIREBASE_AUTH } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


export default function SignUpScreen ({ navigation }) {

    const auth = FIREBASE_AUTH;

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[loading, setLoading] = useState(false);

    
    const forgotPasswordPressed = () => {
        navigation.navigate("FogrotPassword")
    };

    const handleSignUp = async () => {
        setLoading(true);
        try{
          const response = await createUserWithEmailAndPassword(auth, email, password);
          console.log(response)
          alert('Register sucesfully');
        }catch (error){
          console.log(error);
          alert('We cannot create your account' + error.message);
        } finally {
          setLoading(false);
        }
    }

    return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>

            <View style={styles.squareBot}>
                <CustomInput
                placeholder='Email'
                value={email}
                setValue={setEmail}
                />
                <CustomInput
                placeholder={'Password'} 
                secureTextEntry={true} 
                value={password} 
                setValue={setPassword}
                />

                <CustomButton onPress={handleSignUp} color={'#640D14'} text={'Sign Up'} marginVertical={10}/>
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