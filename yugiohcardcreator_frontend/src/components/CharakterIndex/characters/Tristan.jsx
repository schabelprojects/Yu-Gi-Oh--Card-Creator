import React, { useState } from 'react'
import "../CharacterIndex.css";
import tristan from "../../../media/tristan.png";

function Tristan() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal} className="char-btn">Tristan Taylor</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={tristan} className="char-img" alt="img" />
 <h2>Tristan Taylor</h2>
 <p>
   Tristan Taylor ist ein Freund von Yugi Muto und der älteste Freund von Joey Wheeler,
   mit dem er schon einiges erlebt hat. Tristan duelliert sich zwar so gut wie nie, hilft
   aber seinen Freunden anderweitig so gut er kann. Charakterlich ähnelt er Joey, ist jedoch
   unnahbarer und tendiert dazu, erst nach dem Überlegen zu handeln. Früher hat er zusammen
   mit Joey Yugi gehänselt. Das änderte sich, als dieser die beiden in einer Schlägerei mit
   dem Hausmeister ihrer Schule unter Einsatz seines Lebens gerettet hat. Seitdem ist er einer
   von Yugis besten Freunden und hänselt auch niemanden mehr.
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

export default Tristan