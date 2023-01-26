import React from "react";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SkinnyBanner from "../components/SkinnyBanner/SkinnyBanner";
import ItemCards from "../components/ItemCards/ItemCards";
import glassOnion from "../../public/assets/images/banners/glass-onion-banner.png";
import FilmOfDay from "../components/FilmOfDay/FilmOfDay";
const Home = () => {
  return (
    <>
      <HeroBanner heroBannerImage={glassOnion} />
      <SkinnyBanner bannerHeading="Top Picks" />
      <ItemCards itemCardDataEnd={5} />
      <SkinnyBanner bannerHeading="Film of the Day" />
      <FilmOfDay />
    </>
  );
};
export default Home;
