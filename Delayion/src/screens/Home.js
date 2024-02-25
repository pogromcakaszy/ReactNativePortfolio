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
import stopId from '../data/stopId';

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
        <View style={styles.mainContainer}>
          <View style={styles.secondContainer}>
            <Text style={styles.textContainer}>Wybierz przystanek:</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedStop(value)}
              items={Object.keys(stopId).map((stopName) => ({
                label: stopName,
                value: stopName,
              }))}
              
              style={styles.pickerStyle}
            />
            <View style={styles.thirdContainer}>
              <Text style={styles.textContainer}>Odjazdy z przystanku</Text>
              {delays.map(({ delays: stopDelays }, index) => (
                stopDelays.sort((a, b) => {
                  const timeA = new Date(a.estimatedTime);
                  const timeB = new Date(b.estimatedTime);
                  return timeA - timeB;
                }),
                <View key={index}>
                  {Array.isArray(stopDelays) && stopDelays.length > 0 ? (
                    stopDelays.map((delay, delayIndex) => (
                      <View key={delayIndex} style={styles.delayContainer}>
                        <Text style={styles.textTime}>Czas przyjazdu: {delay.theoreticalTime}</Text>
                        <Text style={styles.textTime}>Realny czas: {delay.estimatedTime}</Text>
                        <Text style={styles.textTime}>Kierunek: {delay.headsign}</Text>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.loadingText}>Wygląda na to, że kolejnego narazie nie ma</Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001D34',
    flex: 1,
  },
  textContainer: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Montserrat',
    margin: 10,
  },
  cityPickText: {
    alignContent: 'center',
    borderColor: "purple",
    borderWidth: 10,
  },
  delayContainer: {
    backgroundColor: '#003967',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  mainContainer: {
    backgroundColor: '#00294A',
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delayHeadSignText: {
    color: 'red',
    fontSize: 30,
    fontFamily: 'Montserrat',
  },
  textTime: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 15,
  },
  pickerStyle: {
    inputIOS: {
      color: 'white',
      alignSelf: 'center',
      borderRadius: 5,
      fontSize: 20,
      fontFamily: 'Montserrat',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
    },
    placeholder: {
      color: 'white',
    },
    inputAndroid: {
      color: 'white',
      alignSelf: 'center',
      borderRadius: 5,
      fontSize: 20,
      fontFamily: 'Montserrat',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
    },
  },
  loadingText: {
    color: 'white',
    fontFamily: 'Montserrat',
  },  
});

export default Home;