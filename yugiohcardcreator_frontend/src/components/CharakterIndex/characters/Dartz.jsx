import React, { useState } from "react";
import "../CharacterIndex.css";
import dartz from "../../../media/Dartz.png";

function Dartz() {
  const [character, setCharacter] = useState(false);

  const toggleModal = () => {
    setCharacter(!character);
  };

  return (
    <>
      <button onClick={toggleModal} className="char-btn">
        Dartz
      </button>

      {character && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <img src={dartz} className="char-img" alt="img" />
            <h2>Dartz</h2>
            <p>
              Bevor er von den Kräften von Orichalcos besessen war, war Dartz
              der Herrscher von Atlantis. Als aber die Orichalcos-Steine auf
              seine Welt hinabstürzten wurden die meisten Menschen seines Volkes
              zu Monstern, sogar seine Frau. Seit einer Untersuchung der Steine
              ist Dartz von ihnen besessen, und glaubt daß die Steine nur das
              wahre Gesicht seines Volkes offenbaren und ein Segen seien, sowie
              dass die gesamte Menschheit schlecht sei und somit ausgelöscht
              werden müsse. Dartz sammelt seitdem Seelen um den den Leviathan
              wieder auferstehen zu lassen.
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

export default Dartz;
