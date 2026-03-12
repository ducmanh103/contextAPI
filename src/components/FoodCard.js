import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function FoodCard({ item }: any) {

    return (

        <View style={styles.card}>

            <Image source={{ uri: item.image }} style={styles.img} />

            <Text style={styles.name}>{item.name}</Text>

            <Text>{item.price}</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    card: {
        width: 140,
        marginRight: 15
    },

    img: {
        width: 140,
        height: 100,
        borderRadius: 10
    },

    name: {
        fontWeight: "bold",
        marginTop: 5
    }

})