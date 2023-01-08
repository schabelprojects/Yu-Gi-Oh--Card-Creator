import React, { useState } from 'react'
import "../CharacterIndex.css";
import dartz from "../../../media/Dartz.png";

function Dartz() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

return (
  <>
   <button onClick={toggleModal}  className="char-btn">Dartz</button>

{character && 
<div className="modal">
<div className="overlay" onClick={toggleModal}></div>
<div className="modal-content">
  <img src={dartz} className="char-img" alt="img" />
 <h2>Dartz</h2>
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

export default Dartz