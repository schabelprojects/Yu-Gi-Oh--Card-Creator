import React, { useState } from 'react'
import "../CharacterIndex.css";
import yugimuto from "../../../media/yugimuto.png"

function YugiMuto() {
    const [character, setCharacter] = useState(false);

    const toggleModal = () => {
      setCharacter(!character);
    };
  return (
    <>
     <button onClick={toggleModal} className="char-btn">Yugi Muto</button>
{character && 
 <div className="modal">
 <div className="overlay" onClick={toggleModal}></div>
 <div className="modal-content">
     <img src={yugimuto} className="char-img" alt="img" />
   <h2>Yugi Muto</h2>
   <p>
     Yugi ist eher ein schüchterner Junge, aber wenn es darauf
       ankommt immer für seine Freunde da, wenn sie ihn brauchen.
       Er ist im Besitz des Milleniumspuzzles und bestreitet mit
       seinen Freunden Joey, Tea und Tristan die größten Abenteuer.
       In sehr schwierigen Situationen greift er auf die Macht seines
       Puzzles zurück und bittet Yami Yugi um Unterstützung.
   </p>
   <button className="close-modal" onClick={toggleModal}>
     Close
   </button>
 </div>
</div>
}
    </>
  )
}

export default YugiMuto