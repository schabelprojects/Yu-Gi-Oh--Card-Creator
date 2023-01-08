import React, { useState } from 'react'
import "../CharacterIndex.css";
import marikishtar from "../../../media/marikishtar.png";

function MarikIshtar() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal}  className="char-btn">Marik Ishtar</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={marikishtar} className="char-img" alt="img" />
 <h2>Marik Ishtar</h2>
 <p>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
   labore quisquam similique inventore. Explicabo, quisquam nesciunt
   enim cupiditate ducimus dolor sit cum recusandae libero impedit
   distinctio, fugiat architecto ut laborum.
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

export default MarikIshtar