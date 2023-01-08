import React, { useState } from 'react'
import "../CharacterIndex.css";
import teagardner from "../../../media/teagardner.jpg";

function TeaGardner() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal} className="char-btn">Tea Gardner</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={teagardner} className="char-img" alt="img" />
 <h2>Tea Gardner</h2>
 <p>
   Tea Gardner ist die beste Freundin von Yugi und geht mit ihm,
   Joey Wheeler und Tristan Taylor in die selbe Schule. Sie ist intelligent,
   hilfsbereit und schlagfertig. Nach der Schule möchte sie nach New York,
   um dort tanzen zu lernen, obwohl sie so schon sehr begabt ist. Mit der Zeit
   wird offensichtlich, dass sie wohl Gefühle für Yugi und auch für Yami Yugi hegt,
   diese aber nicht offen zeigt. Tea ist zwar beim Duellieren eher schwach, da sie
   sich nicht oft duelliert, jedoch weiß sie sich durchaus zu wehren
   (anfangs war sie sogar besser als Joey). Sie übernimmt eher eine beschützende
   und unterstützende Rolle.
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

export default TeaGardner