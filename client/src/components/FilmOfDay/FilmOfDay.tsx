import React, { useState } from "react";
import itemCardsData from "../ItemCards/ItemCardsData.json";
import FilmOfDayStyles from "./FilmOfDayStyles";

const getRandomObject = (array: string | any[]) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return randomObject;
};

const FilmOfDay = () => {
  const [randomFilm, setRandomFilm] = useState(() =>
    getRandomObject(itemCardsData.itemCards)
  );
  return (
    <FilmOfDayStyles>
      <section id="motd">
        <img id="motd-poster" src={randomFilm.itemImage} />
        <div className="newReleaseInfo">
          <h3>{randomFilm.itemTitle}</h3>
          <p>{randomFilm.itemDescription}</p>
        </div>
    </section>
    </FilmOfDayStyles>
  );
};
export default FilmOfDay;
