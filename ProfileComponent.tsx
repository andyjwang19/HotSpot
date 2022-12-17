import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

const PROFILE_IMAGES = new Map([
    [
        'andy',
        {
            uri: require('./assets/ProfilePictures/andy.png'),
        },
    ],
    [
        'theo',
        {
            imgName: 'theo',
            uri: require('./assets/ProfilePictures/theo.png'),
        },
    ],
]);

export default function ProfileComponent(ProfileProps: {
    style: StyleProp<ViewStyle>;
    person: string;
    radius: number;
}) {
    const { style, person, radius, ...rest } = ProfileProps;

    const styles = StyleSheet.create({
        frame: {
            width: radius * 2,
            height: radius * 2,
            borderRadius: radius,
            borderColor: 'black',
            borderWidth: 2,
        },
    });

    const path = `./assets/ProfilePictures/${person}_profile_pic.png`;
    console.log(`path`, path);

    return <Image source={PROFILE_IMAGES.get(person)?.uri} style={styles.frame}></Image>;
}
