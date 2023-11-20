import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  FlatList,
  View, 
  SafeAreaView, 
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import { fetchUserData } from '../redux/actions';
import { useDispatch } from 'react-redux';
import GridItem from '../components/GridItem';


export const data = [
  { id: 1, names:'11', desc: 'aa' , imageUrl: 'https://www.tim.pl/media/catalog/product/cache/1/image/1360x768/4fd66541ee5d06ce70358bad7f92aa87/S/A/SA009-Zakaz-parkowania-60-x-60-cm-FN---Folia-samoprzylepna-0001_00018_04032_1_pr_pr.jpg'},
  { id: 2, names:'12',  desc: 'bb' , imageUrl: 'https://image.ceneostatic.pl/data/products/152654607/f-libres-polska-sp-gb041-zakaz-wstepu-bez-odziezy-ochronnej-esd-35x35-cm-ps-plyta-1mm-foto.jpg'},
  { id: 3, names:'ac', desc: 'cc' , imageUrl: 'https://image.ceneostatic.pl/data/products/152654667/f-libres-polska-sp-gb041-zakaz-wstepu-bez-odziezy-ochronnej-esd-35x35-cm-ps-plyta-1mm-foto.jpg'},
  { id: 4, names:'ad', desc: 'dd' , imageUrl: 'https://image.ceneostatic.pl/data/products/152654627/f-libres-polska-sp-gb041-zakaz-wstepu-bez-odziezy-ochronnej-esd-35x35-cm-ps-plyta-1mm-foto.jpg'},
];


function HomeScreen ({ navigation, Tabs }) {

  const dispatch = useDispatch();
  const handleGridItemClick = (id, names, imageUrl) => {
    
    console.log('Object id: ', id);
    console.log('Object name: ', names);
    console.log('Object name: ', imageUrl);

    navigation.navigate('Object');
    dispatch(fetchUserData(id, names, imageUrl));
  };
    
    const auth = getAuth();
    const route = useRoute();
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
          data = {data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleGridItemClick(item.id, item.names, item.imageUrl)}>
            <GridItem name={item.names} imageUrl={item.imageUrl} />
            </TouchableOpacity>
          )}
          numColumns={2}
          />
            <View style={styles.squareBot}>  
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

export default HomeScreen;