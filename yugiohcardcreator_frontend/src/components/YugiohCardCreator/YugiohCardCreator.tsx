// @ts-ignore
import  React, {useState} from 'react'
import Header from '../Header/Header'
import "./YugiohCardCreator.css"
import { createArraysWithIds } from "../../utils/array";

// @ts-ignore
import normalcard from '../../media/normal.png'
// @ts-ignore
import effectcard from '../../media/effect.png'
// @ts-ignore
import fusioncard from '../../media/fusion.png'
// @ts-ignore
import ritualcard from '../../media/ritual.png'
// @ts-ignore
import synchrocard from '../../media/synchro.png'
// @ts-ignore
import xyzcard from '../../media/xyz.png'

// @ts-ignore
import levelstarNormal from '../../media/levelstar_normal.png'
// @ts-ignore
import levelstarXyz from '../../media/levelstar_xyz.png'

// @ts-ignore
import dark from "../../media/dark.png"
// @ts-ignore
import light from "../../media/light.png"
// @ts-ignore
import divine from "../../media/divine.png"
// @ts-ignore
import fire from "../../media/fire.png"
// @ts-ignore
import earth from "../../media/earth.png"
// @ts-ignore
import wind from "../../media/wind.png"
// @ts-ignore
import water from "../../media/water.png"

const attributes = [dark, light, divine, earth, fire, wind, water];

const cardtypes = [ normalcard, effectcard, fusioncard, ritualcard, synchrocard, xyzcard,];

