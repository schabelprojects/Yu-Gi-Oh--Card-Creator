import React, { useState } from "react";
import "../CharacterIndex.css";
import marikishtar from "../../../media/marikishtar.png";

function MarikIshtar() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Marik Ishtar
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={marikishtar} className="char-img" alt="img" />
            <h2>Marik Ishtar</h2>
            <p>
              Marik stammt aus einer uralten Familie von Grabwächtern. Ihre
              Aufgabe ist es, ihr Leben lang das Grab des Pharaos und dessen
              Geheimnisse zu hüten. Als direkter Erbe und Nachfolger bedeutete
              dies für Marik, die damit verbundene Bürde zu tragen und weiterhin
              abgeschieden von der Zivilisation ohne jeglichen Kontakt zur
              Aussenwelt leben zu müssen. Er fürchtete und hasste dieses
              Schicksal. Von klein auf wünschte er sich frei zu sein und wollte
              die Aussenwelt sehen. Doch bedeutet ihm die Familie offensichtlich
              viel, denn nie hat er zuvor versucht sie zu verlassen oder wirksam
              dagegen zu rebellieren. Erst nach dem Tod seines Vaters.
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

export default MarikIshtar;
