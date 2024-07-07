import React from "react";

const Navigation = () => {
  return (
    <nav className="flex flex-col items-center self-stretch px-16 pt-5 pb-px w-full border-b border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-0 items-start px-4 max-w-full w-[1200px] max-md:flex-wrap">
        <div className="flex gap-5">
          <div className="my-auto text-sm leading-5 text-zinc-800">
            650.530.1828
          </div>
          <div className="flex flex-col justify-center items-start py-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04c7d88bf696f05bb068fbb87e806d3745167aa6ad2d56d58f11e35235be2fd?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
              alt=""
              className="aspect-square w-[19px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch px-16 pt-4 max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b24bcc407eae3e14d3d910ded7067c466f9c05360ce81e2396b98f27cf53998?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt="Company Logo"
            className="max-w-full aspect-[12.5] w-[324px]"
          />
        </div>
        <div className="flex gap-5 justify-between items-start py-0.5 pr-5 pl-14 max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/733b09cef3bb7f62e1eb143cfcde30084fab06c3a681e7b3972bc6c149248dc8?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt=""
            className="shrink-0 w-5 aspect-[0.87]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b9d93a0f519bcdc007d9f8cd7390842093c649aeedfb54e5e84bef49b0c651b?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt=""
            className="shrink-0 aspect-square w-[19px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1834f263f80d12bee423a17c265fdafe1fcc995d6873c02e27af8c74dc980c29?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt=""
            className="shrink-0 aspect-square w-[19px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a9e937f5121c013bd93c36e8ecc66d15d60eb92ebe4b3f40b1c0079cb8f1fa?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt=""
            className="shrink-0 aspect-square w-[19px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c37f81fd-67b3-48ea-8dd8-d058a2f607dd?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt=""
            className="shrink-0 self-stretch w-20 aspect-[3.45]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
