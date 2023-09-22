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
        marginVertical: 15,
        borderWidth: 2,
        padding: 15,
        width: 200,
        //height: '20%',

        justifyContent: 'center',
      },
      textInput:{
        fontSize: 20, 
        fontFamily: 'mtt-regular',
        color: 'black',
      },
});


export default CustomInput