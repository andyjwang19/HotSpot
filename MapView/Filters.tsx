import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import { useState, Component } from 'react';
import { FilterOptions, Activity } from '../models/filters';

interface FilterProps {
    filters: FilterOptions;
    setFilters: (arg0: FilterOptions) => void;
}

const Filters = (FilterProps: FilterProps) => {
    // const Filters = (filters: FilterOptions, setFilters: (arg0: FilterOptions) => Promise<void>) => {

    // const [filters, setFilters] = useState({} as FilterOptions)
    return (
        <View style={styles.container}>
            <View style={styles.activitiesContainer}>
                {FilterProps.filters.activities !== Activity.Food ? (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.foodButton)}
                        onPress={() =>
                            FilterProps.setFilters({ activities: Activity.Food, price: 0 })
                        }
                    >
                        <Text style={styles.foodButtonText}>Food</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.pressedFoodButton)}
                        onPress={() =>
                            FilterProps.setFilters({ activities: Activity.Food, price: 0 })
                        }
                    >
                        <Text style={styles.pressedFoodButtonText}>Food</Text>
                    </TouchableOpacity>
                )}

                {FilterProps.filters.activities !== Activity.Drink ? (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.drinkButton)}
                        onPress={() =>
                            FilterProps.setFilters({ activities: Activity.Drink, price: 0 })
                        }
                    >
                        <Text style={styles.drinkButtonText}>Drink</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.pressedDrinkButton)}
                        onPress={() =>
                            FilterProps.setFilters({ activities: Activity.Drink, price: 0 })
                        }
                    >
                        <Text style={styles.pressedDrinkButtonText}>Drink</Text>
                    </TouchableOpacity>
                )}

                {FilterProps.filters.activities !== Activity.Fun ? (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.funButton)}
                        onPress={() =>
                            FilterProps.setFilters({ activities: Activity.Fun, price: 0 })
                        }
                    >
                        <Text style={styles.funButtonText}>Fun</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={StyleSheet.compose(styles.activites, styles.pressedFunButton)}
                        onPress={() =>
                            FilterProps.setFilters({ activities: Activity.Fun, price: 0 })
                        }
                    >
                        <Text style={styles.pressedFunButtonText}>Fun</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* <View style={styles.additionalFiltersContainer}>
                <TouchableOpacity style={styles.activites}>
                    <Text style={styles.priceButtonText}>Price </Text>
                </TouchableOpacity>
            </View> */}
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
        // flexDirection: 'row',
    },
    activitiesContainer: {
        // display: 'flex',
        flexDirection: 'row',
    },
    additionalFiltersContainer: {
        marginTop: 10,
    },
    activites: {
        width: 122,
        height: 39,
        // position: 'absolute',
        top: 7,
        left: 5,
        right: 0,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 11,
    },

    foodButtonText: {
        textAlign: 'center',
        color: foodColor,
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
        // borderColor: foodColor,
        borderColor: drinkColor,
        // position: 'absolute',
        // top: 50,
        // left: 140,
        // zIndex: 50,
        // marginLeft: 133,
        // borderColor: funColor,
        // left: 133,
        // zIndex: 100,
    },
    pressedDrinkButton: {
        backgroundColor: drinkColor,
        borderColor: pressedDrinkColor,
    },
    funButton: {
        borderColor: funColor,
        // left: 263,
    },
    pressedFunButton: {
        backgroundColor: funColor,
        borderColor: pressedFunColor,
    },
});

export default Filters;
