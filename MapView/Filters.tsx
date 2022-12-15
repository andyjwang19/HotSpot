import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {useState} from 'react';

enum Activity {
    Food,
    Drink,
    Fun,
}

interface FilterOptions {
    activities: Activity[]
    price: number;
}

export default function Filters() {

    const [filters, setFilters] = useState({} as FilterOptions)
    return (
        <View style={styles.container}>
            <View style={styles.activitiesContainer}>
                <TouchableOpacity style={StyleSheet.compose(styles.activites, styles.foodButton )}>
                    <Text style={styles.foodButtonText}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleSheet.compose(styles.activites, styles.drinkButton )}>
                    <Text style={styles.drinkButtonText}>Drink</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleSheet.compose(styles.activites, styles.funButton )}>
                    <Text style={styles.funButtonText}>Fun</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.additionalFiltersContainer}>
                <TouchableOpacity style={styles.activites}>
                    <Text style={styles.priceButtonText}>Price</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const foodColor = "#F0466E";
const drinkColor = "#FFC43D";
const funColor = "#1B9AAA";

const styles = StyleSheet.create({
  container: {
    zIndex:3,
  },
  activitiesContainer:{
    display:"flex",
    flexDirection:"row",
  },
  additionalFiltersContainer:{
    marginTop:10
  },
  activites:{
    width:122,
    height:39,
    top: 5,
    left: 6,
    borderWidth:2,
    borderColor:"black",
    borderRadius:20,
    justifyContent: "center",
    backgroundColor:'white',
    marginRight: 11,
  },
  foodButtonText:{
    textAlign:"center",
    color:foodColor,
  },
  drinkButtonText:{
    textAlign:"center",
    color:drinkColor,
  },
  funButtonText:{
    textAlign:"center",
    color:funColor,
  },
  priceButtonText:{
    textAlign:"center",
    color:"black",
  },
  foodButton:{
    borderColor:foodColor,
  },
  drinkButton:{
    borderColor:drinkColor,
  },
  funButton:{
    borderColor:funColor,
  },
});
