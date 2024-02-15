import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';

const apiKey = '5c188f0c-0b40-44ee-9ae1-96b818de8fa5';
//const stopId = 8227;
//const apiUrl = `https://ckan2.multimediagdansk.pl/departures?stopId=${stopId}`;
//const apiUrl = `http://ckan2.multimediagdansk.pl/delays?stopId=${stopId}`;
const headsign = "Oliwa";
const apiUrl = `https://ckan2.multimediagdansk.pl/departures?headsign=${headsign}`;

const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    
};

const Home = () => {

    const [departures, setDepartures] = useState(departures);

    useEffect(() => {
        
            fetchData();
            const timeout = setInterval(() => {
                fetchData();
            }, 20 * 1000);
    
            return () => {
                clearInterval(timeout);
            };
    }, []);

    const fetchData = (async() => {
        axios.get(apiUrl, { headers })
            .then(response => {
                console.log('Status Code:', response.status);
                console.log('Response Data:', response.data);

                setDepartures(response.data.departures);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    const refreshData = async () => {
        fetchData(); 
    };

    return (
        <SafeAreaView style={styles.container}>
             <ScrollView style={styles.scrollView}>
            <View style={styles.container3}>
                <View>
                    <Text style={styles.textContainer}>Aktualne opóźnienia</Text>
                    {departures && departures.map(departure => (
                        <View key={departure.headsign} style={styles.departureContainer}>
                            <Text style={styles.textContainer2}>Czas przyjazdu: {departure.estimatedTime}</Text>
                            <Text style={styles.textContainer3}>Realny czas: {departure.theoreticalTime}</Text>
                            <Text style={styles.textContainer3}>Brygada: {departure.vehicleService}</Text>
                            <Text style={styles.textContainer4}>Kierunek: {departure.headsign}</Text>
                            <Text style={styles.textContainer5}>Linia: {departure.routeId}</Text>
                        </View>
                    ))}
                </View>
                <TouchableOpacity onPress={refreshData} style={styles.button}>
                    <Text style={styles.buttonText}>Odśwież dane</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#480CA8',
        flex: 1,
    },
    textContainer: {
        color: '#F72585',
        fontSize: 40,
    },
    textContainer1: {
        color: '#4CC9F0',
        fontSize: 15,
    },
    textContainer2: {
        color: '#4CC9F0',
        fontSize: 15,
    },
    textContainer3: {
        color: '#4CC9F0',
        fontSize: 15,
    },
    textContainer4: {
        color: '#4CC9F0',
        fontSize: 15,
    },
    textContainer5: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    button: {
        color: '#FFFFFF',
        borderColor: '#asdad',
        borderWidth: 3,
        borderRadius: 10,
    },
    container3: {
        backgroundColor: '#480CA8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
