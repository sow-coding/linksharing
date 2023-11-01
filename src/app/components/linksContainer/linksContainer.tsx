import React from 'react'

function LinksContainer({links, setLinks}) {
  return (
    <div className='linksContainerDiv'>
        <div className="underLinksContainerDiv">
          <div className="popContainer"></div> 
          <div className="textContainer"></div> 
          <div className="littleTextContainer"></div>
          {links.length === 0 && 
            <div className="linksInTheContainer">
            <div className="linkInTheContainer1"></div>
            <div className="linkInTheContainer2"></div>
            <div className="linkInTheContainer3"></div>
            <div className="linkInTheContainer4"></div>
            <div className="linkInTheContainer5"></div>
          </div>
          }
          
        </div>      
    </div>
  )
}

export default LinksContainer