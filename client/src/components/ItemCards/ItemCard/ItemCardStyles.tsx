import styled, { keyframes } from "styled-components";

const swipe = keyframes`
  50% {
    -webkit-transform: scale(0.8) translateY(0%);
    transform: scale(0.8) translateY(0%);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: scale(0.8) translateY(-150%);
    transform: scale(0.8) translateY(-150%);
    opacity: 0.5;
  }
`;

const swipeWebkit = keyframes`
  50% {
    -webkit-transform: scale(0.8) translateY(0%);
    transform: scale(0.8) translateY(0%);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: scale(0.8) translateY(-150%);
    transform: scale(0.8) translateY(-150%);
    opacity: 0.5;
  }
`;

const ItemCardStyles = styled.div`
  width: auto;
  color: #ffffff;
  text-align: left;
  background-color: #0c0a07;
  font-size: 16px;
  padding: 1rem;
  position: relative;
  overflow: hidden;


  display: inline-block;
  /* This makes a new card and below is the different elements within the card when hovered over */
  & * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
  img {
    width: 100%;
    object-fit: cover;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
    backface-visibility: hidden;
  }
  figcaption {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    -webkit-transform: scale(0.5) translate(0%, -50%);
    transform: scale(0.5) translate(0%, -50%);
    -webkit-transform-origin: 50% 0%;
    -ms-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    z-index: 1;
    opacity: 0;
    padding: 0 30px;
  }
  h3,
  p {
    line-height: 1.5em;
  }
  h3 {
    margin: 0;
    font-weight: 800;
    text-transform: uppercase;
  }
  p {
    font-size: 0.8em;
    font-weight: 500;
    margin: 0 0 15px;
  }
  .read-more {
    border: 2px solid #ffffff;
    padding: 0.5em 1em;
    font-size: 0.8em;
    text-decoration: none;
    color: #ffffff;
    display: inline-block;
  }
  /* A small animation when the readmore is hovered over */
  .read-more:hover {
    background-color: #ffffff;
    color: #006aff;
    cursor: pointer;
  }
  /* Adding the keyframe animations */
  &:hover img,
  &.hover img {
  animation: ${swipe} 0.45s linear;
  -webkit-animation: ${swipeWebkit} 0.45s linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  cursor: pointer;
  }
  &:hover figcaption,
  &.hover figcaption {
  -webkit-transform: scale(1) translate(0, -50%);
  transform: scale(1) translate(0, -50%);
  opacity: 1;
  -webkit-transition-delay: 0.35s;
  transition-delay: 0.35s;
}`;
export default ItemCardStyles;
