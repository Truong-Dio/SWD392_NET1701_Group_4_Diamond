import React from "react";

const FeaturedCollection = ({ image, title, description }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow self-stretch px-5 font-medium text-zinc-800 max-md:mt-4 max-md:max-w-full">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="w-full aspect-[1.32] max-md:max-w-full"
      />
      <h3 className="mt-6 text-3xl leading-10 max-md:max-w-full">{title}</h3>
      <p className="mt-2 text-base leading-6 max-md:max-w-full">
        {description}
      </p>
      <button className="justify-center items-center px-16 py-px mt-6 max-w-full text-sm leading-10 text-center border border-solid border-zinc-800 w-[297px] max-md:px-5">
        Shop Now
      </button>
    </div>
  </div>
);

const FeaturedCollections = () => {
  const collections = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1b39003b04ba6f4e955c39ef2353b2bcce935f96bf03213e75883eecf7ee60b?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
      title: "The Hoop Shop",
      description: "Your one-stop-shop for perfectly proportioned pairs.",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/91474b33a8b8a9222e795dec45012b6fb58ddf18a57512403fa109c09497d224?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&",
      title: "The Essentials Edit",
      description:
        "Signature pieces to swear by. Your jewelry capsule starts here.",
    },
  ];

  return (
    <section className="justify-center mt-20 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {collections.map((collection, index) => (
          <FeaturedCollection key={index} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
