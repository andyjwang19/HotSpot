import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

import Spot from '../models/Spot';
import RatingGroup from './RatingGroup';
import ImageCarouselGroup from './ImageCarouselGroup';

interface FullScreenSpotProps {
    currSpot: Spot | undefined;
}
export default function FullScreenSpot(FullScreenSpotProps: FullScreenSpotProps) {
    const [loaded] = useFonts({
        InterBold: require('../assets/Fonts/Inter-Bold.ttf'),
        Inter: require('../assets/Fonts/Inter.ttf'),
    });
    if (!loaded) {
        return null;
    }

    const { currSpot } = FullScreenSpotProps;
    if (currSpot === undefined) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.spotInfo}>
                <View style={styles.spotBlurb}>
                    <Text style={styles.spotName}>{currSpot?.name}</Text>
                    <Text style={styles.spotAddress}>1234 W Streetname, New York, NY</Text>
                    <Text style={styles.spotNumReviews}>12 Reviews</Text>
                    <View style={styles.ratingGroup}>
                        <RatingGroup />
                    </View>
                    <View style={styles.imageCarouselContainer}>
                        <ImageCarouselGroup />
                    </View>
                </View>
            </View>
            <View style={styles.reviewContainer}></View>
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
    spotInfo: {},
    spotName: {
        textAlign: 'center',
        fontFamily: 'InterBold',
        fontSize: 25,
    },
    spotAddress: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 10,
        top: 2,
    },
    spotNumReviews: {
        textAlign: 'center',
        fontFamily: 'InterBold',
        fontSize: 10,
        top: 7,
    },
    spotBlurb: { alignItems: 'center' },
    ratingGroup: {
        marginTop: 10,
        // left: 134 - 25,
    },
    imageCarouselContainer: {
        width: '100%',
        top: -50,
        // left: 161 + 23,
    },

    reviewContainer: {},
});
