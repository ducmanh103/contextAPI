import React from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { foods, categories } from "../data/foodData";
import CategoryItem from "../components/CategoryItem";
import FoodCard from "../components/FoodCard";

export default function ExplorerScreen() {

    return (

        <View style={styles.container}>

            <View style={styles.searchBox}>

                <Icon name="search" size={20} color="gray" />

                <TextInput
                    placeholder="Search for meals or area"
                    style={{ marginLeft: 10 }}
                />

            </View>

            <Text style={styles.title}>Top Categories</Text>

            <FlatList
                horizontal
                data={categories}
                renderItem={({ item }) => <CategoryItem item={item} />}
            />

            <Text style={styles.title}>Popular Items</Text>

            <FlatList
                horizontal
                data={foods}
                renderItem={({ item }) => <FoodCard item={item} />}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10
    },

    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    }

})