function YugiohCardCreator() {

  const [normalStars, setNormalStars] = useState<{ id: string }[]>([]);
  const [xyzStars, setXyzStars] = useState<{ id: string }[]>([]);
  const [race, setRace] = useState("");
  const [attribute, setAttribute] = useState<string | undefined>();
  const [type, setType] = useState("");
  const [card, setCard] = useState<string | undefined>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [attack, setAttack] = useState("");
  const [defence, setDefence] = useState("");
  const [img, setImg] = useState({} as File);
  const [url, setUrl] = useState("");


  const addCard = () => {
    fetch(`http://localhost:8080/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        attribute: attribute,
        xyzlevel: xyzStars.length,
        normallevel: normalStars.length,
        cardtype: card,
        type: type,
        race: race,
        description: description,
        attack: attack,
        defence: defence,
        image: url,
      }),
    })
        .then((response) => response.json())
        .then(() => {
          setName("");
          setAttribute("");
          setNormalStars([]);
          setXyzStars([]);
          setType("");
          setRace("");
          setAttack("");
          setDefence("");
          setImg({} as File);
          setCard('');
          setDescription('');
          setUrl('');
        });
  };

  const changeAttribute = (src: string) => {
    setAttribute(src);
  };

  const changeType = (types: string) => {
    setType(types);
  };

  const changeCard = (card: string) => {
    setCard(card);
  };

  const changeRace = (races: string) => {
    setRace(races);
  };

  const changeLevel = (stars: number) => {
    if (card !== xyzcard) setNormalStars(createArraysWithIds(stars));
  };

  const changeXyzLevel = (xyzlevel: number) => {
    if (card === xyzcard) {
      setXyzStars(createArraysWithIds(xyzlevel));
    }
  };

  const performFileUpload = () => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "yugiohcardcreator");

    fetch("https://api.cloudinary.com/v1_1/schabelprojects/image/upload", {
      method: "POST",
      body: formData,
    })
        .then((response) => response.json())
        .then((data) => setUrl(data.secure_url));
  };


  return (
      <div className="body-container">
        <div>
          <Header/>
        </div>
        <div className="attribute_card">
          {attribute && <img src={attribute} alt="character Attribute" />}
        </div>

        <div className="cardtype-container">
          {card && <img src={card} alt="character Card" />}
        </div>

        <div className="star-container">
          {normalStars.map((star) => {
            return <img key={star.id} className="star" src={levelstarNormal} alt="" />;
          })}
        </div>

        <div className="star-container2">
          {xyzStars.map((star2) => {
            return (
                <img key={star2.id} className="star2" src={levelstarXyz} alt="" />
            );
          })}
        </div>

        <div className="name-container">{name}</div>

        <div className="race-container">
          {race}/{type}
        </div>

        <div className="attack-container">{attack}</div>

        <div className="defence-container">{defence}</div>

        <div className="inputfield">
          <input
              onChange={(e) => setName(e.target.value)}
              className="input-items"
              type="text"
              placeholder="Name"
          />

          <label className="level-text">Level:</label>
          <select
              onChange={(e) => changeLevel(parseInt(e.target.value))}
              className="level"
              name="Level"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>

          <label className="xyzlevel-text">Xyz-Level:</label>
          <select
              onChange={(e) => changeXyzLevel(parseInt(e.target.value))}
              name="xyzlevel"
              className="xyzLevel"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>

          <label className="attribute-text">Attribute:</label>
          <div className="attribute-container">
            {attributes.map((attribute) => {
              return (
                  <button
                      key={attribute}
                      className="btn"
                      onClick={() => {
                        changeAttribute(attribute);
                      }}
                  >
                    <img src={attribute} alt="" className="attribute-img" />
                  </button>
              );
            })}
          </div>
          <div>
            <label className="race-text">Race:</label>
            <select
                onChange={(e) => changeRace(e.target.value)}
                className="race"
                name="Race"
            >
              <option></option>
              <option>Aqua</option>
              <option>Beast</option>
              <option>Beast-Warrior</option>
              <option>Dinosaur</option>
              <option>Divine-Beast</option>
              <option>Dragon</option>
              <option>Fairy</option>
              <option>Fiend</option>
              <option>Fish</option>
              <option>Insect</option>
              <option>Machine</option>
              <option>Plant</option>
              <option>Psychic</option>
              <option>Pyro</option>
              <option>Reptile</option>
              <option>Rock</option>
              <option>Sea Serpent</option>
              <option>Spellcaster</option>
              <option>Thunder</option>
              <option>Winged Beast</option>
              <option>Wyrm</option>
              <option>Zombie</option>
            </select>
          </div>

          <div>
            <label className="type-text">Type:</label>
            <select
                onChange={(e) => changeType(e.target.value)}
                className="type"
                name="Type"
            >
              <option></option>
              <option>Effect</option>
              <option>Fusion</option>
              <option>Normal</option>
              <option>Ritual</option>
              <option>Synchro</option>
              <option>Xyz</option>
            </select>
          </div>

          <label className="cardtype-text">CardType:</label>
          <div className="cardtype-array">
            {cardtypes.map((cardtypes) => {
              return (
                  <button
                      key={cardtypes}
                      className="cardtype-btn"
                      onClick={() => {
                        changeCard(cardtypes);
                      }}
                  >
                    <img src={cardtypes} alt="" className="attribute-img" />
                  </button>
              );
            })}
          </div>

          <div>
            <label className="attack-text">ATK:</label>
            <input
                onChange={(e) => setAttack(e.target.value)}
                type="text"
                className="attack"
            />
          </div>

          <div>
            <label className="defence-text">DEF:</label>
            <input
                onChange={(e) => setDefence(e.target.value)}
                type="text"
                className="defence"
            />
          </div>

          <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="descript-text"
              placeholder="Description..."
          />

          <div>
            <label className="upload-text">Image:</label>
            <input
                className="upload"
                type="file"
                onChange={(ev) => {
                  if (ev.target.files != null) {
                    setImg(ev.target.files[0]);
                  }
                }}
            />
          </div>

          <div className="uploadButton">
            {img.size > 0 && (
                <button onClick={performFileUpload}>Upload Image</button>
            )}
          </div>
        </div>

        <div className="desc-container">{description}</div>

        <div>
          {url && <img className="monsterImage" src={url} alt="uploaded pic" />}
        </div>

        <div className="save-container">
          <button onClick={addCard} className="save-button">
            Save this Card
          </button>
        </div>
      </div>
  );
}

export default YugiohCardCreator