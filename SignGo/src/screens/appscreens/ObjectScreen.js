import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';

const ObjectScreen = () => {
  
  const selectedObjectId = useSelector((state) => state.id);
  const selectedObjectName = useSelector((state) => state.names);
  const selectedObjectImage = useSelector((state) => state.imageUrl);
  const selectedObjectDesc = useSelector((state) => state.desc);

  return (
    <View style={styles.container}>
      <View style={styles.squareBot}>  
        <View style={styles.squareTop}>  
          <Image 
          source={{ uri: selectedObjectImage }}
          style={styles.image}
          />
        </View>
          <Text style={styles.textId}> ID: {selectedObjectId}</Text>
          <Text style={styles.textName}> {selectedObjectName}</Text>
          <Text style={styles.textDesc}> {selectedObjectDesc}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800E13',
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareBot: {
        backgroundColor: '#38040E',
        padding: '15%',
        height: '50%',
        borderRadius: 40,
    },
    button: {
      backgroundColor: '#FFFFFF',
      padding: '15%',
      height: '50%',
      borderRadius: 40,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textId: {
      fontSize: 20,
      color: '#ffffff',
      fontFamily: 'Montserrat',
      textAlign: 'center',
    },
    textDesc: {
      color: '#ffffff',
      fontFamily: 'Montserrat',
      fontSize: 15,
      textAlign: 'center',
    },
    textName: {
      color: '#ffffff',
      fontFamily: 'Montserrat',
      fontSize: 30,
      textAlign: 'center',
    },
    squareTop: {
      justifyContent: 'center',
      alignItems: 'center',
    },
});
export default ObjectScreen;
