import React, { useState } from "react";
import "../CharacterIndex.css";
import odion from "../../../media/odion.png";

function Odion() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Odion
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={odion} className="char-img" alt="img" />
            <h2>Odion</h2>
            <p>
              Odion ist der Adoptivbruder von Marik Ishtar und Ishizu Ishtar.
              Mariks Mutter hatte ihn gefunden, als er noch ein Baby war und ihn
              wie einen eigenen Sohn aufgezogen, da sie damals noch keine
              eigenen Kinder hatte. Darum wollte Odion schon seit seiner
              Kindheit Grabwächter werden. Dies wurde ihm aber verwehrt, da er
              nicht der leibliche Sohn der Familie war.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Odion;
