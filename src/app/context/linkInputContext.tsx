import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface LinkContextType {
  linkInput: string;
  setLinkInput: React.Dispatch<React.SetStateAction<string>>;
}

export const LinkInputContext = createContext<LinkContextType | undefined>(undefined);

export const LinkContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [linkInput, setLinkInput] = useState('');
  const value: LinkContextType = { linkInput, setLinkInput };
  return <LinkInputContext.Provider value={value}>{children}</LinkInputContext.Provider>;
};
