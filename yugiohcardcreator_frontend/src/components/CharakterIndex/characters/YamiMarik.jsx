import React, { useState } from "react";
import yamimarik from "../../../media/yamimarik.png";

function YamiMarik() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Yami Marik
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={yamimarik} className="char-img" alt="img" />
            <h2>Yami Marik</h2>
            <p>
              Die dunkle Seite Mariks die durch den Zorn und den Hass von Marik
              geschaffen wurde, als dieser 12 Jahre alt war. Odion ist der
              einzige der ihn in Marik zurück halten konnte. Er konnte einmal in
              Mariks Kindheit schon mal die Kontrolle erlangen als Mariks Vater
              Odion mit dem Millenniumsstab niedergeschlagen hat. Yami Marik
              nahm sich den Stab und schickte seinen Vater ins Reich der
              Schatten. Doch als Odion zu sich kam konnte er Yami Marik wieder
              verschließen. Als aber Odion im Duell gegen Joey von Ra bestraft
              wurde weil er eine Kopie einsetzte fiel er in ein Koma weshalb
              Yami Marik wieder auftauchte. Er duelliert sich nur im Reich der
              Schatten und quält seine Opfer im Duell mit größtem Vergnügen. So
              schickte er nach einem Duell mit Mai, wobei jeder eine Erinnerung
              ein jemanden verliert, sie ins Reich der Schatten. Sogar Yami
              Bakura der sich mit Hilfe von dem echten Marik duellierte konnte
              er ins Reich der Schatten schicken. Er wollte sich auch endgültig
              Odions endledigen doch versteckte Isis ihn.
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

export default YamiMarik;
