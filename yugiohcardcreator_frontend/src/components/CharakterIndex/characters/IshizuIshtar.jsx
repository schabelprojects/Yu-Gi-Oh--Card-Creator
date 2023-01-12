import React, { useState } from "react";
import "../CharacterIndex.css";
import ishizuishtar from "../../../media/ishizuishtar.png";

function IshizuIshtar() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Ishizu Ishtar
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={ishizuishtar} className="char-img" alt="img" />
            <h2>Ishizu Ishtar</h2>
            <p>
              Ishizu Ishtar ist die Schwester von Marik Ishtar und eine
              Grabwächterin. Sie hat stets eine ruhige Stimme und kann durch
              ihre Millenniumskette in die Zukunft sehen. Sie versteckte mit
              Pegasus die ägyptischen Götterkarten. Als ihr Bruder Marik diese
              für sich holen wollte konnte sie nur Oblisk den Peiniger vor ihm
              retten. Sie gab Seto Kaiba im Museum in dem sie arbeite einen
              extra Rundgang und zeigte ihm die Steintafel von Yami Yugi und
              Seto über ihr Duell. Danach gab sie ihm die Karte von Oblisk und
              sagte ihm, er solle ein Tunier abhalten, um somit die restlichen
              ägyptischen Götterkarten von den Raritätenjägern zu bekommen.
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

export default IshizuIshtar;
