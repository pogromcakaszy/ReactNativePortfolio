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
import { useRoute } from '@react-navigation/native';
import CustomButtonOutline from '../components/CustomButtonOutline';


const db = getFirestore();


const Dashboard = ({ navigation, route }) => {

    const { login } = route.params;

    const ping = () => {
        navigation.navigate("Login");
    }

    const ping1 = () => {
        navigation.navigate("Home",  {login: login});
    }


    return (

            <LinearGradient
                colors={['#F56476', '#F6DFC8']}
                style={styles.container}
            >

                <View style={styles.topBar}>
                    <Text>Welcome {login}</Text>
                    <Text>User box</Text>
                </View>
                <CustomButtonOutline onPress={ping} text={'LOG OUT'} textColor={'black'} marginVertical={20} width={150} />
                <CustomButtonOutline onPress={ping1} text={'Next '} textColor={'black'} marginVertical={20} width={150} />


            </LinearGradient>
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

export default Dashboard;


//F56476

//F6DFC8


/*
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { FIRESTORE_DB } from '../../firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const db = FIRESTORE_DB(firebaseApp);  

*/