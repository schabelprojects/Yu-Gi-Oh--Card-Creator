import React, { useState } from 'react'
import "./MonsterCard.css"


interface MonsterCardProps{
    id : string;
    name : string;
    type : string;
    desc : string;
    level: string;
    race : string;
    image: string;
}


function MonsterCard(props: MonsterCardProps) {

  const [cardDescription, setCardDescription] = useState(false);

  const toggleModal = () => {
    setCardDescription(!cardDescription)
  }

  return (
    <div className="card">
    <button onClick={toggleModal} className="cardbtn">{props.name}</button>
    {cardDescription && 
<div className="card_modal">
<div className="card_overlay" onClick={toggleModal}></div>
<div className="cardmodal-container">
    <div className="cardmodal-name">
        <h3>{props.name}</h3>
    </div>
    <div className="cardmodal-desc">
        <p>{props.desc}</p>
    </div>
  <img src={props.image} className="card-img" />
 <button className="close-modal" onClick={toggleModal}>
   Close
 </button>
</div>
</div>
}
    </div>
  )
}

export default MonsterCard