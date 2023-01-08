import React, { useState } from 'react'
import "../CharacterIndex.css";
import weevilunderwood from "../../../media/weevilunderwood.png";

function WeevilUnderwood() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal} className="char-btn">Weevil Underwood</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={weevilunderwood} className="char-img" alt="img" />
 <h2>Weevil Underwood</h2>
 <p>
   Weevil Underwood ist ein sehr gerissener Duelant dem jedes Mittel recht ist um zu gewinnen.
   Sein Deck ist auf Insekten spezialisiert.
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

export default WeevilUnderwood