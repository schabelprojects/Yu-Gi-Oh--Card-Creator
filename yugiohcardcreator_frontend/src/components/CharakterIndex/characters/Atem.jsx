import React, { useState } from 'react'
import "../CharacterIndex.css";
import yamiyugi from "../../../media/yamiyugi.png";

function Atem() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal}  className="char-btn">Atem (Yami Yugi)</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={yamiyugi} className="char-img" />
 <h2>Atem (Yami Yugi)</h2>
 <p>
   Atem (oder auch Yami Yugi) war ein mächtiger Pharao der die Monster in die sieben
   Milleniumsgegenstände verbannte. Er verbannte zudem auch seine Seele und seine Erinnerungen
   in das Milleniumspuzzle. Nach 5000 Jahren war es ihm und Yugi Muto bestimmt den letzten Kampf
   gegen das Böse erneut zu begegnen und somit die Seele des Pharaos zu befreien.

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

export default Atem