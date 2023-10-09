import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CustomButton = ( {onPress, text, color, marginVertical}) => {

    const buttonStyles={
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 30,
        marginVertical: marginVertical,
    };

    return(
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={styles.textInput}> {text} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
      textInput:{
        fontSize: 15, 
        color: 'white',
        fontFamily: 'Montserrat',
      },
});


export default CustomButton