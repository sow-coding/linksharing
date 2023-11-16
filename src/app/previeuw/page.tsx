"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Previeuw() {
  const router = useRouter()
  return (
    <div className='previeuw'>
      <div className="previeuwNav">
        <div className="previeuwButtons">
          <div className="leftButton" onClick={() => {
            router.push("/homePage")
          }}>
            <p>Back to Editor</p>
          </div>
          <div className="rightButton">Share Link</div>
        </div>
      </div>
      <div className="previeuwPhone"></div>
    </div>
  )
}

export default Previeuw