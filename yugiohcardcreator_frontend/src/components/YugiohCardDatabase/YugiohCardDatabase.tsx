import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import "./YugiohCardDatabase.css"
import MonsterCard from "./MonsterCard/MonsterCard";


interface MonsterDetails {
  id: string;
  name: string;
  type: string;
  desc: string;
  race: string;
  level: string;
  card_images: Array<CardImage>;
}

interface CardImage {
  image_url: string;
}



function YugiohCardDatabase() {
  const [filter, setFilter] = useState("");
  const [monsters, setMonsters] = useState([] as Array<MonsterDetails>);

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?language=de`)
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data.data);
        setFilter("");
      })
      .catch(() => console.log("not good"));
  }, []);
  
  return (
    <>
    <div>
        <Header/>
    </div>
      <div className="char-title">
        <h1>Yu-Gi-Oh! Card Database</h1>
      </div>
    <div className="carddatabase-container">
    <input
        type="text"
        placeholder="Search Monster Card..."
        value={filter}
        onChange={(ev) => {
          setFilter(ev.target.value);
        }}
        className="monstersearch"
      />
      <div className="monsterBox">
        {monsters.length > 0 ? (
          monsters
            .filter((mon) =>
              mon.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((monster) => (
              <MonsterCard
                key={monster.id}
                id={monster.id}
                name={monster.name}
                type={monster.type}
                desc={monster.desc}
                level={monster.level}
                race={monster.race}
                image={monster.card_images[0].image_url}
              />
            ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
    </>
  )
}

export default YugiohCardDatabase