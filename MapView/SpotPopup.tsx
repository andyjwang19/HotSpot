import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import Spot from '../models/Spot';
import Review, { Rating } from '../models/Review';
import ProfileComponent from '../ProfileComponent';
import ReviewGroup from './ReviewGroup';
import { DragableView } from './DraggableView';
import { useFonts } from 'expo-font';
import RatingGroup from './RatingGroup';

export enum dragResultOptions {
    Normal,
    FullScreen,
    Minimize,
}

interface SpotPopupProps {
    currSpot: Spot;
    dragResult: dragResultOptions;
    setDragResult: (arg0: dragResultOptions) => void;
}

export default function SpotPopup(SpotPopupProps: SpotPopupProps) {
    const { currSpot, dragResult, setDragResult } = SpotPopupProps;
    const [loaded] = useFonts({
        InterBold: require('../assets/Fonts/Inter-Bold.ttf'),
        Inter: require('../assets/Fonts/Inter.ttf'),
    });
    if (!loaded) {
        return null;
    }

    return (
        <DragableView style={styles.scrollContainer} setDragResult={setDragResult}>
            <View style={styles.handle} />
            <Text style={styles.spotName}>{currSpot.name}</Text>
            <View style={styles.ratingContainer}>
                <RatingGroup />
            </View>
            <ScrollView
                horizontal
                style={styles.imageCarousel}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.imageContainer}>
                    <View style={[styles.spotImages, styles.firstImage]}></View>
                    <View style={[styles.spotImages]}></View>
                    <View style={[styles.spotImages]}></View>
                    <View style={[styles.spotImages]}></View>
                    <View style={[styles.spotImages]}></View>
                </View>
            </ScrollView>
            <View style={styles.reviewsContainer}>
                {Array.isArray(currSpot.reviews) ? (
                    currSpot.reviews[0] ? (
                        <ReviewGroup review={currSpot.reviews[0] as Review} />
                    ) : null
                ) : null}
                {Array.isArray(currSpot.reviews) ? (
                    currSpot.reviews[1] ? (
                        <ReviewGroup review={currSpot.reviews[1] as Review} />
                    ) : null
                ) : null}
            </View>
        </DragableView>
    );
}
const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        ...StyleSheet.absoluteFillObject,
    },
    scrollContainer: {
        width: '100%',
        height: 880,
        position: 'absolute',
        bottom: -475,
        borderRadius: 20,
        backgroundColor: 'white',
    },

    spotName: {
        fontSize: 20,
        left: 22,
        top: 28,
        fontFamily: 'InterBold',
    },
    ratingContainer: {
        top: 45,
        left: 25,
    },
    handle: {
        width: 50,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 3,
        top: 14.46,
        left: 170,
    },

    imageCarousel: {
        width: '100%',
        height: 124,
        top: 123 - 65,
    },
    imageContainer: {
        left: 25,
        flexDirection: 'row',
    },
    spotImages: {
        width: 141,
        height: 124,
        borderRadius: 10,
        backgroundColor: 'black',
        marginRight: 12,
        flex: 1,
    },
    firstImage: {
        // left: 25,
    },

    reviewsContainer: {
        position: 'absolute',
        width: 351,
        height: 92,
        left: 20,
        top: 269,
        display: 'flex',
        flexDirection: 'row',
    },
});
