import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Main from './MapView/Main';
import { FilterOptions } from './models/filters';

export default function App() {
    const [filters, setFilters] = useState<FilterOptions>({
        foodSelected: false,
        drinkSelected: false,
        funSelected: false,
        price: 0,
    });

    return (
        <View>
            <Header filters={filters} setFilters={setFilters} />
            <Main filters={filters} setFilters={setFilters} />
        </View>
        // // <view style={styles.container}>
        //   {/* <Header/> */}
        //   <StatusBar style="auto" />
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
