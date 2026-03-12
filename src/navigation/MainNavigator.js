import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";

export default function MainNavigator() {

    const { user } = useContext(AuthContext)

    return user ? <AppTabs /> : <AuthStack />

}