import React from "react";
import HeroBannerStyles from "./HeroBannerStyles";
import { NavButton } from "../Button/Button";
interface HeroBannerProps {
  heroBannerHeading?: string;
  heroBannerText?: string;
  heroBannerImage?: string;
}

const HeroBanner = ({
  heroBannerHeading,
  heroBannerText,
  heroBannerImage
}: HeroBannerProps) => {
  return (
    <HeroBannerStyles>
      <img src={heroBannerImage} alt="Hero" />
      <h1>{heroBannerHeading}</h1>
      <p>{heroBannerText}</p>
    </HeroBannerStyles>
  );
};
export default HeroBanner;
