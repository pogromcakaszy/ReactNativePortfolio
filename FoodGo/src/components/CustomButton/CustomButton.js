import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CustomButton = ( {onPress, text} ) => {
    return(
        <Pressable style={styles.content} onPress={onPress}>
            <Text style={styles.textInput}> {text} </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
      content: {
        backgroundColor: '#6E5ADF',
        
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        marginVertical: 30,
      },
      textInput:{
        fontSize: 20, 
        fontFamily: 'mtt-regular',
        color: 'white',
      },
});


export default CustomButton