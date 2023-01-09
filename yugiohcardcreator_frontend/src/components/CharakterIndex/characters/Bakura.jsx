import React, { useState } from "react";
import bakura from "../../../media/bakura.png";

function Bakura() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Bakura
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={bakura} className="char-img" alt="img" />
            <h2>Bakura</h2>
            <p>
              Ryo Bakura ist ein Schulkamerad von Yugi Muto und gehört eher zu
              der schüchternen, zurückhaltenden Sorte. Sein Vater brachte ihm
              aus Ägypten den Millenniumsring mit, in dem der diabolische Geist
              Zorc (auch bekannt als Yami Bakura) haust. Seither übernimmt Zorc
              regelmässig die vollständige Kontrolle über Bakuras Körper, um
              seinen finsteren Machenschaften nachzugehen. Bakura ist zwar auch
              ein Duellant, wird in den Spielen jedoch fast immer von Yami
              Bakura missbraucht. Seit Zorc am Ende der fünften Staffel
              vernichtet wurde, kann Bakura wieder ein normales Leben führen.
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

export default Bakura;
