"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { UseCustomHook } from '../app/linksharing/page';


type part = "customLinks" | "Previeuw" | "profilDetails";
interface AppContextType {
    part: part;
    setPart: Dispatch<SetStateAction<part>>
}

export const AppContext = createContext<AppContextType | null>(null);

export default function AppContextProvider ({children}: UseCustomHook) {
    const [part, setPart] = useState<part>("customLinks")
    return (
        <AppContext.Provider value={{
            part: part,
            setPart: setPart
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext () {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error ("useAppContext must be used within AppContextProvider")
    }
    return context
}