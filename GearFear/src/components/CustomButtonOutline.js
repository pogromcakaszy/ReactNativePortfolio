import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButtonOutline = ({ onPress, text, bgcolor, marginVertical, margin, width, textColor }) =>{

    const buttonStyles={
        backgroundColor: bgcolor,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        paddingVertical: 15,
        margin: margin,
        marginVertical: marginVertical,
        borderColor: 'black', 
        borderWidth: 2,       
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

export default CustomButtonOutline;
