"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { UseCustomHook } from "../app/linksharing/page";

export interface Image {
    src: string; 
    alt: string; 
    width?: number; 
    height?: number; 
};
interface ImageContext {
    image: Image;
    setImage: Dispatch<SetStateAction<Image>>
} 

export const ImageContext = createContext<ImageContext | null>(null)

export function ImageContextProvider ({children}: UseCustomHook) {
    const [image, setImage] = useState<Image | null>(null)
    return (
        <ImageContext.Provider value={{
            image: image,
            setImage: setImage
        }}>
            {children}
        </ImageContext.Provider>
    )
}

export function useImageContext () {
    const context = useContext(ImageContext)
    if (!context) {
        throw new Error ("useImageContext must be used within ImageContextProvider")
    }
    return context
}