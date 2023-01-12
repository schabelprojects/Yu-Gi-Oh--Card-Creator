import React from "react";
import "./HomePage.css";
import Header from "../Header/Header.jsx";
import yugimusic from "../../media/yugimusic.mp3";

function HomePage() {
  return (
    <>
        <audio autoPlay>
            <source src={yugimusic} type="audio/mpeg"/>
        </audio>
      <div>
        <Header/>
      </div>
    </>
  );
}

export default HomePage;
