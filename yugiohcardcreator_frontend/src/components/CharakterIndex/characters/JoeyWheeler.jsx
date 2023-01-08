import React, { useState } from 'react'
import "../CharacterIndex.css";
import joeywheeler from "../../../media/joeywheeler.png";

function JoeyWheeler() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal}  className="char-btn">Joey Wheeler</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={joeywheeler} className="char-img" alt="img" />
 <h2>Joey Wheeler</h2>
 <p>
   Joey Wheeler ist ein Charakter aus Yu-Gi-Oh!.
   Obwohl er sich anfangs nicht sehr gut mit Yugi verstanden hat,
   wurden beide später beste Freunde. Joey kann Seto aufs Blut
   nicht ausstehen und hat auch öfters einen Streit mit ihm, der
   darauf hinausläuft, dass ihn Kaiba als Drittklassigen Duellanten,
   Schoßhund oder Affen bezeichnet.
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

export default JoeyWheeler