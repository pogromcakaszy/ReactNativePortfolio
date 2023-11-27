import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  FlatList,
  View, 
  SafeAreaView, 
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import { fetchUserData } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import GridItem from '../../components/GridItem';
import { data } from '../data/signdata';


function HomeScreen ({ navigation, Tabs }) {

  const dispatch = useDispatch();
  const handleGridItemClick = (id, names, imageUrl, desc) => {
    
    console.log('Object id: ', id);
    console.log('Object name: ', names);
    console.log('Object img: ', imageUrl);
    console.log('Object desc: ', desc);


    navigation.navigate('Object');
    dispatch(fetchUserData(id, names, imageUrl, desc));
  };
    
    const auth = getAuth();
    const route = useRoute();
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.squareBot}>  
            <FlatList
              contentContainerStyle={styles.flatlist}
              data = {data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleGridItemClick(item.id, item.names, item.imageUrl, item.desc)}>
            <GridItem name={item.names} imageUrl={item.imageUrl} />
            </TouchableOpacity>
              )}
              numColumns={4}
            />
          </View>
        </View>
      </SafeAreaView>
    );
}

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
        borderRadius: 40,
    },
    button: {
      backgroundColor: '#FFFFFF',
      padding: '15%',
      height: '50%',
      borderRadius: 40,
    },
    flatlist: {
      justifyContent: 'center',
      flexGrow: 1,
    },  
});

export default HomeScreen;