import React from "react";

const BridalDesigns = () => {
  return (
    <section className="mt-20 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-medium leading-10 text-zinc-800 max-md:max-w-full">
        Our Most Coveted Bridal Designs
      </h2>
      <div className="flex overflow-hidden relative flex-col gap-5 justify-end px-5 mt-8 w-full min-h-[505px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd149809-01c5-458d-a827-ca7adb0c4c8e?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
          alt="Bridal designs background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative shrink-0 max-w-full h-[505px] w-[392px]" />
        <div className="relative shrink-0 max-w-full h-[505px] w-[392px]" />
        <div className="relative shrink-0 max-w-full h-[505px] w-[393px]" />
        <div className="relative shrink-0 h-[505px] w-[191px]" />
      </div>
    </section>
  );
};

export default BridalDesigns;
