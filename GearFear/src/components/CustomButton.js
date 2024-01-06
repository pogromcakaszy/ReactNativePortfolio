import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, bgcolor, marginVertical, margin, color }) =>{

    const buttonStyles={
        backgroundColor: bgcolor,
        color: color,
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
        //color: 'white'
    },  
});

export default CustomButton;