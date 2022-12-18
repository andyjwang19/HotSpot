import { StyleSheet, Text, View, Image } from 'react-native';
import { FilterOptions } from './models/filters';
import ProfileComponent from './ProfileComponent';

interface HeaderProps {
    filters: FilterOptions;
    setFilters: (arg0: FilterOptions) => void;
}
export default function Header({ filters, setFilters }: HeaderProps) {
    const logo = filters.foodSelected
        ? filters.drinkSelected
            ? filters.funSelected
                ? require(`./assets/Logos/fooddrinkfun.png`)
                : require(`./assets/Logos/fooddrink.png`)
            : filters.funSelected
            ? require(`./assets/Logos/foodfun.png`)
            : require(`./assets/Logos/food.png`)
        : filters.drinkSelected
        ? filters.funSelected
            ? require(`./assets/Logos/drinkfun.png`)
            : require(`./assets/Logos/drink.png`)
        : filters.funSelected
        ? require(`./assets/Logos/fun.png`)
        : require(`./assets/Logos/regular.png`);

    return (
        <View style={styles.container}>
            <View>
                <Image source={logo} resizeMode="contain" style={styles.logoImg} />
            </View>
            <View style={styles.profile}>
                <ProfileComponent person={'andy'} radius={23} style={styles.profilePosition} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        top: 0,
        height: 120,
        // borderColor: 'red',
        // borderWidth: 2,
    },
    logoImg: {
        width: 200,
        height: 100,
        top: 18,
        // borderColor: 'red',
        // borderWidth: 2,
    },
    profile: {
        position: 'absolute',
        right: 11,
        top: 50,
    },
    profilePosition: {},
});
