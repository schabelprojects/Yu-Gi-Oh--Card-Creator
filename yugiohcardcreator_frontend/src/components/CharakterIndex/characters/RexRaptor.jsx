import React, { useState } from 'react'
import "../CharacterIndex.css";
import rexraptor from "../../../media/rexraptor.png";

function RexRaptor() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal} className="char-btn">Rex Raptor</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={rexraptor} className="char-img" alt="img" />
 <h2>Rex Raptor</h2>
 <p>
 Rex Raptor ist ein Duellant, der als Schurke in der Serie gelten kann 
 und ein grosser Dinosaurier-Fan ist. Rex Raptor hat keine richtigen Freunde 
 ausser Weevil Underwood, und selbst mit dem streitet er sich gern. Rex war 
 einst als Profiduellant von jedem respektiert und verehrt worden genauso wie Weevil. 
 Gemeinsam konnten sie sich wegen ihres Rufes erlauben, dass zu tun, was sie wollten 
 ohne bestraft zu werden. Als sie beide zum Königreich der Duellanten fuhren, 
 sollte sich dies aber ändern. Seit dieser Zeit sind Rex und Weevil 
 von einer Pechsträne verfolgt.
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

export default RexRaptor