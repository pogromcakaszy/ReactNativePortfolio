import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    }, []);


    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image
                    source={require('../../assets/splashscreen.png')}
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F56476',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Splash;





