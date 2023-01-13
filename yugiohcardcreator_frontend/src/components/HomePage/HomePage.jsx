import React from "react";
import "./HomePage.css";
import yugimusic from "../../media/yugimusic.mp3";
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <>
        <audio autoPlay>
            <source src={yugimusic} type="audio/mpeg"/>
        </audio>
      <div>
        <Link to="/introduction">
          Introduction
        </Link>
        <Link to="/cardlist">
          Yu-Gi-Oh! Card List
        </Link>
        <Link to="/cardcreator">
          Yu-Gi-Oh! Card Creator
        </Link>
        <Link to="/cardcreatordatabase">
          List of created Cards
        </Link>
        <Link to="/character">
          Character Index
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>
    </>
  );
}

export default HomePage;
