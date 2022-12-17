import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, CalloutSubview } from 'react-native-maps';
import { useState, useEffect } from 'react';

import Filters from './Filters';
import SpotPopup from './SpotPopup';

import { Activity, FilterOptions } from '../models/filters';
import Spot from '../models/Spot';
import spotsData from '../data/spots.json';

function parseSpotsData() {
    return new Map(spotsData.map((s) => [s.id, s]));
}

export default function Main() {
    const spotsMap = parseSpotsData();

    const [filters, setFilters] = useState({} as FilterOptions);
    const _setFilters = (e: FilterOptions) => {
        console.log(`from comp`, e);
        console.log(`curr filt`, filters);
        if (filters.activities === e.activities) {
            setFilters({ activities: Activity.None, price: e.price });
        } else {
            setFilters(e);
        }
    };

    const [currSpot, setCurrSpot] = useState<Spot>();
    const updateCurrSpotFromId = (c: { id: number; latitude: number; longitude: number }) => {
        const currSpotData = spotsMap.get(c.id);
        if (
            currSpotData === undefined ||
            currSpotData.name === undefined ||
            currSpotData.activtyType === undefined ||
            currSpotData.suggestor === undefined
        ) {
            console.log(`ERROR: SPOT JSON CORRUPT, has undefined parameters in `);
            // crash? idk
        } else {
            setCurrSpot({
                id: c.id,
                name: currSpotData.name,
                activityType: currSpotData.activtyType as unknown as Activity,
                suggestor: currSpotData.suggestor,
                reviews: [],
                latitude: c.latitude,
                longitude: c.longitude,
            });
        }
    };
    console.log(`currSpot`, currSpot);
    return (
        <View style={styles.container}>
            <Filters filters={filters} setFilters={_setFilters} />
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 40.806358,
                    longitude: -73.962389,
                    latitudeDelta: 0.0722,
                    longitudeDelta: 0.0121,
                }}
                onMarkerPress={(e) =>
                    updateCurrSpotFromId({
                        id: parseInt(e.nativeEvent.id),
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    })
                }
            >
                {spotsData?.map((s) => (
                    <Marker
                        key={s.id}
                        coordinate={{ latitude: s.latitude, longitude: s.longitude }}
                        identifier={s.id.toString()}
                    />
                ))}
            </MapView>
            {currSpot !== undefined && currSpot !== null ? <SpotPopup currSpot={currSpot} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        postion: 'absolute',
        top: 120,
        left: 0,
        width: '100%',
        height: Dimensions.get('window').height - 95,
        backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
