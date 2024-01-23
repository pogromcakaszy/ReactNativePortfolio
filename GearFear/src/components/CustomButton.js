import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, bgcolor, marginVertical, margin, width, textColor }) =>{

    const buttonStyles={
        backgroundColor: bgcolor,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        paddingVertical: 15,
        borderRadius: 5,
        margin: margin,
        marginVertical: marginVertical,
    };
    
    const textStyles = {
        color: textColor,
        fontSize: 16,
        fontFamily: 'Montserrat',
    };

    return(
        <View>
            <TouchableOpacity style={buttonStyles} onPress={onPress}>
                <Text style={textStyles}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;
