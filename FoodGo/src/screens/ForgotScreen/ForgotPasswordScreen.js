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
import { ActionCodeOperation, sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const ForgotPasswordScreen = ({navigation, initialRouteName}) => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    

    const forgetPasswordPressed = async () => {
        setLoading(true);
        try{
          const response = await sendPasswordResetEmail(auth, email);
          console.log(response)
          alert(' Email sent ');
        }catch (error){
          console.log(error);
          alert('error ' + error.message);
        } finally {
          setLoading(false);
        }
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

            <CustomButton text="Forgot password?" onPress={forgetPasswordPressed}/>

            <Text style={styles.textInput}> Input your email to reset password </Text>

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
        //marginTop: 400,
        padding: '10%',
        width: '90%',
        height: '40%',
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
        width: 400,
        height: 200,
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

export default ForgotPasswordScreen