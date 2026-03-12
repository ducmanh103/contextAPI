import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import ExplorerScreen from "../screens/ExplorerScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator()

export default function AppTabs() {

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ color, size }) => {

                    let iconName = "home"

                    if (route.name === "Explorer") {
                        iconName = "home"
                    }

                    if (route.name === "Account") {
                        iconName = "person"
                    }

                    return <Icon name={iconName} size={size} color={color} />

                }

            })}
        >

            <Tab.Screen name="Explorer" component={ExplorerScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />

        </Tab.Navigator>

    )

}