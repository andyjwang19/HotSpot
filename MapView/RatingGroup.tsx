import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { TextStyle } from 'react-native';

interface RatingGroupProps {
    style?: TextStyle | TextStyle[];
}

export default function RatingGroup(RatingGroupProps: RatingGroupProps) {
    const { style } = RatingGroupProps;
    return (
        <View style={styles.ratings}>
            <Image
                source={require('../assets/Icons/love.png')}
                resizeMode="contain"
                style={[styles.ratingIcons, styles.loveIconPosition]}
            />
            <Image
                source={require('../assets/Icons/like.png')}
                resizeMode="contain"
                style={[styles.ratingIcons, styles.likeIconPosition]}
            />
            <Image
                source={require('../assets/Icons/okay.png')}
                resizeMode="contain"
                style={[styles.ratingIcons, styles.okayIconPosition]}
            />
            <Text style={[styles.ratingCounts, styles.loveCountPosition]}>6</Text>
            <Text style={[styles.ratingCounts, styles.likeCountPosition]}>6</Text>
            <Text style={[styles.ratingCounts, styles.okayCountPosition]}>6</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ratings: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 123,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    ratingIcons: {
        width: 20,
        height: 20,
        // position: 'absolute',
        // borderWidth: 2,
        // borderColor: 'black',
    },
    loveIconPosition: { marginRight: 31 },
    likeIconPosition: { marginRight: 31 },
    okayIconPosition: {},
    ratingCounts: { fontSize: 15, marginTop: 5 },
    loveCountPosition: { marginLeft: 5, marginRight: 41 },
    likeCountPosition: { marginRight: 41 },
    okayCountPosition: {},
});
