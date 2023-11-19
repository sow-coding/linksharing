"use client"
import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import CustomLinks from '../components/customLinks/customLinks'
import AppContext from '../context/appContext'
import ProfilDetails from '../components/profilDetails/profilDetails'
import LinksContext from '../context/linksContext'
import PrevieuwContext from '../context/previeuwContext'
import Previeuw from '../components/previeuw/previeuw'


function HomePage() {
  const [part, setPart] = useState("customLinks")
  const [linksInTheApp, setLinksInTheApp] = useState(["GitHub"])
  const [userEmail, setUserEmail] = useState()
  const [userFirstName, setUserFirstName] = useState()
  const [userLastName, setUserLastName] = useState()
  const [selectedFile, setSelectedFile] = useState(null)
  const [cannotPrevieuw, setCannotPrevieuw] = useState(false)

  const previeuw = {
    userEmail: userEmail,
    userFirstName: userFirstName,
    userLastName: userLastName,
    linksInTheApp: linksInTheApp
  }
  return (
    <AppContext.Provider value={part}>
    <LinksContext.Provider value={linksInTheApp}>
    <PrevieuwContext.Provider value={previeuw}>
    <div className='homePage'>
      {part !== "Previeuw" && <Navbar setPart={setPart} part={part} setCannotPrevieuw={setCannotPrevieuw}/>}
      <div className="linksApp">
        {
        part === "customLinks" ? (
          <CustomLinks setPart={setPart} cannotPrevieuw={cannotPrevieuw} setLinksInTheApp={setLinksInTheApp} linksInTheApp={linksInTheApp} />
        ) : part === "Previeuw" ? (
          <Previeuw setPart={setPart} selectedFile={selectedFile}/>
        ) : (
          <ProfilDetails setSelectedFile={setSelectedFile} selectedFile={selectedFile} setUserEmail={setUserEmail} setUserFirstName={setUserFirstName} setUserLastName={setUserLastName} setPart={setPart}/>
        )
        }      
      </div>
    </div>
    </PrevieuwContext.Provider>
    </LinksContext.Provider>
    </AppContext.Provider>
  )
}

export default HomePage