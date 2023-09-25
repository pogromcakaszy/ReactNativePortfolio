import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    SafeAreaView,
    TextInput,
    Keyboard, 
    TouchableWithoutFeedback,
    Alert,
    Touchable,
    TouchableOpacity,
  } from 'react-native';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const signInPressed = async () => {
        setLoading(true);
        try{
          const response = await signInWithEmailAndPassword(auth, email, password);
          console.log(response)
          navigation.navigate("Home");
        }catch (error){
          console.log(error);
          alert('We cannot login to your account ' + error.message);
        } finally {
          setLoading(false);
        }
    }

    /*
      const signUpPressed = async () => {
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
    */
    const signUpPressed = async () => {
      navigation.navigate("SignUp");
    }

    const forgotPasswordPressed = async () => {
      navigation.navigate("ForgotPassword");
    }
    
    return (
        <DismissKeyboard>
        <SafeAreaView style={styles.container}>
          {/* This is a average menu used to display every kind of events.*/}
          <View style={styles.container}>
          <Image
            style={styles.hugeLogo}
            source={require('../../../assets/img/pizzaLogo.png')}
          />
          
          <View style={styles.content}>
            <View style={styles.backgroundSquare}>
            
            <CustomInput placeholder={'Email'} value={email} setValue={setEmail}/>
            <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true}/>
            
            <CustomButton text="Sign In" onPress={signInPressed} color='#6E5ADF' />

            <CustomButton text="Forgot password?" onPress={forgotPasswordPressed}/>

            <Text style={styles.textInput}> Don't have an account?</Text>
            <Text style={styles.textInput}> Just sign up!</Text>
            <CustomButton text="Sign Up" onPress={signUpPressed} color='#2F2F2F' />

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
        //paddingBottom: 60,
      },
      backgroundSquare: {
        backgroundColor: '#212121',
        margin: 20,
        borderRadius: 20,
        padding: '10%',
        width: '90%',
        height: '80%',
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
        width: 60,
        fontSize: 16,
        fontFamily: 'mtt-regular',
        textAlign: 'center',
      },
      hugeLogo: {
        width: 200,
        height: 100,
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        top: 0,
      },
      textInput:{
        fontSize: 15, 
        fontFamily: 'mtt-regular',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
      },
});

export default SignInScreen