import React from "react";

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow items-start self-stretch text-xs tracking-wide leading-4 text-zinc-800 max-md:mt-10">
      <h3 className="self-stretch text-sm tracking-wide leading-5 uppercase">
        {title}
      </h3>
      {items.map((item, index) => (
        <a key={index} href="#" className="mt-2.5 leading-[125%]">
          {item}
        </a>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const footerSections = [
    {
      title: "ABOUT",
      items: [
        "Our Story",
        "Our Mission",
        "Responsible Sourcing",
        "Sustainability Goals",
        "How We Give Back",
        "Our People",
        "Brilliant Earth Reviews",
      ],
    },
    {
      title: "ORDERS",
      items: [
        "Track Your Order",
        "Free 30 Day Returns",
        "Free Shipping Both Ways",
        "Free Lifetime Warranty",
      ],
    },
    {
      title: "CONTACT US",
      items: [
        "Live Chat",
        "Book Appointment",
        "Stores",
        "Email Us",
        "650.530.1828",
        "Affiliates",
      ],
    },
    {
      title: "EDUCATION",
      items: [
        "Blog",
        "Diamond Buying Guide",
        "Lab Grown Diamonds",
        "Moissanite vs. Diamonds",
        "Ring Size Chart",
        "Careers",
        "Investor Relations",
      ],
    },
    {
      title: "CUSTOMER SERVICE",
      items: [
        "FAQs",
        "Jewelry Financing",
        "Lifetime Diamond Upgrade",
        "Promo Codes & Offers",
        "Refer a Friend",
        "Accessibility",
        "Accessibility Info",
      ],
    },
  ];

  return (
    <footer className="flex gap-5 self-stretch pt-8 pr-5 pb-5 pl-20 mt-20 w-full border-t border-solid border-neutral-300 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col pt-5 max-md:max-w-full">
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {footerSections.map((section, index) => (
              <FooterSection key={index} {...section} />
            ))}
          </div>
        </div>
        <div className="flex flex-col self-stretch my-auto text-xs tracking-wide text-zinc-800 max-md:mt-10">
          <h3 className="text-sm tracking-wide leading-5 uppercase">
            Sign Up for Email
          </h3>
          <p className="mt-5 tracking-wide leading-[127%]">
            Send me Brilliant Earth news, updates and offers.
          </p>
          <form className="flex gap-0 mt-3.5 tracking-wider capitalize">
            <input
              type="email"
              placeholder="Your Email Address"
              className="justify-center px-4 py-4 bg-white border border-solid border-neutral-200"
            />
            <button
              type="submit"
              className="shrink-0 w-11 border border-teal-900 border-solid aspect-[0.98]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a465865e76904bfe5f0b852f4a1b88efb8227210ee8ff40e29f1d56e1f1ef2b0?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
                alt="Submit"
                className="w-full h-full"
              />
            </button>
          </form>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4783962e7ac3c87379ddf24fce104743f05561fa01b36dda23cea5c28bc0014b?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
            alt="Social media icons"
            className="self-center mt-5 aspect-[10] w-[358px]"
          />
        </div>
        <div className="flex gap-0 items-start pt-3 mt-3.5 text-xs tracking-wide leading-4 text-zinc-800 max-md:flex-wrap">
          <div className="flex gap-0.5 justify-center">
            <div className="grow">©2024 Brilliant Earth, LLC</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e370cea92997d647120fb1ee8be2e4262819b8ec09faee81c25560ca2bd92f6?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
              alt=""
              className="shrink-0 self-start aspect-[2.27] w-[25px]"
            />
          </div>
          <a href="#" className="flex gap-0 justify-center leading-[150%]">
            <div>Terms & Conditions</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93edd102aed30f23f0b5414cc12dad82822fece247bdc94dc920137dde724155?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
              alt=""
              className="shrink-0 self-start aspect-[2.27] w-[25px]"
            />
          </a>
          <a href="#" className="flex gap-0 justify-center leading-[155%]">
            <div>Privacy Policy</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e3da8fd22d665f68b1256725ce87c55184ab1e375f354e85fe5819413c5dfaa?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
              alt=""
              className="shrink-0 self-start aspect-[2.27] w-[25px]"
            />
          </a>
          <a href="#" className="flex gap-0 justify-center">
            <div>Interest-Based Ads</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2162934efbe93acc60413da8c1279e14ca5265eeacc748bea8536a8fd94c1603?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
              alt=""
              className="shrink-0 self-start aspect-[2.27] w-[25px]"
            />
          </a>
          <a href="#" className="justify-center leading-[150%]">
            Do Not Share My Personal Information (California Residents)
          </a>
          <a href="#" className="flex gap-0 justify-center">
            <div>CA Transparency Act</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e370cea92997d647120fb1ee8be2e4262819b8ec09faee81c25560ca2bd92f6?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
              alt=""
              className="shrink-0 self-start aspect-[2.27] w-[25px]"
            />
          </a>
          <a
            href="#"
            className="justify-center text-xs leading-4 whitespace-nowrap"
          >
            CPRA
          </a>
          <a href="#" className="text-xs leading-4">
            Site Map
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
