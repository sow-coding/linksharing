"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { UseCustomHook } from "../app/linksharing/page";

interface User {
    firstName:string;
    lastName: string,
    email?: string;
}

interface UserContext {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<UserContext |null>(null)

export function UserContextProvider ({children}: UseCustomHook) {
    const [user, setUser] = useState<User>({
        firstName: "",
        lastName: "",
        email: ""
    });
    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext () {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error ("useUserContext must be used within UserContextProvider")
    }
    return context
}