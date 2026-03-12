import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {

    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (

        <View style={styles.container}>

            <Text style={styles.title}>Sign In</Text>

            <Text>Email ID</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your email here!"
                value={email}
                onChangeText={setEmail}
            />

            <Text>Password</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your password here!"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button}
                onPress={() => login(email, password)}
            >
                <Text style={{ color: "white" }}>Sign In</Text>
            </TouchableOpacity>

            <Text style={{ marginVertical: 15, textAlign: "center" }}>Or sign in with</Text>

            <TouchableOpacity style={styles.google}>
                <Text>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebook}>
                <Text style={{ color: "white" }}>Facebook</Text>
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 25,
        justifyContent: "center"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 10,
        marginBottom: 15
    },

    button: {
        backgroundColor: "#FFA500",
        padding: 15,
        alignItems: "center",
        borderRadius: 6
    },

    google: {
        borderWidth: 1,
        padding: 12,
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 6
    },

    facebook: {
        backgroundColor: "#3b5998",
        padding: 12,
        alignItems: "center",
        borderRadius: 6
    }

})