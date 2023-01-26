import React from "react";
import { DiscoverBannerStyles } from "./DiscoverBannerStyles";

interface DiscoverBannerProps {
  discoverBannerImage: string;
  discoverBannerTitle: string;
  discoverBannerText: string;
}
const DiscoverBanner = ({
  discoverBannerImage,
  discoverBannerTitle,
  discoverBannerText
}: DiscoverBannerProps) => {
  return (
    <DiscoverBannerStyles>
      <img src={discoverBannerImage} />
      <h1>{discoverBannerTitle}</h1>
      <p>{discoverBannerText}</p>
    </DiscoverBannerStyles>
  );
};
export default DiscoverBanner;
