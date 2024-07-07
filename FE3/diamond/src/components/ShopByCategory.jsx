import React from "react";

const ShopByCategory = () => {
  return (
    <section className="mt-20 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-medium leading-10 text-zinc-800 max-md:max-w-full">
        Shop By Category
      </h2>
      <div className="flex overflow-hidden relative flex-col gap-5 justify-end px-5 mt-8 w-full min-h-[504px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6403a338-11f2-4fc4-984c-8bcfffd2e43b?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
          alt="Shop by category background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative shrink-0 max-w-full h-[504px] w-[392px]" />
        <div className="relative shrink-0 max-w-full h-[504px] w-[392px]" />
        <div className="relative shrink-0 max-w-full h-[504px] w-[393px]" />
        <div className="relative shrink-0 h-[504px] w-[191px]" />
      </div>
    </section>
  );
};

export default ShopByCategory;
