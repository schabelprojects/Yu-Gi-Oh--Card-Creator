import React from "react";
import "./HomePage.css";
import yugimusic from "../../media/yugimusic.mp3";
import {Link} from "react-router-dom";
import yugilogo from "../../media/yugiohlogo.png";
import blueeyes from "../../media/blueeyes.png";
import blueeyessound from "../../media/blueeyessound.mp3";


function HomePage() {
  return (
    <>
        <audio autoPlay loop>
            <source src={yugimusic} type="audio/mpeg"/>
        </audio>
        <div className="logocontainer">
      <img src={yugilogo} className="logo-home" alt="default"/>
        </div>
        <div className="apptitlecontainer">
            <h1 className="apptitle-home">Yu-Gi-Oh! Card Creator</h1>
        </div>
      <div className="optionscontainer">
        <Link className="nav-option" to="/introduction">
          Introduction
        </Link>
        <Link className="nav-option" to="/cardlist">
          Yu-Gi-Oh! Card List
        </Link>
        <Link className="nav-option" to="/cardcreator">
          Card Creator
        </Link>
        <Link className="nav-option" to="/cardcreatordatabase">
          Created Cards
        </Link>
        <Link className="nav-option" to="/character">
          Character Index
        </Link>
        <Link className="nav-option" to="/about">
          About
        </Link>
      </div>
        <div >
            <img className="blueeyes-img" src={blueeyes} alt="pic" />
        </div>
        <audio autoPlay >
            <source src={blueeyessound} type="audio/mpeg"/>
        </audio>
    </>
  );
}

export default HomePage;
