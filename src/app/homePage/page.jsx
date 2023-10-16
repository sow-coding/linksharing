import React from 'react'
import Navbar from '../components/navbar/navbar'
import CustomLinks from '../components/customLinks/customLinks'
import LinksContainer from '../components/linksContainer/linksContainer'

function HomePage() {
  return (
    <div className='homePage'>
      <Navbar/>
      <div className="linksApp">
        <LinksContainer />
        <CustomLinks />
      </div>
    </div>
  )
}

export default HomePage