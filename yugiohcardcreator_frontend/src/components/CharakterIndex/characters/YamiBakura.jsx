import React, { useState } from "react";
import yamibakura from "../../../media/yamibakura.png";

function YamiBakura() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Yami Bakura
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={yamibakura} className="char-img" alt="img" />
            <h2>Yami Bakura</h2>
            <p>
                Yami Bakura ist  der
              gefährlichste Gegner von Yugi Muto und dem Pharao. Er ist ein
              Geist, der seit 5000 Jahren im Millenniumsring lebt. Ähnlich wie
              bei Yami Yugi kann er den Körper von demjenigen übernehmen, der
              den Millenniumsgegenstand trägt. Doch anders als bei der Beziehung
              von Yugi und Yami Yugi überwältigt Yami Bakura den echten Bakura
              gegen dessen Willen, um seinen Körper voll und ganz für sich zu
              nutzen. Yami Bakuras einziges Ziel ist es, die sieben
              Milleniumsgegenstände und mit ihnen eine unvorstellbare Macht zu
              kontrollieren. Dabei ist ihm sein Millenniumsgegenstand sehr
              nützlich, da der Ring die anderen Gegenstände in einem gewissen
              Umkreis aufspüren kann.
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

export default YamiBakura;
