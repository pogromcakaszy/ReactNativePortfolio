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
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import React from 'react';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


export default function ForgotScreen ({ navigation }) {

    const pressedButton = () => {
        Alert.alert('test')
    };

    return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>

            <View style={styles.squareTop}>
                <Image 
                style={styles.logo}
                source={require('../../../assets/img/logo.png')}/>
            </View>

            <View style={styles.squareBot}>
                <CustomInput placeholder={'Email'}/>
                <CustomButton onPress={pressedButton} color={'#38040E'} text={'Forgot password'} marginVertical={50}/>
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
        padding: '20%',
        height: '30%',
        width: '80%',
        backgroundColor: '#38040E',
        position: 'absolute',
        top: 20, 
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareBot: {
        backgroundColor: '#800E13',
        bottom: 20,
        padding: '15%',
        height: '35%',
        borderRadius: 40,
    },
    logo: {
        //bottom: 60,
        height: '150%',
        width: '150%',
    },
});