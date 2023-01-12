import React from 'react'
import "./LandingPage.css"
import yugilogo from "../../media/yugiohlogo.png"
import yugikaiba from "../../media/yugikaiba.png"
import {Link} from "react-router-dom"
import yugiintro from "../../media/yugiohintro.mp3";
import blueeyes from "../../media/blueeyes.png"
import darkmagician from "../../media/darkmagician.png"

function LandingPage() {
  return (
    <>
        <audio autoPlay>
            <source src={yugiintro} type="audio/mpeg"/>
        </audio>
     <div>
       <img src={yugilogo} className="logo" alt="default"/>
         <h1 className="apptitle">Yu-Gi-Oh! Card Creator</h1>
         <Link className="enterlink" to="/home">
             Enter
         </Link>
         <div className="imgyugi">
             <img src={yugikaiba} className="yugikaiba" alt="default"/>
         </div>
     </div>
    </>
  )
}

export default LandingPage