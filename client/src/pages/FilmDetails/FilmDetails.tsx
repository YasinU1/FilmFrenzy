import React from "react";
import itemCardsData from "../../components/ItemCards/ItemCardsData.json";
import { useLocation, useParams } from "react-router-dom";
import "./FilmDetailsStyles.css";

const FilmDetails = () => {
  const { filmId: filmIdString } = useParams();
  const filmId = Number(filmIdString);
  return (
    <>
      <div className="grid-container">
        <div className="product-img">
          <img src={itemCardsData.itemCards[filmId].itemImage} />
        </div>
        <div className="product-title">
          <h1>{itemCardsData.itemCards[filmId].itemTitle}</h1>
        </div>
        <div className="product-description">
          <p>{itemCardsData.itemCards[filmId].itemDescription}</p>
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
