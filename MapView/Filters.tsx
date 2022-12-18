import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { useState, Component } from 'react';
import { FilterOptions, Activity } from '../models/filters';

interface FilterProps {
    filters: FilterOptions;
    setFilters: (arg0: FilterOptions) => void;
}

const Filters = ({ filters, setFilters }: FilterProps) => {
    // const Filters = (filters: FilterOptions, setFilters: (arg0: FilterOptions) => Promise<void>) => {

    // const [filters, setFilters] = useState({} as FilterOptions)
    return (
        <View style={styles.container}>
            <View style={styles.activitiesContainer}>
                {!filters.foodSelected ? (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.foodButton)}
                        onPress={() => setFilters({ ...filters, foodSelected: true })}
                    >
                        <Text style={styles.foodButtonText}>Food</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.pressedFoodButton)}
                        onPress={() =>
                            // FilterProps.setFilters({ activities: Activity.Food, price: 0 })
                            setFilters({ ...filters, foodSelected: false })
                        }
                    >
                        <Text style={styles.pressedFoodButtonText}>Food</Text>
                    </TouchableOpacity>
                )}

                {!filters.drinkSelected ? (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.drinkButton)}
                        onPress={() => setFilters({ ...filters, drinkSelected: true })}
                    >
                        <Text style={styles.drinkButtonText}>Drink</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.pressedDrinkButton)}
                        onPress={() => setFilters({ ...filters, drinkSelected: false })}
                    >
                        <Text style={styles.pressedDrinkButtonText}>Drink</Text>
                    </TouchableOpacity>
                )}

                {!filters.funSelected ? (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.funButton)}
                        onPress={() => setFilters({ ...filters, funSelected: true })}
                    >
                        <Text style={styles.funButtonText}>Fun</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.pressedFunButton)}
                        onPress={() => setFilters({ ...filters, funSelected: false })}
                    >
                        <Text style={styles.pressedFunButtonText}>Fun</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.additionalFiltersContainer}>
                <TouchableOpacity style={styles.activites}>
                    <Text style={styles.priceButtonText}>Price </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const foodColor = '#F0466E';
const drinkColor = '#FFC43D';
const funColor = '#1B9AAA';

const pressedFoodColor = '#FFE3EA';
const pressedDrinkColor = '#FFEECB';
const pressedFunColor = '#D9FBFF';

const styles = StyleSheet.create({
    container: {
        zIndex: 3,
    },
    activitiesContainer: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    additionalFiltersContainer: {
        marginTop: 10,
        marginLeft: 5,
    },
    activites: {
        width: 122,
        height: 39,
        top: 7,
        marginRight: 7,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    foodButtonText: {
        textAlign: 'center',
        color: foodColor,
    },
    testButtonText: {
        textAlign: 'center',
        width: 122,
        height: 39,
    },
    pressedFoodButtonText: {
        textAlign: 'center',
        color: pressedFoodColor,
    },
    drinkButtonText: {
        textAlign: 'center',
        color: drinkColor,
    },
    pressedDrinkButtonText: {
        textAlign: 'center',
        color: pressedDrinkColor,
    },
    funButtonText: {
        textAlign: 'center',
        color: funColor,
    },
    pressedFunButtonText: {
        textAlign: 'center',
        color: pressedFunColor,
    },
    priceButtonText: {
        textAlign: 'center',
        color: 'black',
    },

    foodButton: {
        borderColor: foodColor,
    },
    pressedFoodButton: {
        backgroundColor: foodColor,
        borderColor: pressedFoodColor,
    },
    drinkButton: {
        borderColor: drinkColor,
    },
    pressedDrinkButton: {
        backgroundColor: drinkColor,
        borderColor: pressedDrinkColor,
    },
    funButton: {
        borderColor: funColor,
    },
    pressedFunButton: {
        backgroundColor: funColor,
        borderColor: pressedFunColor,
    },
});

export default Filters;
