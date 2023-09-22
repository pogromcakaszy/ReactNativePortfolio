import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
    Image, 
    SafeAreaView,
    TextInput,
    Keyboard, 
    TouchableWithoutFeedback, 
  } from 'react-native';
import CustomInput from "../../components/CustomInput";

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const SignInScreen = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <DismissKeyboard>
        <SafeAreaView style={styles.container}>
          {/* This is a average menu used to display every kind of events.  ./../assets/img/pizzaLogo.png */}
          
          <View style={styles.container}>
          <Image
            style={styles.hugeLogo}
            source={require('../../../assets/img/pizzaLogo.png')}
          />
          
          <View style={styles.content}>
            <View style={styles.backgroundSquare}>
            
            <CustomInput placeholder={'Login'} value={username} setValue={setUsername}/>
            <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true}/>
            
            </View>
            <TouchableOpacity
            style={styles.buttonNavigateBmi}
            title='Navi to Home '
            Text='Login'
            onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonHomeText}>Login</Text>
            </TouchableOpacity>
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
        paddingBottom: 50,
      },
      backgroundSquare: {
        backgroundColor: '#212121',
        margin: 20,
        borderRadius: 20,
        padding: '20%',
        width: '80%',
        height: '50%',
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
});

export default SignInScreen