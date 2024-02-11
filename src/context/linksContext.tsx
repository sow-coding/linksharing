"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { Links, UseCustomHook } from '../app/linksharing/page';

interface LinksContext {
    links: Links;
    setLinks: Dispatch<SetStateAction<Links>>
}

export const LinksContext = createContext<LinksContext | null>(null)
 
export default function LinksContextProvider ({children}: UseCustomHook) {
    const [links, setLinks] = useState<Links>([])
    return (
        <LinksContext.Provider value={{
            links: links,
            setLinks: setLinks
        }}>
            {children}
        </LinksContext.Provider>
    )
}

export function useLinksContext () {
    const context = useContext(LinksContext)
    if (!context) {
        throw new Error ("useLinksContext must be used within LinksContextProvider")
    }
    return context
}