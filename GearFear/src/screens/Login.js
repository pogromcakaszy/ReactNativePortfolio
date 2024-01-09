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

    const signUpPressed = () => {
        navigation.navigate("Register");
    }

    const logged = () => {
        navigation.navigate("Dashboard");
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
            
            if(login === 'admin' && password === 'admin'){
                Alert.alert('Passed');
                navigation.navigate("AdminDashboard", {login: login});
            }else{
                usersSnapshot.forEach((doc) => {
                    const userData = doc.data();
                    if (login === userData.login && password === userData.password) {
                        Alert.alert('Passed');
                        navigation.navigate("Dashboard", {login: login});
                    }
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Error during login');
        }
    };
    

    return (
        <DismissKeyboard>

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

                <View style={styles.botBar}>
                    <CustomButton onPress={loginUser} text={'login'} bgcolor={'#F4D1AE'} color={'white'} marginVertical={20} />
                    <CustomButton onPress={ping} text={'forgot password'} margin={10} />
                    <CustomButton onPress={signUpPressed} text={'register'} margin={10} />
                </View>

            </LinearGradient>
        </DismissKeyboard>
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
    botBar: {
        alignContent: 'center',
        alignItems: 'center',
    },
    imageTop: {
        alignItems: 'center',
        padding: '0%',
        bottom: 50,
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