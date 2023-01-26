import styled from "styled-components";

const ItemCardsStyles = styled.div`
  & .item-card-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
export default ItemCardsStyles;
