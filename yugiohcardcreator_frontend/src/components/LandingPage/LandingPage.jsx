import React from 'react'
import "./LandingPage.css"
import yugilogo from "../../media/yugiohlogo.png"

function LandingPage() {
  return (
    <>
     <div>
       <img src={yugilogo} className="logo" alt="default"/>
         <h1 className="">Yu-Gi-Oh! Card Creator</h1>
     </div>
    </>
  )
}

export default LandingPage