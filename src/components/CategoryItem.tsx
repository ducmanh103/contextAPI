import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CategoryItem({ item }: any) {

    return (

        <View style={styles.container}>

            <Image source={{ uri: item.image }} style={styles.img} />

            <Text>{item.name}</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        marginRight: 15
    },

    img: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginBottom: 5
    }

})