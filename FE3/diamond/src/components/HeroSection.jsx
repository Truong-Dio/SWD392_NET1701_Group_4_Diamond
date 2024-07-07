import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center self-stretch w-full font-medium bg-neutral-200 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col items-end p-20 w-full min-h-[600px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a555002e5f395457d0dee9a530c6137fa11c6aaf543a238eae0b68b974c4921?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
          alt="Hero background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-36 text-4xl text-white leading-[52.92px] max-md:mt-10 max-md:max-w-full">
          Save the Date
        </div>
        <div className="relative mt-5 text-base text-white max-md:max-w-full">
          This summer, RSVP yes to a style you'll melt over.
        </div>
        <div className="flex relative flex-wrap gap-4 justify-between content-center pt-2 mt-5 mb-24 text-sm text-center max-md:mb-10">
          <button className="flex-1 justify-center px-10 leading-10 bg-white text-zinc-800 max-md:px-5">
            Shop Engagement Rings
          </button>
          <button className="flex-1 justify-center px-12 py-px leading-10 text-white border border-white border-solid max-md:px-5">
            Shop Wedding Rings
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
