import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GridItem = ({ name, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#921D24',
    backgroundColor: '#AD2831',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    //paddingBottom: 40,
    //paddingLeft: 40,
    resizeMode: 'contain',
  },
  text: {
    color: '#ffffff',
    fontSize: 10,
  },
});

export default GridItem;
