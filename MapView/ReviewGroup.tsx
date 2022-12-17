import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import ProfileComponent from '../ProfileComponent';

import Review from '../models/Review';
import { Rating } from '../models/Review';

interface ReviewProps {
    review: Review;
}

export default function ReviewGroup(ReviewProps: ReviewProps) {
    const { review } = ReviewProps;
    return (
        <View style={styles.review}>
            <ProfileComponent
                style={styles.profile}
                person={review.author.profileSlug}
                radius={23}
            />
            <View style={styles.reviewBlurb}>
                <Text style={styles.reviewName}>
                    {review.author.firstName} {review.author.lastName}
                </Text>
                <Text style={styles.reviewRating}>{Rating[review.rating as number]} this spot</Text>
                <Text style={styles.reviewText} numberOfLines={4}>
                    {review.reviewText}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    review: {
        width: 171,
        height: 92,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 9,
    },

    profile: {},
    reviewBlurb: { marginLeft: 8 },
    reviewName: { top: 4, fontFamily: 'InterBold', fontSize: 10 },
    reviewRating: { top: 1, fontFamily: 'Inter', fontSize: 10 },
    reviewText: { width: 117, top: 9, fontFamily: 'Inter', fontSize: 10 },
});
