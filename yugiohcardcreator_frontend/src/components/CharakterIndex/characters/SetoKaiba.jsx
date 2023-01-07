import React, { useState } from 'react'
import "../CharacterIndex.css";
import setokaiba from "../../../media/setokaiba.jpg";

function SetoKaiba() {

    const [character, setCharacter] = useState(false);

    const toggleModal = () => {
      setCharacter(!character);
    };

  return (
    <>
     <button onClick={toggleModal} className="char-btn">Seto Kaiba</button>

{character && 
 <div className="modal">
 <div className="overlay" onClick={toggleModal}></div>
 <div className="modal-content">
     <img src={setokaiba} className="char-img" />
   <h2>Seto Kaiba</h2>
   <p>
     Seto Kaiba ist Yugi´s stärkster Rivale. Als Inhaber eines großen Spielekonzerns gehört es
       zu Kaibas Lebensziel Yugi in einem Duel zu besiegen. Sein größter Unterstützer ist sein
       kleiner Bruder Mokuba. Er setzt sein Vertrauen in sein Können. Seine gefährlichste
       Waffe ist sein legendärer Weißer Drache mit eiskaltem Blick auf den er sich stets
       verlassen kann.
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

export default SetoKaiba