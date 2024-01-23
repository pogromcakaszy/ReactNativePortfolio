import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { FIRESTORE_DB } from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import CustomButtonOutline from '../components/CustomButtonOutline';

//const db = getFirestore();

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const Login = ({ navigation }) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(true)

    const signUpPressed = () => {
        navigation.navigate("Register");
    }

    const ping = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    const loginUser = async () => {
        try {
            const usersRef = collection(db, 'users');
            const usersSnapshot = await getDocs(usersRef);
            let isAdmin = false;
            let userFound = false;

            usersSnapshot.forEach((doc) => {
                const userData = doc.data();
                if (login === userData.login && password === userData.password) {
                    userFound = true;
                    if(userFound === true){
                        if (userData.isAdmin === true){
                            isAdmin = true;
                            navigation.navigate("AdminDashboard", { login: login });
                        }else{
                            navigation.navigate("Dashboard", { login: login });
                        }
                    } 
                }

                if(!userFound){
                    Alert.alert('Error login');
                }

            });
        } catch (error) {
            console.error('Error during login:', error);
        }

    };


    return (
        //<DismissKeyboard>

        <LinearGradient
            colors={['#F56476', '#F6DFC8']}
            style={styles.container}
        >
            <View style={styles.topBar}>
                <Image
                    style={styles.imageTop}
                    source={require('../../assets/logo.png')}
                />
            </View>

            <View style={styles.midBar}>
                <CustomInput placeholder={'Login'} value={login} setValue={setLogin} />
                <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true} />
            </View>

            <View style={styles.botBar1}>
                <CustomButtonOutline onPress={loginUser} text={'LOGIN'} textColor={'black'} marginVertical={20} width={150} />
            </View>

            <View style={styles.botBar2}>
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={ping} text={'FORGOT PASSWORD?'} textColor={'#5E4352'} margin={10} width={200} />
                    <CustomButton onPress={signUpPressed} text={'REGISTER'} textColor={'#5E4352'} margin={10} width={150} />
                </View>
            </View>

        </LinearGradient>
        //</DismissKeyboard>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {

    },
    midBar: {
        bottom: 60,
    },
    botBar1: {
        alignContent: 'center',
        alignItems: 'center',
        bottom: 40,
    },
    botBar2: {
        top: 110,
        alignContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    imageTop: {
        alignItems: 'center',
        width: 270,
        height: 270,
        bottom: 100,
    },
});

export default Login;


//F56476

//F6DFC8


/*
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { FIRESTORE_DB } from '../../firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const db = FIRESTORE_DB(firebaseApp);  

*/