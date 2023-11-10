"use client"
import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import CustomLinks from '../components/customLinks/customLinks'
import AppContext from '../context/appContext'
import ProfilDetails from '../components/profilDetails/profilDetails'
import LinksContext from '../context/linksContext'


function HomePage() {
  const [part, setPart] = useState("customLinks")
  const [linksInTheApp, setLinksInTheApp] = useState(["GitHub"])

  return (
    <AppContext.Provider value={part}>
    <LinksContext.Provider value={linksInTheApp}>
    <div className='homePage'>
      <Navbar setPart={setPart}/>
      <div className="linksApp">
        {
          part === "customLinks" ? <CustomLinks setPart={setPart} setLinksInTheApp={setLinksInTheApp} linksInTheApp={linksInTheApp}/> : <ProfilDetails />
        }      
      </div>
    </div>
    </LinksContext.Provider>
    </AppContext.Provider>
  )
}

export default HomePage