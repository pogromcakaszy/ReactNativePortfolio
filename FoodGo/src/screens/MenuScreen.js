import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  Image, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      style={styles.scrollView}
      >
      <View style={styles.container}>
        <Image
          style={styles.hugeLogo}
          source={require('../../assets/img/pizzaLogo.png')}
        />
        <View style={styles.content}>
          {/* This page is used to display every kind of the meals, in future updates you will be able to check for more details. */}
          <View style={styles.gridContainer}>
            <Text style={styles.chooseDietText}>Choose Diet</Text>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText}> SPORT </Text>
                    <Image
                    style={styles.productMenuLogo}
                    source={require('../../assets/img/sportsw.png')}
                  />
                    {/* Pierwszy kwadrat w pierwszym rzędzie */}
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText}> KETO </Text>
                    <Image
                    style={styles.productMenuLogo}
                    source={require('../../assets/img/ketow.png')}
                    />
                      {/* Drugi kwadrat w pierwszym rzędzie */}
                </View>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText}> FISH </Text>
                    <Image
                    style={styles.productMenuLogo}
                    source={require('../../assets/img/fishw.png')}
                  />
                    {/* Pierwszy kwadrat w drugim rzędzie */}
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText}> FRUIT </Text>
                    <Image
                    style={styles.productMenuLogo}
                    source={require('../../assets/img/antipastow.png')}
                  />
                    {/* Drugi kwadrat w drugim rzędzie */}
                </View>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText} numberOfLines={2}> GLUTEN-FREE </Text>
                    <Image
                    style={styles.productMenuLogo}
                    source={require('../../assets/img/gluten-freew.png')}
                    />
                      {/* Pierwszy kwadrat w trzecim rzędzie */}
                </View>
              </View>
              <View style={styles.gridItem}>
              <View style={styles.centeredContent}>
              <Text style={styles.squareText} numberOfLines={2}> PROTEIN </Text>
                <Image
                  style={styles.productMenuLogo}
                  source={require('../../assets/img/proteinw.png')}
                />
                {/* Drugi kwadrat w trzecim rzędzie */}
              </View>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
              <View style={styles.centeredContent}>
                <Text style={styles.squareText}> BULK </Text>
                <Image
                  style={styles.productMenuLogo}
                  source={require('../../assets/img/weight-gainw.png')}
                />
                {/* Pierwszy kwadrat w czwartym rzędzie */}
              </View>
              </View>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText}> VEGE </Text>
                    <Image
                      style={styles.productMenuLogo}
                      source={require('../../assets/img/vegetablew.png')}
                    />
                      {/* Drugi kwadrat w czwartym rzędzie */}
                </View>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText}> ENERGY </Text>
                    <Image
                      style={styles.productMenuLogo}
                      source={require('../../assets/img/thunderboltw.png')}
                    />
                      {/* Pierwszy kwadrat w piątym rzędzie */}
              </View>
              </View>
              <View style={styles.gridItem}>
                <View style={styles.centeredContent}>
                  <Text style={styles.squareText}> DIET </Text>
                    <Image
                      style={styles.productMenuLogo}
                      source={require('../../assets/img/dietw.png')}
                    />
                      {/* Drugi kwadrat w piątym rzędzie */}
              </View>
            </View>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="inverted" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    //marginHorizontal: 20,
  },
  productMenuLogo: {
    width: 30,
    height: 30,
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  backgroundSquare: {
    backgroundColor: '#212121',
    padding: 20,
    margin: 20,
    borderRadius: 20,
    width: 200,
  },
  squareText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'mtt-regular',
    margin: 5,
  },
  buttonNavigateOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 10,
    margin: 10,
    backgroundColor: '#6E5ADF',
    borderRadius: 30,
  },
  buttonHomeText: {
    color: 'white',
    height: 20,
    width: 60,
    fontSize: 16,
    fontFamily: 'mtt-regular',
    textAlign: 'center',
  },
  hugeLogo: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: -20,
  },
  chooseDietText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'mtt-regular',
    letterSpacing: 10,
    marginTop: 40,
    textAlign: 'center',
  },  
  gridContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: '35%',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  gridItem: {
    alignItems: 'center',
    width: 150,
    height: 150,
    backgroundColor: '#212121',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
});

/*

*/