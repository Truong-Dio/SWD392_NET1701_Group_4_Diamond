import { useCallback } from "react";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.tiktok.com/@brilliantearth");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.youtube.com/@BrilliantEarthInc");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.instagram.com/brilliantearth/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.facebook.com/brilliantearth");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.pinterest.com/brilliantearth/");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://twitter.com/BrilliantEarth");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://www.linkedin.com/company/brilliantearth");
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 ${className}`}
    >
      <div className="w-[1200px] flex flex-row items-start justify-start max-w-[1200px] min-h-[265px] max-h-[999999px] lg:max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[1.5px] box-border gap-[2.8px] max-h-[999999px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[19.1px] px-[15px] pb-5 box-border min-w-[300px] min-h-[1px] max-h-[999999px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px] max-h-[999999px]">
                <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                  <div className="flex flex-row items-start justify-start pt-[0.7px] px-0 pb-[0.8px] box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.42px] leading-[16px] uppercase text-[inherit] inline-block min-w-[51px]">
                      ABOUT
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.1px] max-h-[999999px] text-smi-3">
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-5">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[59px]"
                        href="https://www.brilliantearth.com/about/"
                        target="_blank"
                      >
                        Our Story
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-6">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[74px]"
                        href="https://www.brilliantearth.com/about/mission/"
                        target="_blank"
                      >
                        Our Mission
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/about/mission/transparency/"
                        target="_blank"
                      >
                        Responsible Sourcing
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[119px]"
                        href="https://www.brilliantearth.com/about/mission/sustainability/"
                        target="_blank"
                      >
                        Sustainability Goals
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-5">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[116px]"
                        href="https://www.brilliantearth.com/about/mission/compassion/"
                        target="_blank"
                      >
                        How We Give Back
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-9">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[71px]"
                        href="https://www.brilliantearth.com/about/mission/inclusion/"
                        target="_blank"
                      >
                        Our People
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/brilliant-earth-reviews/"
                        target="_blank"
                      >
                        Brilliant Earth Reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[19.1px] px-[15px] pb-5 box-border min-w-[300px] min-h-[1px] max-h-[999999px] max-w-full text-sm-9">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px] max-h-[999999px]">
                <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                  <div className="flex flex-row items-start justify-start pt-[0.7px] px-0 pb-[0.8px] box-border max-h-[999999px]">
                    <a
                      className="relative tracking-[0.42px] leading-[16px] uppercase text-[inherit] inline-block [text-decoration:none] min-w-[59px]"
                      href="https://www.brilliantearth.com/shop-online/"
                      target="_blank"
                    >
                      ORDERS
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.1px] max-h-[999999px] text-smi-4">
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-3">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[103px]"
                        href="https://www.brilliantearth.com/track-order/"
                        target="_blank"
                      >
                        Track Your Order
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-2">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[123px]"
                        href="https://www.brilliantearth.com/30-Day-Returns/"
                        target="_blank"
                      >
                        Free 30 Day Returns
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/shipping/"
                        target="_blank"
                      >
                        Free Shipping Both Ways
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/shop-online/#manufacturing_warranty"
                        target="_blank"
                      >
                        Free Lifetime Warranty
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[19.1px] px-[15px] pb-5 box-border min-w-[300px] min-h-[1px] max-h-[999999px] max-w-full text-sm-7">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px] max-h-[999999px]">
                <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                  <div className="flex flex-row items-start justify-start pt-[0.7px] px-0 pb-[0.8px] box-border max-h-[999999px]">
                    <a
                      className="relative tracking-[0.42px] leading-[16px] uppercase text-[inherit] inline-block [text-decoration:none] min-w-[93px]"
                      href="https://www.brilliantearth.com/contact/"
                      target="_blank"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.1px] max-h-[999999px] text-smi-3">
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <div className="relative tracking-[0.26px] leading-[16px] inline-block min-w-[58px]">
                        Live Chat
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-8">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[117px]"
                        href="https://www.brilliantearth.com/stores/"
                        target="_blank"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-1">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[39px]"
                        href="https://www.brilliantearth.com/stores/"
                        target="_blank"
                      >
                        Stores
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-4">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <div className="relative tracking-[0.26px] leading-[15.6px] inline-block min-w-[53px]">
                        Email Us
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[83px]"
                        href="https://www.brilliantearth.com/contact/"
                        target="_blank"
                      >
                        800.691.0952
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[54px]"
                        href="https://www.brilliantearth.com/affiliates/"
                        target="_blank"
                      >
                        Affiliates
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full shrink-0 [row-gap:20px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[19.1px] px-[15px] pb-5 box-border min-w-[300px] min-h-[1px] max-h-[999999px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px] max-h-[999999px]">
                <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                  <div className="flex flex-row items-start justify-start pt-[0.8px] px-0 pb-[0.7px] box-border max-h-[999999px]">
                    <a
                      className="relative tracking-[0.42px] leading-[16px] uppercase text-[inherit] inline-block [text-decoration:none] min-w-[85px]"
                      href="https://www.brilliantearth.com/about-brilliant-earth/"
                      target="_blank"
                    >
                      EDUCATION
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.1px] max-h-[999999px] text-smi-3">
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[29px]"
                        href="https://www.brilliantearth.com/news/"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-7">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/diamond/buying-guide/"
                        target="_blank"
                      >
                        Diamond Buying Guide
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-5">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/lab-diamond/buying-guide/"
                        target="_blank"
                      >
                        Lab Grown Diamonds
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/gemstones/buying-guide/moissanite/"
                        target="_blank"
                      >
                        Moissanite vs. Diamonds
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[94px]"
                        href="https://www.brilliantearth.com/jewelry/buying-guide/ring-size/"
                        target="_blank"
                      >
                        Ring Size Chart
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-2">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[48px]"
                        href="https://www.brilliantearth.com/careers/"
                        target="_blank"
                      >
                        Careers
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.7px] box-border max-h-[999999px] shrink-0">
                    <a
                      className="self-stretch relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                      href="https://investors.brilliantearth.com/"
                      target="_blank"
                    >
                      Investor Relations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[19.1px] px-[15px] pb-5 box-border min-w-[300px] min-h-[1px] max-h-[999999px] max-w-full text-sm-6">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px] max-h-[999999px] shrink-0">
                <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                  <div className="flex flex-row items-start justify-start pt-[0.8px] px-0 pb-[0.7px] box-border max-h-[999999px]">
                    <a
                      className="relative tracking-[0.42px] leading-[16px] uppercase text-[inherit] [text-decoration:none]"
                      href="https://www.brilliantearth.com/customer-care/"
                      target="_blank"
                    >
                      CUSTOMER SERVICE
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.1px] max-h-[999999px] text-smi-2">
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[33px]"
                        href="https://www.brilliantearth.com/frequently-asked-questions/"
                        target="_blank"
                      >
                        FAQs
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[109px]"
                        href="https://www.brilliantearth.com/flexible-payment-options/"
                        target="_blank"
                      >
                        Jewelry Financing
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-6">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/shop-online/#diamond_upgrade"
                        target="_blank"
                      >
                        Lifetime Diamond Upgrade
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-6">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/promo-codes-and-offers/"
                        target="_blank"
                      >{`Promo Codes & Offers`}</a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-smi-5">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[87px]"
                        href="https://www.brilliantearth.com/refer/"
                        target="_blank"
                      >
                        Refer a Friend
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.7px] box-border max-h-[999999px] shrink-0 text-smi-1">
                    <div className="self-stretch relative tracking-[0.26px] leading-[16px]">
                      Accessibility
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.7px] box-border max-h-[999999px] shrink-0">
                    <a
                      className="self-stretch relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                      href="https://www.brilliantearth.com/accessibility/"
                      target="_blank"
                    >
                      Accessibility Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-[19.1px] px-[15px] pb-2.5 box-border min-w-[300px] min-h-[1px] max-h-[999999px] max-w-full text-sm-8">
              <div className="flex-1 flex flex-col items-start justify-start gap-[18.7px] max-h-[999999px] max-w-full shrink-0">
                <div className="self-stretch flex flex-row items-start justify-start max-h-[999999px]">
                  <div className="flex flex-row items-start justify-start pt-[0.8px] px-0 pb-[0.7px] box-border max-h-[999999px]">
                    <div className="relative tracking-[0.42px] leading-[15.4px] uppercase whitespace-nowrap">
                      Sign Up for Email
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-h-[999999px] max-w-full text-smi-3">
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[0.7px] box-border max-h-[999999px] max-w-full">
                    <div className="flex-1 relative tracking-[0.26px] leading-[16px] inline-block max-w-full">
                      Send me Brilliant Earth news, updates and offers.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                    <div className="h-[45px] flex-1 flex flex-row items-center justify-start relative max-h-[999999px] max-w-full">
                      <div className="w-[calc(100%_-_43.8px)] !m-[0] absolute top-[calc(50%_-_22.5px)] right-[43.8px] left-[0px] bg-wwwbrilliantearthcom-nero box-border flex flex-row items-start justify-start pt-[13px] px-4 pb-3.5 border-[1px] border-solid border-wwwbrilliantearthcom-mercury">
                        <input
                          className="w-[calc(100%_-_42px)] [border:none] [outline:none] font-wwwbrilliantearthcom-inter-regular-1106 text-smi-5 bg-[transparent] h-[15px] flex-1 relative tracking-[1.2px] capitalize text-wwwbrilliantearthcom-mine-shaft text-left flex items-center min-w-[175px] p-0"
                          placeholder="Your Email Address"
                          type="text"
                        />
                      </div>
                      <div className="!m-[0] absolute w-[11.84%] top-[calc(50%_-_22.5px)] right-[0%] left-[88.16%] flex flex-row items-start justify-start max-h-[999999px] z-[1]">
                        <div className="h-[45px] w-[43.8px] relative bg-wwwbrilliantearthcom-gable-green box-border border-[1px] border-solid border-wwwbrilliantearthcom-gable-green">
                          <img
                            className="absolute top-[14px] left-[16.9px] w-2.5 h-[17px] overflow-hidden"
                            alt=""
                            src="/image-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center pt-[1.3px] pb-0 pr-[86px] pl-0 box-border gap-[3.9px] max-h-[999999px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                  <div className="flex flex-row items-start justify-center max-h-[999999px]">
                    <div
                      className="flex flex-col items-end justify-start pt-[4.5px] px-0 pb-[5.8px] box-border max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-6.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.3px] flex flex-row items-start justify-center py-0 pr-0 pl-[15px] box-border max-h-[999999px]">
                    <div
                      className="flex flex-col items-end justify-start pt-[4.5px] px-0 pb-[5.8px] box-border max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick1}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-7.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.3px] flex flex-row items-start justify-center py-0 pr-0 pl-[15px] box-border max-h-[999999px]">
                    <div
                      className="flex flex-col items-end justify-start pt-[4.5px] px-0 pb-[5.8px] box-border max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick2}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.3px] flex flex-row items-start justify-center py-0 pr-0 pl-[15px] box-border max-h-[999999px]">
                    <div
                      className="flex flex-col items-end justify-start pt-[4.5px] px-0 pb-[5.8px] box-border max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick3}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.3px] flex flex-row items-start justify-center py-0 pr-0 pl-[15px] box-border max-h-[999999px]">
                    <div
                      className="flex flex-col items-end justify-start pt-[4.5px] px-0 pb-[5.8px] box-border max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick4}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.3px] flex flex-row items-start justify-center py-0 pr-0 pl-[15px] box-border max-h-[999999px]">
                    <div
                      className="flex flex-col items-end justify-start pt-[4.5px] px-0 pb-[5.8px] box-border max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick5}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[39.3px] flex flex-row items-start justify-center py-0 pr-0 pl-[15px] box-border max-h-[999999px]">
                    <div
                      className="flex flex-col items-end justify-start pt-[4.5px] px-0 pb-[5.8px] box-border max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick6}
                    >
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-12.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
