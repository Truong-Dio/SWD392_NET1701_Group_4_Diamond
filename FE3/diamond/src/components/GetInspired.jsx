import React from "react";

const GetInspired = () => {
  return (
    <section className="flex flex-col pt-12 pb-16 mt-20 w-full bg-teal-900 max-w-[1440px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between px-5 pb-2.5 font-medium text-white max-md:flex-wrap max-md:max-w-full">
        <h2 className="text-3xl leading-10">Get Inspired</h2>
        <a
          href="#"
          className="self-start mt-4 text-base leading-6 text-center underline"
        >
          Shop Instagram
        </a>
      </div>
      <div className="flex gap-4 py-2 pr-5 pl-2 mt-5 mb-1 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4513d453933b140095bbe5f140394d81e2bbc3f8925d9f0275c111c40c34cd18?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
          alt="Inspiration 1"
          className="shrink-0 max-w-full aspect-square w-[318px]"
        />
        <div className="flex flex-col justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca5384b3b697ff74c73905c3b8d3b1b6b4112f2b7068ddb8db6fc9cfcc66cbf?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt="Inspiration 2"
            className="w-full aspect-square"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fccf0bfb4fbe5c5d549d8eae21a5265a3e4748eac68f2846415d0089b0ad768d?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
          alt="Inspiration 3"
          className="shrink-0 max-w-full aspect-square w-[318px]"
        />
        <div className="flex flex-col justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9da9870fecbc4ac9c9a850ef062febdf6e26519c1c50471f8db18016187a3d3?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt="Inspiration 4"
            className="w-full aspect-square"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d76c4ecee8a0f6fb6c8287e11143c2d21696a4802b9c8667698ecbd13b539a7?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt="More inspirations"
            className="aspect-[0.24] w-[76px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInspired;
