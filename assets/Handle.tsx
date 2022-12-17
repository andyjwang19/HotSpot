import { StyleSheet, View } from 'react-native';

export default function Handle(HandleProps: { size: number }) {
    const styles = StyleSheet.create({
        handle: {
            width: HandleProps.size,
            borderBottomColor: '#D9D9D9',
            borderBottomWidth: 3,
        },
    });
    return <View style={styles.handle}></View>;
}
