import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ( {onPress, text, color} ) => {
  const buttonStyles = {
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 30,
    marginVertical: 30,
    
  };

    return(
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={styles.textInput}> {text} </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
      textInput:{
        fontSize: 20, 
        fontFamily: 'mtt-regular',
        color: 'white',
      },
});


export default CustomButton;