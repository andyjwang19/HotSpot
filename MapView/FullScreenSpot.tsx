import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

import Spot from '../models/Spot';
import RatingGroup from './RatingGroup';
import ImageCarouselGroup from './ImageCarouselGroup';
import ReviewGroup from './ReviewGroup';
import { dragResultOptions } from './SpotPopup';
import Review, { Rating } from '../models/Review';
import ReviewGroupFullScreen from './ReviewGroupFullScreen';
import RatingIcon from '../assets/Icons/RatingIcon';

interface FullScreenSpotProps {
    currSpot: Spot | undefined;
    setDragResult: (arg0: dragResultOptions) => void;
}
export default function FullScreenSpot(FullScreenSpotProps: FullScreenSpotProps) {
    const [reviewFilter, setReviewFilter] = useState<Rating>();
    const [loaded] = useFonts({
        InterBold: require('../assets/Fonts/Inter-Bold.ttf'),
        Inter: require('../assets/Fonts/Inter.ttf'),
    });
    if (!loaded) {
        return null;
    }

    const flipReviewFilter = (r: Rating) => {
        if (reviewFilter === r) {
            console.log(`WORKS`);
            setReviewFilter(undefined);
            console.log(`rev Filt`, reviewFilter);
        } else {
            setReviewFilter(r);
        }
    };

    const filterReviews = (reviews: Review[], filter: Rating | undefined) => {
        if (filter === undefined) {
            return reviews;
        }
        return reviews.filter((r) => r.rating === filter);
    };

    const { currSpot, setDragResult } = FullScreenSpotProps;
    if (currSpot === undefined) {
        return null;
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.reviewScrollContainer}>
                <View style={styles.spotInfo}>
                    <TouchableOpacity
                        onPress={() => setDragResult(dragResultOptions.Normal)}
                        style={styles.button}
                    >
                        <Image
                            source={require('../assets/Icons/Polygon.png')}
                            resizeMode="stretch"
                            style={styles.backButton}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('../assets/Icons/bookmark.png')}
                        resizeMode="contain"
                        style={styles.bookmarkButton}
                    />
                    <Image
                        source={require('../assets/Icons/information-circle.png')}
                        resizeMode="contain"
                        style={styles.informationButton}
                    />
                    <View style={styles.spotBlurb}>
                        <Text style={styles.spotName}>{currSpot?.name}</Text>
                        <Text style={styles.spotAddress}>1234 W Streetname, New York, NY</Text>
                        <Text
                            style={styles.spotNumReviews}
                        >{`${currSpot.reviews.length} Reviews`}</Text>
                        <View style={styles.ratingGroup}>
                            <RatingGroup />
                        </View>
                        <View style={styles.imageCarouselContainer}>
                            <ImageCarouselGroup />
                            <Text style={styles.seePhotoText}>See all photos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewFilter}>
                        <Text style={styles.reviewFilterText}>Filter reviews</Text>
                        <View style={styles.reviewFilterOptions}>
                            <TouchableOpacity
                                onPress={() => flipReviewFilter(Rating.LOVE)}
                                style={styles.button}
                            >
                                {reviewFilter === Rating.LOVE ? (
                                    <RatingIcon
                                        rating={Rating.LOVE}
                                        empty={false}
                                        style={[styles.ratingIcons, styles.loveIconPosition]}
                                    />
                                ) : (
                                    <RatingIcon
                                        rating={Rating.LOVE}
                                        empty={true}
                                        style={[styles.ratingIcons, styles.loveIconPosition]}
                                    />
                                )}
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => flipReviewFilter(Rating.LIKE)}
                                style={styles.button}
                            >
                                {reviewFilter === Rating.LIKE ? (
                                    <RatingIcon
                                        rating={Rating.LIKE}
                                        empty={false}
                                        style={[styles.ratingIcons, styles.likeIconPosition]}
                                    />
                                ) : (
                                    <RatingIcon
                                        rating={Rating.LIKE}
                                        empty={true}
                                        style={[styles.ratingIcons, styles.likeIconPosition]}
                                    />
                                )}
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => flipReviewFilter(Rating.MID)}
                                style={styles.button}
                            >
                                {reviewFilter === Rating.MID ? (
                                    <RatingIcon
                                        rating={Rating.MID}
                                        empty={false}
                                        style={[styles.ratingIcons, styles.okayIconPosition]}
                                    />
                                ) : (
                                    <RatingIcon
                                        rating={Rating.MID}
                                        empty={true}
                                        style={[styles.ratingIcons, styles.okayIconPosition]}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.reviewsContainer}>
                        {filterReviews(currSpot.reviews, reviewFilter).map((r) => {
                            return <ReviewGroupFullScreen key={r.id} review={r as Review} />;
                        })}
                    </View>
                </View>
            </ScrollView>
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
    backButton: {
        zIndex: 6,
        width: 20,
        height: 6,
        position: 'absolute',
        top: 15,
        left: 13,
        transform: [{ scaleY: -1 }],
        // backgroundColor: 'red',
    },
    bookmarkButton: {
        position: 'absolute',
        width: 24,
        height: 24,
        left: 326,
        top: 13,
    },
    informationButton: {
        position: 'absolute',
        width: 24,
        height: 24,
        left: 355,
        top: 13,
    },

    spotName: {
        textAlign: 'center',
        fontFamily: 'InterBold',
        fontSize: 25,
        marginTop: 13,
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
        marginTop: 7,
        // borderColor: 'red',
        // borderWidth: 2,
        // left: 161 + 23,
    },
    seePhotoText: {
        fontSize: 12,
        fontFamily: 'Inter',
        textDecorationLine: 'underline',
        marginLeft: 25,
        marginTop: 5,
    },

    reviewContainer: {
        alignItems: 'center',
        marginTop: 0,
    },
    reviewFilter: {},
    reviewFilterText: {
        fontFamily: 'Inter',
        fontSize: 15,
    },
    reviewFilterOptions: {
        flexDirection: 'row',
    },
    button: {
        zIndex: 5,
        width: 30,
        height: 30,
    },

    ratingIcons: {
        marginTop: 8,
        width: 20,
        height: 20,
        // position: 'absolute',
        // borderWidth: 2,
        // borderColor: 'black',
        marginBottom: 15,
    },
    loveIconPosition: { marginRight: 15 },
    likeIconPosition: { marginRight: 15 },
    okayIconPosition: {},

    reviewScrollContainer: {},
    reviewsContainer: {
        height: 600,
        flex: 1,
        // borderWidth: 2,
        // borderColor: 'red',
    },
});
