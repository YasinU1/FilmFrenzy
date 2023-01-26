import React from "react";
import ItemCardStyles from "./ItemCardStyles";
import { Link } from "react-router-dom";


interface ItemCardProps {
  itemImage?: string;
  itemTitle?: string;
  itemDescription?: string;
  itemLink: string;
}

const ItemCard = ({ itemImage, itemTitle, itemDescription, itemLink }: ItemCardProps) => {
  return (
    <ItemCardStyles className="swiper-slide">
      <img className="movie-img" src={itemImage} />
      <figcaption>
        <h3>{itemTitle}</h3>
        <p>{itemDescription}</p>
        <Link to={itemLink} className="read-more">Read More</Link>
      </figcaption>
    </ItemCardStyles>
  );
};
export default ItemCard;