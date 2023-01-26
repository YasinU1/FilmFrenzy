import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import itemCardsData from "./ItemCardsData.json";
import ItemCardsStyles from "./ItemCardsStyles";

interface ItemCardsProps {
  itemCardDataStart?: number;
  itemCardDataEnd?: number;
}

const ItemCards = ({ itemCardDataStart, itemCardDataEnd }: ItemCardsProps) => {
  return (
    <ItemCardsStyles>
      <div className="item-card-container">
        {itemCardsData.itemCards
          .slice(itemCardDataStart, itemCardDataEnd)
          .map((card) => (
            <ItemCard key={1} {...card} itemLink={`/films/${card.id}`} />
          ))}
      </div>
    </ItemCardsStyles>
  );
};
export default ItemCards;
