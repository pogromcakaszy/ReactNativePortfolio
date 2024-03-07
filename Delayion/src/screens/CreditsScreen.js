import React, { useState, useEffect, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import stopId from "../data/stopId";
import routeId, { getRouteName } from "../data/routeId";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../styles/styles";

const apiKey = "5c188f0c-0b40-44ee-9ae1-96b818de8fa5";
const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

const Credits = () => {
  const screenHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainBlock}>
          <Text style={styles.textContainer}>O aplikacji</Text>
        </View>
        <View style={styles.midBlock}>
          <Text style={styles.textCredits}>
            Dane są pozyskane z Zarządu Transportu Miejskiego w Gdańsku {"\n"}
          </Text>
        </View>

        <Text style={styles.textContainer}>
          Aplikacja została opracowana przez Kacper Czech
        </Text>

        <Text style={styles.disclaimer1}>
          Dane mają charakter orientacyjny {"\n"}Twórca nie ponosi
          odpowiedzialności{"\n"} za prawdziwość danych
        </Text>
        <Text style={styles.textContainer}>
          Przydała Ci się moja praca? Wesprzyj mnie
        </Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/img/kofi.png")}
            style={styles.kofi}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Credits;
