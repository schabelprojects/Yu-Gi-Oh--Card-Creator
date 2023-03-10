import React from "react";
import SetoKaiba from "./characters/SetoKaiba";
import YugiMuto from "./characters/YugiMuto";
import JoeyWheeler from "./characters/JoeyWheeler"
import Atem from "./characters/Atem"
import Dartz from "./characters/Dartz"
import IshizuIshtar from "./characters/IshizuIshtar"
import MaiValentine from "./characters/MaiValentine"
import MaximillianPegasus from "./characters/MaximillianPegasus"
import Odion from "./characters/Odion"
import RexRaptor from "./characters/RexRaptor"
import TeaGardner from "./characters/TeaGardner"
import Tristan from "./characters/Tristan"
import WeevilUnderwood from "./characters/WeevilUnderwood"
import MarikIshtar from "./characters/MarikIshtar"
import MakoTsunami from "./characters/MakoTsunami"
import Bakura from "./characters/Bakura.jsx";
import YamiBakura from "./characters/YamiBakura.jsx";
import YamiMarik from "./characters/YamiMarik.jsx";
import Header from "../Header/Header";
import joeymusic from "../../media/joeymusic.mp3"

function CharacterIndex() {

  return (
    <>
     <audio autoPlay loop>
      <source src={joeymusic} type="audio/mpeg"/>
     </audio>
    <div>
      <Header/>
    </div>
    <div className="character-container">
     <YugiMuto />
     <Atem />
     <SetoKaiba />
     </div>
     <div className="character-container">
     <JoeyWheeler />
     <TeaGardner />
     <Tristan />
     </div>
     <div className="character-container">
     <MaximillianPegasus />
     <MaiValentine />
     <WeevilUnderwood />
     </div>
     <div className="character-container">
     <RexRaptor />
     <MarikIshtar/>
     <IshizuIshtar />
     </div>
     <div className="character-container">
     <Odion />
     <MakoTsunami />
     <Dartz />
     </div>
     <div className="character-container">
      <Bakura />
      <YamiBakura />
      <YamiMarik />
     </div>
    </>
  );
}

export default CharacterIndex;
