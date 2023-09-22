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

        borderRadius: 20,
        marginVertical: 5,
        borderWidth: 2,

        width: 200,
        height: '20%',

        justifyContent: 'center',
      },
      textInput:{
        fontSize: 20, 
        fontFamily: 'mtt-regular',
        color: 'black',
        
      },
});


export default CustomInput