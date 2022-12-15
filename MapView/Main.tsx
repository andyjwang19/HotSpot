import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Filters from './Filters'

export default function Main() {
  return (
    <View style={styles.container}>
      <Filters />
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} showsUserLocation={true}
            initialRegion={{
            latitude:40.806358,
            longitude:-73.962389,
            latitudeDelta: 0.0722,  
            longitudeDelta: 0.0121,
            }} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    postion:"absolute",
    top:120,
    left:0,
    width:"100%",
    height: Dimensions.get('window').height - 95,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
