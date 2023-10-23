"use client"
import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import CustomLinks from '../components/customLinks/customLinks'
import LinksContainer from '../components/linksContainer/linksContainer'


function HomePage() {
  const [links, setLinks] = useState([])
  return (
    <div className='homePage'>
      <Navbar/>
      <div className="linksApp">
        <LinksContainer links={links} setLinks={setLinks}/>
        <CustomLinks links={links} setLinks={setLinks}/>
      </div>
    </div>
  )
}

export default HomePage