import React from "react";
import Header from "./Header";
<<<<<<< Updated upstream
import HeroSection from "./HeroSection";
=======
import HeroBanner from "./HeroBanner";
>>>>>>> Stashed changes
import DiamondShapes from "./DiamondShapes";
import ShopByCategory from "./ShopByCategory";
import PromoBanner from "./PromoBanner";
import SignatureCollection from "./SignatureCollection";
import BridalDesigns from "./BridalDesigns";
import FeaturedCollections from "./FeaturedCollections";
import JewelryRedefined from "./JewelryRedefined";
import CustomerService from "./CustomerService";
import GetInspired from "./GetInspired";
import Footer from "./Footer";
import ChatButton from "./ChatButton";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(0deg,#FFF_0%,#FFF_100%,#FFF)]">
      <Header />
      <main>
<<<<<<< Updated upstream
        <HeroSection />
=======
        <HeroBanner />
>>>>>>> Stashed changes
        <DiamondShapes />
        <ShopByCategory />
        <PromoBanner />
        <SignatureCollection />
        <BridalDesigns />
        <FeaturedCollections />
        <JewelryRedefined />
        <CustomerService />
        <GetInspired />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default HomePage;
