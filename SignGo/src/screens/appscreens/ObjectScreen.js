import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';

const ObjectScreen = () => {
  
  const selectedObjectId = useSelector((state) => state.id);
  const selectedObjectName = useSelector((state) => state.names);
  const selectedObjectImage = useSelector((state) => state.imageUrl);

  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Text>ID: {selectedObjectId}</Text>
      <Text>NAME: {selectedObjectName}</Text>
      {selectedObjectImage && (
        <Image
          source={{ uri: selectedObjectImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
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
    squareTop: {
        padding: '40%',
        backgroundColor: '#38040E',
        position: 'absolute',
        top: 30, 
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareBot: {
        backgroundColor: '#800E13',
        //top: 70,
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
});
export default ObjectScreen;
