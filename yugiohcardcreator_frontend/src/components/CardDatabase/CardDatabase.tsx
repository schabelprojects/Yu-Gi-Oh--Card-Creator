// @ts-ignore
import React, {useEffect, useState} from 'react'
import Header from '../Header/Header'
import "./CardDatabase.css"
import YugiohCard from "../../model";
import yugimusictwo from "../../media/yugimusic2.mp3";

function CardDatabase() {
    const [cards, setCards] = useState([] as Array<YugiohCard>);

    const fetchAll = () => {
        fetch(`http://localhost:8080/cards`)
            .then((response) => response.json())
            .then((cardsFromBackend: Array<YugiohCard>) =>
                setCards(cardsFromBackend)
            );
    };

    useEffect(() => {
        fetchAll();
    }, );

  return (
      <div>
          <div>
             <Header/>
          </div>
          <audio autoPlay loop>
              <source src={yugimusictwo} type="audio/mpeg"/>
          </audio>

          {cards.map((card) => (
              <div key={card.id} className="savedCard">
                  <img className="savedcardtype" src={card.cardtype} alt="" />
                  <img className="savedimage" src={card.image} alt="" />

                  <div key={card.id} className="details-container">
                      <div className="savedname">Name: {card.name}</div>
                      <div className="savedrace">Race: {card.race}</div>
                      <div className="savedtype">Type: {card.type}</div>
                      <div className="savedlevel">Level: {card.normallevel}</div>
                      <div className="savedxyzlevel">Xyz-Level: {card.xyzlevel}</div>
                      <div className="attribute-txt">Attribute:</div>
                      <img className="savedattribute" src={card.attribute} alt="" />
                      <div className="savedattack">Attack: {card.attack}</div>
                      <div className="saveddefence">Defence: {card.defence}</div>
                      <div className="saveddescription">Description: {card.description}</div>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default CardDatabase