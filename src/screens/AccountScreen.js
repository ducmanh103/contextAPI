import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function AccountScreen() {

    const { user, logout } = useContext(AuthContext);

    return (

        <View style={styles.container}>

            <View style={styles.banner} />

            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.job}>{user?.job}</Text>

            <Text style={styles.desc}>
                I have above 5 years of experience in native mobile apps development
                now i am learning React Native
            </Text>

            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={{ color: "white" }}>Sign Out</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center"
    },

    banner: {
        width: "100%",
        height: 130,
        backgroundColor: "#29B6F6",
        marginBottom: 30
    },

    name: {
        fontSize: 22,
        fontWeight: "bold"
    },

    job: {
        color: "#29B6F6",
        marginBottom: 10
    },

    desc: {
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 20
    },

    button: {
        backgroundColor: "#FFA500",
        padding: 15,
        borderRadius: 6
    }

});