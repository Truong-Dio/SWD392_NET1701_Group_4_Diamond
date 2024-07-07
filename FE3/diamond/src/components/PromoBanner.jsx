import React from "react";

const PromoBanner = () => {
  return (
    <section className="flex flex-col justify-center items-end px-16 mt-20 max-w-full bg-teal-900 w-[1440px] max-md:pl-5 max-md:mt-10">
      <div className="max-w-full w-[1123px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b39831eb04a16d85f5ce29a1a3e18c506644a5b4955d85b5de833ab300b0c928?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
              alt="Promo image"
              className="grow shrink-0 max-w-full aspect-[1.64] w-[220px]"
            />
          </div>
          <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-6 pb-2 pl-4 text-white max-md:max-w-full">
              <div className="text-base font-medium leading-6 max-md:mr-2.5 max-md:max-w-full">
                ENDS SOON!
              </div>
              <div className="mt-3.5 text-base max-md:mr-2.5 max-md:max-w-full">
                Receive a Sapphire Necklace with purchase over $1,000.
              </div>
              <a href="#" className="self-end mt-8 text-xs leading-4 underline">
                See Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
