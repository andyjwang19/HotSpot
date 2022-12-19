import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import { createRef, useState, useEffect } from 'react';

import mapStyle from './mapStyle.json';

import Filters from './Filters';
import SpotPopup, { dragResultOptions } from './SpotPopup';

import { Activity, FilterOptions } from '../models/filters';
import Spot from '../models/Spot';
import DataLoader from './DataLoader';

// import spotsData from '../data/spots.json';
import FullScreenSpot from './FullScreenSpot';
import SuggestSpot from '../SuggestSpot';

function parseSpotsData(spots: Spot[]) {
    return new Map(spots.map((s) => [s.id, s]));
}

interface MainProps {
    filters: FilterOptions;
    setFilters: (arg0: FilterOptions) => void;
}
export default function Main({ filters, setFilters }: MainProps) {
    const [suggestSpotSelected, setSuggestSpotSelected] = useState<boolean>(false);
    const loader = new DataLoader();
    const spotsData = loader.loadSpots();
    const spotsMap = parseSpotsData(spotsData);

    // const [filters, setFilters] = useState<FilterOptions>({
    //     foodSelected: false,
    //     drinkSelected: false,
    //     funSelected: false,
    //     price: 0,
    // });

    const [dragResult, setDragResult] = useState<dragResultOptions>(dragResultOptions.Minimize);

    const [currSpot, setCurrSpot] = useState<Spot>();
    const mapView = createRef<MapView>();
    const updateCurrSpotFromId = (c: { id: number; latitude: number; longitude: number }) => {
        const currSpotData = spotsMap.get(c.id);
        if (
            currSpotData === undefined ||
            currSpotData.name === undefined ||
            currSpotData.activityType === undefined
            // currSpotData.suggestor === undefined
        ) {
            console.log(`ERROR: SPOT JSON CORRUPT, has undefined parameters in `);
            // crash? idk
        } else {
            setDragResult(dragResultOptions.Normal);
            setCurrSpot({
                id: c.id,
                name: currSpotData.name,
                activityType: currSpotData.activityType as unknown as Activity,
                // suggestor: currSpotData.suggestor,
                reviews: currSpotData.reviews,
                latitude: currSpotData.latitude,
                longitude: currSpotData.longitude,
            });
        }
        mapView.current?.animateToRegion(
            {
                // Takes a region object as parameter
                longitude: c.longitude,
                latitude: c.latitude - 0.0035,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
            500
        );
    };

    useEffect(() => {
        if (dragResult === dragResultOptions.Minimize) {
            setCurrSpot(undefined);
        }
    }, [dragResult]);

    const aniRegion = new AnimatedRegion();

    const filterSpots = (spotsToFilter: Spot[], filter: FilterOptions) => {
        if (!(filter.drinkSelected || filter.foodSelected || filter.funSelected)) {
            return spotsToFilter;
        }
        return spotsToFilter.filter((s) => {
            return (
                (filter.foodSelected ? s.activityType === Activity.Food : false) ||
                (filter.drinkSelected ? s.activityType === Activity.Drink : false) ||
                (filter.funSelected ? s.activityType === Activity.Fun : false)
            );
        });
    };

    return !suggestSpotSelected ? (
        dragResult !== dragResultOptions.FullScreen ? (
            <View style={styles.container}>
                <Filters filters={filters} setFilters={setFilters} />
                <MapView
                    ref={mapView}
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={mapStyle}
                    showsUserLocation={true}
                    // region={{
                    //     latitude: currSpot ? currSpot.latitude - 0.0035 : 40.806358,
                    //     longitude: currSpot ? currSpot.longitude : -73.962389,
                    //     latitudeDelta: currSpot ? 0.01 : 0.0222,
                    //     longitudeDelta: currSpot ? 0.01 : 0.0111,
                    // }}
                    region={{
                        latitude: 40.806358,
                        longitude: -73.962389,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0111,
                    }}
                    onMarkerPress={(e) =>
                        updateCurrSpotFromId({
                            id: parseInt(e.nativeEvent.id),
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })
                    }
                >
                    {filterSpots(spotsData, filters)?.map((s) => {
                        if ((s.activityType as unknown as Activity) === Activity.Food) {
                            return (
                                <Marker
                                    key={s.id}
                                    coordinate={{ latitude: s.latitude, longitude: s.longitude }}
                                    identifier={s.id.toString()}
                                    icon={require('../assets/Icons/foodGeotag.png')}
                                />
                            );
                        } else if ((s.activityType as unknown as Activity) === Activity.Drink) {
                            return (
                                <Marker
                                    key={s.id}
                                    coordinate={{ latitude: s.latitude, longitude: s.longitude }}
                                    identifier={s.id.toString()}
                                    icon={require('../assets/Icons/drinkGeotag.png')}
                                />
                            );
                        } else {
                            return (
                                <Marker
                                    key={s.id}
                                    coordinate={{ latitude: s.latitude, longitude: s.longitude }}
                                    identifier={s.id.toString()}
                                    icon={require('../assets/Icons/funGeotag.png')}
                                />
                            );
                        }
                    })}
                </MapView>
                {currSpot !== undefined && currSpot !== null ? (
                    <SpotPopup
                        currSpot={currSpot}
                        dragResult={dragResult}
                        setDragResult={setDragResult}
                    />
                ) : (
                    <TouchableOpacity
                        onPress={() => setSuggestSpotSelected(true)}
                        style={styles.suggestSpotButton}
                    >
                        <Text style={styles.suggestSpotButtonText}>Suggest a Spot</Text>
                    </TouchableOpacity>
                )}
            </View>
        ) : (
            <FullScreenSpot currSpot={currSpot} setDragResult={setDragResult} />
        )
    ) : (
        <View style={styles.container}>
            <SuggestSpot setSuggestSpotSelected={setSuggestSpotSelected} />
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
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    suggestSpotButton: {
        width: 291,
        height: 74,
        position: 'absolute',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        bottom: 37 + 18,
        left: 49,
    },
    suggestSpotButtonText: {
        fontFamily: 'Inter',
        fontSize: 25,
        marginTop: 19,
        textAlign: 'center',
    },
});
