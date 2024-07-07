import React from "react";
import TopBanner from "./TopBanner";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex flex-col items-center bg-[linear-gradient(0deg,#FFF_0%,#FFF_100%,#FFF)]">
      <TopBanner />
      <Navigation />
    </header>
  );
};

export default Header;
