import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ( { value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.content}>
            <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={setValue}
                style={styles.textInput}
                keyboardAppearance='dark'
                placeholderTextColor={'#3B3B3B'}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
      content: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 10,
        paddingVertical: 15,
        width: 195,
        justifyContent: 'center',
        bottom: 30,
      },
      textInput:{
        fontSize: 15, 
        color: 'black',
        fontFamily: 'Montserrat',
      },
});


export default CustomInput