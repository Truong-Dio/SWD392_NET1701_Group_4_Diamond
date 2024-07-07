import React from "react";

const SignatureCollection = () => {
  return (
    <section className="justify-center mt-20 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cef92237774be14c15a671c0e827935d31530fe8bda901e8de2202c3948c321d?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt="Signature Collection"
            className="grow w-full aspect-[1.32] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center self-stretch px-12 py-20 w-full font-medium bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
            <div className="mt-20 text-lg leading-6 max-md:mt-10 max-md:max-w-full">
              SIGNATURE COLLECTION
            </div>
            <h2 className="mt-2 text-3xl leading-10 max-md:max-w-full">
              The Secret Garden
            </h2>
            <p className="mt-4 text-base leading-6 max-md:max-w-full">
              Marquise diamond accents, purposefully nestled within sweeping
              branches and vines,
              <br />
              give the illusion of climbing leaves and buds.
            </p>
            <div className="flex gap-4 justify-center mt-8 leading-10 text-center max-md:flex-wrap max-md:max-w-full">
              <button className="justify-center items-center px-16 py-px text-sm border border-solid border-zinc-800 max-md:px-5">
                Shop Now
              </button>
              <button className="justify-center items-center px-16 py-px text-sm border border-solid border-zinc-800 max-md:px-5">
                Explore More Collections
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
