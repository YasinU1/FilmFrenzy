import React from "react";
import stone from "../../../public/assets/images/backgrounds/stone-background.jpg";
import Triangles from "../../../public/assets/images/backgrounds/red-triangles.jpg";
import Clouds from "../../../public/assets/images/backgrounds/red-clouds.jpg";
import Presents from "../../../public/assets/images/backgrounds/red-presents.jpg";
import Smoke from "../../../public/assets/images/backgrounds/blue-smoke.jpg";
import PromoBannerCard from "./PromoBannerCard/PromoBannerCard";
import "./PromoBannerStyles.css";
import PixelAd from "../../../public/assets/images/phones/pixel-7/pixel-7-ad.png";
import iPhoneAd from "../../../public/assets/images/backgrounds/iphone-ad.png";
import FoldAd from "../../../public/assets/images/backgrounds/fold-ad.png";

const PromoBanner = () => {
  return (
    <div className="grid-container">
      <div className="item1">
        <PromoBannerCard
          promoBannerImage={PixelAd}
          promoBannerTitle="Save £199"
          promoBannerText="Grab the all new Google Pixel 7 with 120Gb 5G data from only £38 a month (£49 upfront)"
        />
      </div>
      <div className="item2">
        <PromoBannerCard
          promoBannerImage={iPhoneAd}
          promoBannerTitle="Unlimited 5G Data"
          promoBannerText="Treat yourself to the new iPhone 14 with unlimited 5G data from only £51 a month."
          smallCard
        />
      </div>
      <div className="item3">
        <PromoBannerCard
          promoBannerImage={FoldAd}
          promoBannerTitle="Galaxy Fold 4"
          promoBannerText="Claim a free chromebook 4 with all Samsung Galaxy Fold 4 plans when purchased before 24th March 2023. "
          smallCard
        />
      </div>
    </div>
  );
};
export default PromoBanner;
