import React, { useState } from 'react'
import "../CharacterIndex.css";
import pegasus from "../../../media/pegasus.png";

function MaximillianPegasus() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal}  className="char-btn">Maximillian Pegasus</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={pegasus} className="char-img" alt="img" />
 <h2>Maximillian Pegasus</h2>
 <p>
   Maximilian Pegasus gilt als Erfinder von Duel Monsters. Die Idee seines Kartenspieles
   liegen bei den alten ägyptischen Steintafel, womit die Ägypter vor 5000 Jahren Duelle
   ausführten. Die meisten von diesen Monstern auf den Steintafeln übernahm er für das
   Kartenspiel. Er wirkt immer etwas arrogant, spricht mit verträumter Stimme und man weiß
   nie, was in ihm vorgehen mag. Er ist im Besitz des Millenniumsauges, mit dessen Hilfe
   Pegasus die Gedanken anderer Menschen lesen kann, was er auch in Duellen nutzt. Sein
   innigster Wunsch ist es, seine verstorbene Frau Cecilia Pegasus wieder zum Leben zu
   erwecken.
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

export default MaximillianPegasus