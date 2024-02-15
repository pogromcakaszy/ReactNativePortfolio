import React, { useState, useEffect, useReducer } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import stopId from './stopId';

const apiKey = '5c188f0c-0b40-44ee-9ae1-96b818de8fa5';
const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
  
  const Home = () => {
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [selectedStop, setSelectedStop] = useState(Object.keys(stopId)[0]);
    const [delays, setDelays] = useState([]);
  
    useEffect(() => {
      fetchAllData();
      const intervalId = setInterval(fetchAllData, 20 * 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [selectedStop]);
  
    const fetchAllData = async () => {
      const stopIdArray = stopId[selectedStop];
      
      if (stopIdArray) {
        const allDelays = [];
  
        for (const stopId of stopIdArray) {
          try {
            const apiUrl = `http://ckan2.multimediagdansk.pl/delays?stopId=${stopId}`;
            const response = await axios.get(apiUrl, { headers });
            console.log('Status Code:', response.status);
  
            const fetchedDelays = response.data.delay || [];
            console.log('Fetched Delays:', fetchedDelays);
  
            allDelays.push({ stopId, delays: fetchedDelays });
          } catch (error) {
            console.error('Error:', error);
          }
        }
  
        setDelays(allDelays);
        forceUpdate();
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container3}>
            <View>
              <Text style={styles.textContainer}>Wybierz przystanek:</Text>
              <RNPickerSelect
                onValueChange={(value) => setSelectedStop(value)}
                items={Object.keys(stopId).map((stopName) => ({
                  label: stopName,
                  value: stopName,
                }))}
              />
              <Text style={styles.textContainer}>Aktualne opóźnienia</Text>
              {delays.map(({ stopId, delays: stopDelays }, index) => (
                <View key={index}>
                  {Array.isArray(stopDelays) && stopDelays.length > 0 ? (
                    stopDelays.map((delay, delayIndex) => (
                      <View key={delayIndex} style={styles.delayContainer}>
                        <Text>Realny czas: {delay.estimatedTime}</Text>
                        <Text>Czas przyjazdu: {delay.theoreticalTime}</Text>
                        <Text>Kierunek: {delay.headsign}</Text>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.loadingText}>Brak danych do wyświetlenia</Text>
                  )}
                </View>
              ))}
            </View>
            <TouchableOpacity onPress={fetchAllData} style={styles.button}>
              <Text style={styles.buttonText}>Odśwież dane</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#343A40',
        flex: 1,
    },
    textContainer: {
        color: '#FFFFFF',
        fontSize: 40,
    },
    picker: {
        borderColor: "#FFFFFF",
        borderWidth: 10,
    },
    delayContainer: {
        borderColor: '#343A40',
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#212529',
        borderColor: '#303539',
        borderWidth: 2,
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#F8F9FA',
        fontSize: 18,
        textAlign: 'center',
    },
    container3: {
        backgroundColor: '#495057',
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    delayHeadSignText: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    delayTextContainer : {

    },
});

export default Home;