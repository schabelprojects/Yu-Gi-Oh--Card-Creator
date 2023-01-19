import React from 'react'
import "./LandingPage.css"
import yugilogo from "../../media/yugiohlogo.png"
import yugi from "../../media/yugi.png"
import {Link} from "react-router-dom"
import yugiintro from "../../media/yugiintroenglish.mp3";
import kaiba from "../../media/kaiba.png"

function LandingPage() {
  return (
    <>
        <audio autoPlay loop>
            <source src={yugiintro} type="audio/mpeg"/>
        </audio>
     <div>
       <img src={yugilogo} className="logo" alt="default"/>
         <div className="apptitlecontainer">
         <h1 className="apptitle">Yu-Gi-Oh! Card Creator</h1>
         </div>
         <div className="wrap">
         <div className="old-enterlink">
         <Link className="lnk" to="/home">
             Enter
         </Link>
         </div>
         <div className="new-enterlink">
             <Link className="lnk" to="/home">
                 Enter
             </Link>
         </div>
         </div>
         <div className="imgyugi">
             <img src={yugi} className="yugi" alt="default"/>
             <img src={kaiba} className="kaiba" alt="default"/>
         </div>
     </div>
    </>
  )
}

export default LandingPage