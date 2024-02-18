"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { UseCustomHook } from '../app/page';

interface PrevieuwAllowedContext {
    previeuwAllowed: boolean;
    setPrevieuwAllowed: Dispatch<SetStateAction<boolean>>
}

export const PrevieuwAllowedContext = createContext<PrevieuwAllowedContext | null>(null);

export default function PrevieuwContextProvider ({children}: UseCustomHook) {
    const [previeuwAllowed, setPrevieuwAllowed] = useState<boolean>(false)
    return (
        <PrevieuwAllowedContext.Provider value={{
            previeuwAllowed: previeuwAllowed,
            setPrevieuwAllowed: setPrevieuwAllowed
        }}>
            {children}
        </PrevieuwAllowedContext.Provider>
    )
}

export function usePrevieuwAllowedContext () {
    const context = useContext(PrevieuwAllowedContext) 
    if (!context) {
        throw new Error ("usePrevieuwContext must be used within PrevieuwContextProvider")
    }
    return context
}