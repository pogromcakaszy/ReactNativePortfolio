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
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { FIRESTORE_DB } from '../../firebaseConfig';

const db = getFirestore();

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const Register = ({ navigation }) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const loginPressed = () => {
        navigation.navigate("Login");
    }

    const ping = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    const loginSucced = () => {
        Alert.alert('Login Succed', 'You can login now', [
            { text: 'OK', onPress: (loginPressed()) },
        ]);
    }

    const addUser = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                login: login,
                password: password,
                email: email,
                isAdmin: "false",
            });
            console.log("Document written with ID: ", docRef.id);
            console.log("Account created");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        loginSucced();
    }



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
                    <CustomInput placeholder={'Email'} value={email} setValue={setEmail}/>
                </View>

                <View style={styles.botBar}>
                    <CustomButton text={'Register'} bgcolor={'#F4D1AE'} color={'white'} marginVertical={20} onPress={addUser} />
                    <CustomButton text={'Login'} margin={10} onPress={ping} />
                    <CustomButton text={'Forgot Password'} margin={10} onPress={ping} />
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

export default Register;


//F56476

//F6DFC8


/*
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { FIRESTORE_DB } from '../../firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const db = FIRESTORE_DB(firebaseApp);  

*/