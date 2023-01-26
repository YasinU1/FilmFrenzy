import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ItemCards from "../../components/ItemCards/ItemCards";
import glassOnion from "../../../public/assets/images/banners/glass-onion-banner.png";
import { LoginStyles } from "./LoginStyles";

const Home = () => {
  return (
    <LoginStyles>
      <HeroBanner heroBannerImage={glassOnion} heroBannerHeading="Products" />
      <ItemCards />
    </LoginStyles>
  );
};
export default Home;
