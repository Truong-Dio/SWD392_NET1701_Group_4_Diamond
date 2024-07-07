import React from "react";

const TopBanner = () => {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-0.5 w-full tracking-wider text-center text-white bg-teal-900 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-1.5 justify-between px-1 py-1.5 rounded max-md:flex-wrap">
        <div className="text-xs leading-4 max-md:max-w-full">
          ENDS SOON! Receive a Sapphire Necklace With Purchase Over $1,000.
        </div>
        <div className="my-auto text-xs leading-3">&gt;</div>
      </div>
    </div>
  );
};

export default TopBanner;
