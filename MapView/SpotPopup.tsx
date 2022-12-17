import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Spot from '../models/Spot';

export default function SpotPopup(SpotPopupProps: { currSpot: Spot }) {
    const selectedSpot = SpotPopupProps.currSpot;
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.handle} />
            <Text style={styles.spotName}>{selectedSpot.name}</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        ...StyleSheet.absoluteFillObject,
    },
    scrollContainer: {
        width: '100%',
        height: 380,
        position: 'absolute',
        bottom: 25,
        borderRadius: 20,
        backgroundColor: 'white',
    },

    spotName: {
        fontSize: 20,
        left: 22,
        top: 28,
    },
    handle: {
        width: 50,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 3,
        top: 14.46,
        left: 170,
    },
});
