import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { TextStyle } from 'react-native';

export default function imageCarouselGroup() {
    return (
        <ScrollView horizontal style={styles.imageCarousel} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <Image
                    style={[styles.spotImages, styles.firstImage]}
                    source={require('../assets/SpotPhotos/symposium0.jpeg')}
                />
                <Image
                    style={[styles.spotImages]}
                    source={require('../assets/SpotPhotos/symposium1.jpeg')}
                />
                <Image
                    style={[styles.spotImages]}
                    source={require('../assets/SpotPhotos/symposium2.jpeg')}
                />
                <Image
                    style={[styles.spotImages]}
                    source={require('../assets/SpotPhotos/symposium3.jpeg')}
                />
                <Image
                    style={[styles.spotImages]}
                    source={require('../assets/SpotPhotos/symposium4.jpeg')}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
});
