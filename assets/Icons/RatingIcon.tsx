import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ImageStyle } from 'react-native';

import { Rating } from '../../models/Review';

interface RatingIconProps {
    rating: Rating;
    empty?: Boolean;
    style?: ImageStyle | ImageStyle[];
}

export default function RatingIcon({ rating, empty, style }: RatingIconProps) {
    if (empty === true) {
        if (rating === Rating.MID) {
            return <Image source={require('./okayEmpty.png')} resizeMode="contain" style={style} />;
        } else if (rating === Rating.LIKE) {
            return <Image source={require('./likeEmpty.png')} resizeMode="contain" style={style} />;
        } else {
            return <Image source={require('./loveEmpty.png')} resizeMode="contain" style={style} />;
        }
    } else {
        if (rating === Rating.MID) {
            return <Image source={require('./okay.png')} resizeMode="contain" style={style} />;
        } else if (rating === Rating.LIKE) {
            return <Image source={require('./like.png')} resizeMode="contain" style={style} />;
        } else {
            return <Image source={require('./love.png')} resizeMode="contain" style={style} />;
        }
    }
}
