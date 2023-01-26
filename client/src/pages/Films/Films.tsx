import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ItemCards from "../../components/ItemCards/ItemCards";
import glassOnion from "../../../public/assets/images/banners/glass-onion-banner.png";
import { FilmsStyles } from "./FilmsStyles";

const Home = () => {
  return (
    <FilmsStyles>
      <HeroBanner heroBannerImage={glassOnion} heroBannerHeading="Products" />
      <ItemCards />
    </FilmsStyles>
  );
};
export default Home;
