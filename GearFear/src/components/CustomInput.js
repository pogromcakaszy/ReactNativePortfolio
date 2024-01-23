import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.content}>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                keyboardAppearance='dark'
                placeholderTextColor={'#5E4352'}
                secureTextEntry={secureTextEntry}
                maxLength={20}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        width: 300,
        maxWidth: '100%',
        paddingVertical: 10,
        margin: 10,
    },
    textInput: {
        fontFamily: 'Montserrat',
        color: 'black',
        fontSize: 20,
        width: 300,
        maxWidth: '100%',
        textAlign: 'center',
    }
});

export default CustomInput;