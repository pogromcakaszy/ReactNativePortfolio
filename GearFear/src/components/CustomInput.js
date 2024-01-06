import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.content}>
            <TextInput 
                style={styles.textInput}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                keyboardAppearance='dark'
                placeholderTextColor={'#5E4352'}
                secureTextEntry={secureTextEntry}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 7,
        justifyContent: 'center',
        paddingHorizontal: 140,
        paddingVertical: 10,
        margin: 10,
    },
    textInput: {
        color: 'black',
        fontSize: 20,
    }
});

export default CustomInput;