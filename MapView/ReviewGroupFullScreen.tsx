import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
} from 'react-native';

import ProfileComponent from '../ProfileComponent';

import Review from '../models/Review';
import { Rating } from '../models/Review';
import RatingIcon from '../assets/Icons/RatingIcon';

interface ReviewProps {
    review: Review;
    style?: StyleSheet;
}

export default function ReviewGroup(ReviewProps: ReviewProps) {
    const { review, style } = ReviewProps;
    return (
        <View style={styles.review}>
            <View style={styles.reviewContainer}>
                <ProfileComponent
                    style={styles.profile}
                    person={review.author.profileSlug}
                    radius={23}
                />
                <Text style={styles.reviewName}>
                    {`${review.author.firstName}\n${review.author.lastName}`}
                </Text>
                <RatingIcon rating={review.rating} style={styles.largeRating} />
            </View>
            <View style={styles.reviewBlurb}>
                {/* <Text style={styles.reviewRating}>{Rating[review.rating as number]} this spot</Text> */}
                <Text style={styles.reviewText} numberOfLines={4}>
                    {review.reviewText}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    review: {
        width: 339,
        height: 180,
        // display: 'flex',
        // flexDirection: 'row',
        // marginRight: 9,
        backgroundColor: '#FAFAFA',
        marginBottom: 18,
        borderRadius: 10,
    },
    reviewContainer: {
        marginLeft: 32,
        marginTop: 12,
        flexDirection: 'row',
    },
    //'#FAFAFA'

    profile: {},

    largeRating: {
        width: 30,
        height: 30,
        top: 10,
        marginLeft: 'auto',
        marginRight: 34.67,
    },

    reviewBlurb: { marginLeft: 8 },
    reviewName: { top: 0, fontFamily: 'InterBold', fontSize: 20, marginLeft: 12.42 },
    reviewRating: { top: 1, fontFamily: 'Inter', fontSize: 10 },
    reviewText: {
        width: 272,
        fontFamily: 'Inter',
        fontSize: 15,
        marginTop: 9,
        marginLeft: 25,
    },
});
