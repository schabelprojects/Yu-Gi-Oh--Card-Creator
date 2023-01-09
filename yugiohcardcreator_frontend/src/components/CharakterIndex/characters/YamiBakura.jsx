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
              Zorc oder auch Yami Bakura ist in der Yu-Gi-Oh!-Anime-Serie der
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
              Umkreis aufspüren kann. Yami Bakura besitzt außerdem die
              Fähigkeit, Teile seines Geistes an jemand anderen zu binden oder
              das Böse in jemandem zu entfachen. Außerdem kann sich Yami Bakura,
              im Gegensatz zu Yami Yugi, an alles erinnern was vor 5000 Jahren
              geschah. Wie sich später auch noch herausstellt hat er das Reich
              der Schatten erschaffen.
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
