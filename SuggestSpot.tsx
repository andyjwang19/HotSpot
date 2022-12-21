import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import RatingIcon from './assets/Icons/RatingIcon';
import { Rating } from './models/Review';

interface SuggestSpotProps {
    setSuggestSpotSelected: (arg0: boolean) => void;
}

const GooglePlacesInput = () => {
    return (
        <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: 'AIzaSyBwhoGsaLhCOiRPjzuHm6c5yY1_erxQwRM',
                language: 'en',
            }}
        />
    );
};

export default function SuggestSpot({ setSuggestSpotSelected }: SuggestSpotProps) {
    const [reviewFilter, setReviewFilter] = useState<Rating>();
    const [loaded] = useFonts({
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        Inter: require('./assets/Fonts/Inter.ttf'),
    });
    if (!loaded) {
        return null;
    }

    const flipReviewFilter = (r: Rating) => {
        if (reviewFilter === r) {
            setReviewFilter(undefined);
        } else {
            setReviewFilter(r);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setSuggestSpotSelected(false)} style={styles.button}>
                <Image
                    source={require('./assets/Icons/Polygon.png')}
                    resizeMode="stretch"
                    style={styles.backButton}
                />
            </TouchableOpacity>
            <View style={styles.suggestContainer}>
                <Text style={styles.suggestTitle}>Suggest a Spot</Text>
                <View style={styles.searchBar}>
                    <GooglePlacesInput />
                </View>

                {/* <TextInput
                    style={styles.searchBar}
                    placeholder="   Search your spot"
                    keyboardType="default"
                /> */}
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingTitle}>Do you love, like, or okay this spot?</Text>
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
                            onPress={() => flipReviewFilter(Rating.OKAY)}
                            style={styles.button}
                        >
                            {reviewFilter === Rating.OKAY ? (
                                <RatingIcon
                                    rating={Rating.OKAY}
                                    empty={false}
                                    style={[styles.ratingIcons, styles.okayIconPosition]}
                                />
                            ) : (
                                <RatingIcon
                                    rating={Rating.OKAY}
                                    empty={true}
                                    style={[styles.ratingIcons, styles.okayIconPosition]}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.whySuggest}
                        placeholder="   Why do you suggest this spot?"
                        multiline={true}
                        keyboardType="default"
                    />
                    <View style={styles.uploadPhoto}>
                        <Image
                            source={require('./assets/Icons/camera.png')}
                            resizeMode="contain"
                            style={styles.cameraImage}
                        />
                        <Text style={styles.uploadPhotoText}>Upload Photos</Text>
                    </View>
                    {reviewFilter !== undefined ? (
                        <TouchableOpacity
                            onPress={() => setSuggestSpotSelected(false)}
                            style={[
                                styles.suggestButton,
                                reviewFilter === Rating.LOVE
                                    ? { borderColor: '#FFE3EA', backgroundColor: '#EF476F' }
                                    : reviewFilter === Rating.LIKE
                                    ? { borderColor: '#FFEECB', backgroundColor: '#FFC43D' }
                                    : reviewFilter === Rating.OKAY
                                    ? { borderColor: '#D9FBFF', backgroundColor: '#1F9BAB' }
                                    : null,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.suggestButtonText,
                                    reviewFilter === Rating.LOVE
                                        ? { color: '#FFE3EA' }
                                        : reviewFilter === Rating.LIKE
                                        ? { color: '#FFEECB' }
                                        : reviewFilter === Rating.OKAY
                                        ? { color: '#D9FBFF' }
                                        : null,
                                ]}
                            >
                                Suggest this spot!
                            </Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'blue',
    },
    suggestContainer: {
        // ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
    },
    backButton: {
        zIndex: 6,
        width: 20,
        height: 6,
        position: 'absolute',
        top: 15,
        left: 13,
        opacity: 0.2,
        transform: [{ scaleY: -1 }],
        // backgroundColor: 'red',
    },

    suggestTitle: {
        // marginTop: 100,
        // marginLeft: 100,
        width: 149,
        height: 24,
        // backgroundColor: 'red',
        fontSize: 20,
        fontFamily: 'InterBold',
    },
    searchBar: {
        width: 348,
        height: 48,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        marginTop: 45,
    },

    ratingContainer: { marginTop: 45 },
    ratingTitle: {
        fontFamily: 'Inter',
        fontSize: 20,
    },
    // reviewContainer: {

    //     marginTop: 0,
    // },
    reviewFilter: {},
    reviewFilterText: {
        fontFamily: 'Inter',
        fontSize: 15,
    },
    reviewFilterOptions: {
        flexDirection: 'row',
        // borderWidth: 2,
        // borderColor: 'red',
        width: 122,
        height: 20,
        marginLeft: 134 - 28,
        marginTop: 8,
    },
    button: {
        zIndex: 5,
        width: 20,
        height: 30,
        marginRight: 31,
    },
    ratingIcons: {
        // marginTop: 8,
        width: 20,
        height: 20,
        // position: 'absolute',
        // borderWidth: 2,
        // borderColor: 'black',
        // marginBottom: 15,
    },
    loveIconPosition: { marginRight: 31 },
    likeIconPosition: { marginRight: 31 },
    okayIconPosition: {},

    whySuggest: {
        width: 348,
        height: 187,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        marginTop: 46,
    },

    uploadPhoto: {
        width: 348,
        height: 61,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        marginTop: 45,
        flexDirection: 'row',
    },
    cameraImage: {
        width: 70,
        height: 70,
        marginTop: -7,

        // backgroundColor: 'red',
    },
    uploadPhotoText: {
        fontFamily: 'Inter',
        fontSize: 15,
        color: '#8E8E8E',
        marginTop: 20,
        marginLeft: 54,
    },
    suggestButton: {
        width: 349,
        height: 67,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        marginTop: 45,
    },
    suggestButtonText: {
        fontFamily: 'Inter',
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },
});
