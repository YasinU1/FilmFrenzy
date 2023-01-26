import React from "react";
import { PromoBannerCardStyles } from "./PromoBannerCardStyles";

interface PromoBannerProps {
  promoBannerImage: string;
  promoBannerTitle: string;
  promoBannerText: string;
  smallCard?: boolean;
  className?: string;
}

const PromoBannerCard = ({
  promoBannerImage,
  promoBannerTitle,
  promoBannerText,
  smallCard
}: PromoBannerProps) => {
  return (
    <PromoBannerCardStyles smallCard={smallCard}>
      <img src={promoBannerImage} />
      <h1>{promoBannerTitle}</h1>
      <p>{promoBannerText}</p>
    </PromoBannerCardStyles>
  );
};
export default PromoBannerCard;
