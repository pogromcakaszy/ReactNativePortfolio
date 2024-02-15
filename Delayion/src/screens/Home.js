import React, { useState, useEffect, useReducer } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const apiKey = '5c188f0c-0b40-44ee-9ae1-96b818de8fa5';
const stopId = 31430;
const apiUrl = `http://ckan2.multimediagdansk.pl/delays?stopId=${stopId}`;

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
};

const Home = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [delays, setDelays] = useState([]);
  
    useEffect(() => {
      fetchData();
      const intervalId = setInterval(fetchData, 20 * 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl, { headers });
          console.log('Status Code:', response.status);
          console.log('Response Data:', response.data);
      
          const fetchedDelays = response.data.delay || [];
          console.log('Fetched Delays:', fetchedDelays);
      
          setDelays(fetchedDelays);
          forceUpdate();
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
    const refreshData = async () => {
      await fetchData();
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container3}>
            <View>
              <Text style={styles.textContainer}>Aktualne opóźnienia</Text>
              {Array.isArray(delays) && delays.length > 0 ? (
                delays.map((delay, index) => (
                  <View key={index} style={styles.delayContainer}>
                    <Text>Czas przyjazdu: {delay.estimatedTime}</Text>
                    <Text>Realny czas: {delay.theoreticalTime}</Text>
                    <Text>Brygada: {delay.vehicleService}</Text>
                    <Text>Kierunek: {delay.headsign}</Text>
                    <Text>Linia: {delay.routeId}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.loadingText}>Brak danych do wyświetlenia</Text>
              )}
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
  delayContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#F72585',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  container3: {
    backgroundColor: '#480CA8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;