import React, { useState } from "react";
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

function CharacterIndex() {

  return (
    <>
    <div>
     <YugiMuto />
     <Atem />
     <SetoKaiba />
     </div>
     <div>
     <JoeyWheeler />
     <TeaGardner />
     <Tristan />
     </div>
     <div>
     <MaximillianPegasus />
     <MaiValentine />
     <WeevilUnderwood />
     </div>
     <div>
     <RexRaptor />
     <MarikIshtar/>
     <IshizuIshtar />
     </div>
     <div>
     <Odion />
     <MakoTsunami />
     <Dartz />
     </div>
    </>
  );
}

export default CharacterIndex;
