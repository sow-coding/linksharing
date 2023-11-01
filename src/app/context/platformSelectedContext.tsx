import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PlatformContextType {
  platformSelected: string;
  setPlatformSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const PlatformSelectedContext = createContext<PlatformContextType | undefined>(undefined);

interface PlatformContextProviderProps {
  children: ReactNode; 
}

export const PlatformContextProvider: React.FC<PlatformContextProviderProps> = ({ children }) => {
  const [platformSelected, setPlatformSelected] = useState('Github');
  const value: PlatformContextType = { platformSelected, setPlatformSelected };
  return <PlatformSelectedContext.Provider value={value}>{children}</PlatformSelectedContext.Provider>;
};
