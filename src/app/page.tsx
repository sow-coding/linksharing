"use client"
import React from 'react'
import Navbar from '../components/navbar/navbar'
import CustomLinks from '../components/customLinks/customLinks'
import { useAppContext } from '../context/appContext'
import ProfilDetails from '../components/profilDetails/profilDetails'
import Previeuw from '../components/previeuw/previeuw'

export interface UseCustomHook {
  children: React.ReactNode
}

export type Platform = "GitHub" | "YouTube" | "Facebook" | "FrontendMentor" | "Linkedin"

export interface LinkType {
  platform: Platform;
  linkUrl: string;
}

export type Links = LinkType[]

function HomePage() {
  const {part} = useAppContext()
  return (
    <div className='homePage'>
      {part !== "Previeuw" && <Navbar />}
      <div className="linksApp">
        {
        part === "customLinks" ? (
          <CustomLinks />
        ) : part === "Previeuw" ? (
          <Previeuw />
        ) : (
          <ProfilDetails /> 
        )
        }      
      </div>
    </div>
  )
}

export default HomePage