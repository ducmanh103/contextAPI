import React, { createContext, useState } from "react";

interface User {
    name: string
    job: string
}

interface AuthType {
    user: User | null
    login: (email: string, password: string) => void
    logout: () => void
}

export const AuthContext = createContext < AuthType > ({
    user: null,
    login: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState < User | null > (null)

    const login = (email: string, password: string) => {
        if (email && password) {

            setUser({
                name: "Hung Nguyen",
                job: "Mobile developer"
            })

        }
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}