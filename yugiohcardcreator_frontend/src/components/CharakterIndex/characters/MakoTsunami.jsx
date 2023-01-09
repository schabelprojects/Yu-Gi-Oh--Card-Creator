import React, { useState } from "react";
import "../CharacterIndex.css";
import makotsunami from "../../../media/makotsunami.png";

function MakoTsunami() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Mako Tsunami
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={makotsunami} className="char-img" alt="img" />
            <h2>Mako Tsunami</h2>
            <p>
              Mako Tsunami wuchs in enger Verbundenheit mit dem Meer auf. Sein
              Vater war Fischer und Seemann. Gemeinsam unternahmen sie häufig
              Ausflüge auf die hohe See in einem Fischerboot. Als bei einer
              solchen Reise ein heftiger Sturm aufkreuzte, fesselte Makos Vater
              seinen Sohn an den Mast und versprach, dass ihm nichts geschehen
              würde. Wenig später wurde das Boot von einer Flutwelle überrollt.
              Mako überlebte, doch sein Vater war verschwunden. Da jedoch ein
              Rettungsboot fehlte, war Mako überzeugt dass auch sein Vater der
              Welle entkommen konnte.
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

export default MakoTsunami;
