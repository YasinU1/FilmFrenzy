import React, { useState, useEffect } from "react";
import axios from 'axios';
import FilmOfDayStyles from "./FilmOfDayStyles";

const FilmOfDay = () => {
  const [randomFilm, setRandomFilm] = useState({title: "Loading....",description: "Loading....", imageURL: "Loading....."});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8000/api');
      setRandomFilm(res.data.documents[Math.floor(Math.random() * res.data.documents.length)]);
    }
    fetchData();
  }, []);

  return (
    <FilmOfDayStyles>
      <section id="motd">
        <img id="motd-poster" src={randomFilm.imageURL} />
        <div className="newReleaseInfo">
          <h3>{randomFilm.title}</h3>
          <p>{randomFilm.description}</p>
        </div>
      </section>
    </FilmOfDayStyles>
  );
};

export default FilmOfDay;