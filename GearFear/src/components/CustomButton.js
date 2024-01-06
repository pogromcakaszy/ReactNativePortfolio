import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, color, marginVertical, margin }) =>{

    const buttonStyles={
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        paddingVertical: 15,
        borderRadius: 10,
        margin: margin,
        marginVertical: marginVertical,
    };

    return(
        <View>
            <TouchableOpacity style={buttonStyles} onPress={onPress}>
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textButton:{
        fontSize: 15,
        color: 'black'
    },  
});

export default CustomButton;