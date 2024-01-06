import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';


const Login = ({ navigation }) => {

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

    return (
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
                <CustomInput placeholder={'Login'} />
                <CustomInput placeholder={'Password'} />
            </View>

            <View style={styles.botBar}>
                <CustomButton text={'login'} bgcolor={'#F4D1AE'} color={'white'} marginVertical={20} onPress={ping} />
                <CustomButton text={'forgot password'} margin={10} onPress={ping} />
                <CustomButton text={'register'} margin={10} onPress={ping} />
            </View>

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

export default Login;


//F56476

//F6DFC8