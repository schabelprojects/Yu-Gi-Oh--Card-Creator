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
              Odion mit dem Millenniumsstab niedergeschlagen hat. Er duelliert sich nur im Reich der
              Schatten und quält seine Opfer im Duell mit größtem Vergnügen. So
              schickte er nach einem Duell mit Mai, wobei jeder eine Erinnerung
              ein jemanden verliert, sie ins Reich der Schatten.
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
