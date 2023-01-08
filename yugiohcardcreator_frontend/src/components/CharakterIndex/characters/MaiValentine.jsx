import React, { useState } from 'react'
import "../CharacterIndex.css";
import maivalentine from "../../../media/maivalentine.png";

function MaiValentine() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal}  className="char-btn">Mai Valentine</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={maivalentine} className="char-img" alt="img" />
 <h2>Mai Valentine</h2>
 <p>
   Mai Valentine ist eine starke Duellantin, die anfangs keine Freunde und sich selbst
   durchs Leben geschlagen hatte und dachte, das wäre der richtige Weg.
   Sie ist sehr gerissen und weiß, wie man Männer um den kleinen Finger wickelt.
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

export default MaiValentine