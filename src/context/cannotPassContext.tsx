"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { UseCustomHook } from "../app/linksharing/page";

interface CannotPassContext {
    cannotPass: boolean;
    setCannotPass: Dispatch<SetStateAction<boolean>>
}

export const CannotPassContext = createContext<CannotPassContext | null>(null)

export default function CannotPassContextProvider ({children}: UseCustomHook) {
    const [cannotPass, setCannotPass] = useState<boolean>(false)
    return (
        <CannotPassContext.Provider value={{
            cannotPass: cannotPass,
            setCannotPass: setCannotPass
        }}>
            {children}
        </CannotPassContext.Provider>
    )
}

export function useCannotPassContext () {
    const context = useContext(CannotPassContext)
    if (!context) {
        throw new Error ("useCannotPassContext must be used within CannotPassContextProvider")
    }
    return context
}