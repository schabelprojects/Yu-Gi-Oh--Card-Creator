import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import "./CardCreatorIntroPage.css"
import kaibaimg from "../../media/kaiba(1).png"
import kaibaintro from "../../media/Voices/kaiba-intro.wav"
import kaibatcg from "../../media/Voices/kaiba-card-tcg.wav"
import kaibacardcreator from "../../media/Voices/kaiba-cardcreator.wav"
import kaibasavedcards from "../../media/Voices/kaiba-savedCards.wav"
import kaibacharacterlist from "../../media/Voices/kaiba-characterlist.wav"
import kaibaabout from "../../media/Voices/kaiba-about.wav"


function CardCreatorIntroPage() {

    const [tcg, setTcg] = useState(1);
    const [cardcreator, setCardCreator] = useState(1);
    const [savedCards, setSavedCards] = useState(1);
    const [characterlist, setCharacterlist] = useState(1);
    const [about, setAbout] = useState(1)

    function playtcg() {
        new Audio(kaibatcg).play()
    }

    function playcardcreator() {
        new Audio(kaibacardcreator).play()
    }

    function playsavedcards() {
        new Audio(kaibasavedcards).play()
    }

    function playcharacterlist() {
        new Audio(kaibacharacterlist).play()
    }

    function playabout() {
        new Audio(kaibaabout).play()
    }

    useEffect(() => {
        if(about % 2 === 0)
     playabout()
    }, [about])

    useEffect(() => {
        if(tcg % 2 === 0)
            playtcg()
    }, [tcg])

    useEffect(() => {
        if(characterlist % 2 === 0)
            playcharacterlist()
    }, [characterlist])

    useEffect(() => {
        if(savedCards % 2 === 0)
            playsavedcards()
    }, [savedCards])

    useEffect(() => {
        if(cardcreator % 2 === 0)
            playcardcreator()
    }, [cardcreator])

  return (
      <>
          <audio autoPlay>
              <source src={kaibaintro} type="audio/mpeg"/>
          </audio>
    <div>
        <Header/>
    </div>
    <div className="intro-img">
        <img src={kaibaimg} />
    </div>
          <div className="introcontainer">
              <h3 className="nav-option" onClick={() => setTcg(tcg+1)}>
                  Yu-Gi-Oh! Card List
              </h3>
              <h3 className="nav-option" onClick={() => setCardCreator(cardcreator+1)} >
                  Card Creator
              </h3>
              <h3 className="nav-option" onClick={() => setSavedCards(savedCards+1)} >
                  Created Cards
              </h3>
              <h3 className="nav-option" onClick={() => setCharacterlist(characterlist+1)} >
                  Character Index
              </h3>
              <h3 className="nav-option" onClick={() => setAbout(about+1)} >
                  About
              </h3>
          </div>
      </>
  )
}

export default CardCreatorIntroPage