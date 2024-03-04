import React, { useState, useEffect, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import stopId from "../data/stopId";
import routeId, { getRouteName } from "../data/routeId"; // Import the getRouteName function

const apiKey = "5c188f0c-0b40-44ee-9ae1-96b818de8fa5";
const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

const Home = () => {
  const screenHeight = Dimensions.get("window").height;

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
          console.log("Status Code:", response.status);

          const fetchedDelays = response.data.delay || [];
          console.log("Fetched Delays:", fetchedDelays);

          allDelays.push({ stopId, delays: fetchedDelays });
        } catch (error) {
          console.error("Error:", error);
        }
      }
      setDelays(allDelays);
      forceUpdate();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainBlock}>
          <Text style={styles.textContainer}>Wybierz przystanek:</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedStop(value)}
            items={Object.keys(stopId).map((stopName) => ({
              label: stopName,
              value: stopName,
            }))}
            style={styles.pickerStyle}
          />
        </View>

        <View style={styles.midBlock}>
          <Text style={styles.textContainer}>Odjazdy z przystanku </Text>
          {delays.map(
            ({ delays: stopDelays }, index) => (
              stopDelays.sort((a, b) => {
                const timeA = new Date(a.estimatedTime);
                const timeB = new Date(b.estimatedTime);
                return timeA - timeB;
              }),
              (
                <View key={index}>
                  {Array.isArray(stopDelays) && stopDelays.length > 0 ? (
                    stopDelays.map((delay, delayIndex) => (
                      <View key={delayIndex} style={styles.delayContainer}>
                        <Text style={styles.textTime}>
                          Czas przyjazdu: {delay.theoreticalTime}
                        </Text>
                        <Text style={styles.textTime}>
                          Realny czas: {delay.estimatedTime}
                        </Text>
                        <Text style={styles.textTime}>
                          Kierunek: {delay.headsign}
                        </Text>
                        <Text style={styles.textTime}>
                          Linia: {getRouteName(delay.routeId)}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.loadingText}>
                      Wygląda na to, że nic narazie nie ma
                    </Text>
                  )}
                </View>
              )
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flex: 1,
  },
  mainBlock: {
    backgroundColor: "#232323",
    margin: 20,
  },
    midBlock: {
    backgroundColor: "#111111",
  },
  textContainer: {
    textAlign: 'center',
    color: "white",
    fontSize: 30,
    fontFamily: "Montserrat",
    margin: 10,
  },
  delayContainer: {
    backgroundColor: "#343434",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  delayHeadSignText: {
    color: "red",
    fontSize: 30,
    fontFamily: "Montserrat",
  },
  textTime: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 15,
  },
  pickerStyle: {
    inputIOS: {
      color: "white",
      alignSelf: "center",
      borderRadius: 5,
      fontSize: 20,
      fontFamily: "Montserrat",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
    },
    placeholder: {
      color: "white",
    },
    inputAndroid: {
      color: "white",
      alignSelf: "center",
      borderRadius: 5,
      fontSize: 20,
      fontFamily: "Montserrat",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
    },
  },
  loadingText: {
    color: "white",
    fontFamily: "Montserrat",
  },
});

export default Home;
