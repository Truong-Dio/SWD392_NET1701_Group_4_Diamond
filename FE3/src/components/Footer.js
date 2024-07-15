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

  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.facebook.com/brilliantearth");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.pinterest.com/brilliantearth/");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://twitter.com/BrilliantEarth");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://www.linkedin.com/company/brilliantearth");
  }, []);

  return (
    <footer
      className={`self-stretch box-border flex flex-row items-end justify-between pt-[29px] pb-2.5 pr-[18px] pl-[360px] max-w-full gap-[20px] z-[1] mt-[-0.1px] text-left text-sm text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1125 border-t-[1px] border-solid border-wwwbrilliantearthcom-alto mq950:pl-[90px] mq950:box-border mq1425:pl-[180px] mq1425:box-border mq1900:flex-wrap ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="w-full flex flex-row items-start justify-start pt-0 px-[15px] pb-0 box-border gap-[48px] max-w-[1200px] min-h-[265px] mq950:gap-[24px] mq1425:flex-wrap mq1425:max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[268px] max-w-full shrink-0">
            <div className="self-stretch flex flex-col items-start justify-start pt-[19.3px] px-0 pb-[16.7px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px]">
                  <div className="flex flex-row items-start justify-start">
                    <a className="[text-decoration:none] relative tracking-[0.42px] leading-[20px] uppercase text-[inherit] inline-block min-w-[51px]">
                      ABOUT
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-smi-3">
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-5">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[59px]"
                        href="https://www.brilliantearth.com/about/"
                        target="_blank"
                      >
                        Our Story
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-6">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[74px]"
                        href="https://www.brilliantearth.com/about/mission/"
                        target="_blank"
                      >
                        Our Mission
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/about/mission/transparency/"
                        target="_blank"
                      >
                        Responsible Sourcing
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[119px]"
                        href="https://www.brilliantearth.com/about/mission/sustainability/"
                        target="_blank"
                      >
                        Sustainability Goals
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-5">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[116px]"
                        href="https://www.brilliantearth.com/about/mission/compassion/"
                        target="_blank"
                      >
                        How We Give Back
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-9">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[71px]"
                        href="https://www.brilliantearth.com/about/mission/inclusion/"
                        target="_blank"
                      >
                        Our People
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
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
            <div className="self-stretch flex flex-col items-start justify-start pt-[19.2px] px-0 pb-[16.8px] z-[1]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px]">
                  <div className="flex flex-row items-start justify-start">
                    <a className="[text-decoration:none] relative tracking-[0.42px] leading-[20px] uppercase text-[inherit] inline-block min-w-[85px]">
                      EDUCATION
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-smi-3">
                  <div className="self-stretch flex flex-col items-start justify-start text-smi">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[29px]"
                        href="https://www.brilliantearth.com/news/"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-7">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/diamond/buying-guide/"
                        target="_blank"
                      >
                        Diamond Buying Guide
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-5">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/lab-diamond/buying-guide/"
                        target="_blank"
                      >
                        Lab Grown Diamonds
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/gemstones/buying-guide/moissanite/"
                        target="_blank"
                      >
                        Moissanite vs. Diamonds
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[94px]"
                        href="https://www.brilliantearth.com/jewelry/buying-guide/ring-size/"
                        target="_blank"
                      >
                        Ring Size Chart
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-2">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[48px]"
                        href="https://www.brilliantearth.com/careers/"
                        target="_blank"
                      >
                        Careers
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[108px]"
                        href="https://investors.brilliantearth.com/"
                        target="_blank"
                      >
                        Investor Relations
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[268px] max-w-full shrink-0 text-sm-9">
            <div className="self-stretch h-[242.8px] flex flex-col items-start justify-start pt-[19.3px] px-0 pb-[19px] box-border">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px]">
                  <div className="flex flex-row items-start justify-start">
                    <a
                      className="relative tracking-[0.42px] leading-[20px] uppercase text-[inherit] inline-block [text-decoration:none] min-w-[59px]"
                      href="https://www.brilliantearth.com/shop-online/"
                      target="_blank"
                    >
                      ORDERS
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-smi-3">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[103px]"
                        href="https://www.brilliantearth.com/track-order/"
                        target="_blank"
                      >
                        Track Your Order
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-2">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[123px]"
                        href="https://www.brilliantearth.com/30-Day-Returns/"
                        target="_blank"
                      >
                        Free 30 Day Returns
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-5">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/shipping/"
                        target="_blank"
                      >
                        Free Shipping Both Ways
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-4">
                    <div className="flex flex-row items-start justify-start">
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
            <div className="self-stretch flex flex-col items-start justify-start pt-[19.2px] px-0 pb-[16.8px] z-[1] text-sm-6">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px]">
                  <div className="flex flex-row items-start justify-start">
                    <a
                      className="relative tracking-[0.42px] leading-[20px] uppercase text-[inherit] [text-decoration:none]"
                      href="https://www.brilliantearth.com/customer-care/"
                      target="_blank"
                    >
                      CUSTOMER SERVICE
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-smi-2">
                  <div className="self-stretch flex flex-col items-start justify-start text-smi">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[33px]"
                        href="https://www.brilliantearth.com/frequently-asked-questions/"
                        target="_blank"
                      >
                        FAQs
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[109px]"
                        href="https://www.brilliantearth.com/flexible-payment-options/"
                        target="_blank"
                      >
                        Jewelry Financing
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-6">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/shop-online/#diamond_upgrade"
                        target="_blank"
                      >
                        Lifetime Diamond Upgrade
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-6">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] [text-decoration:none]"
                        href="https://www.brilliantearth.com/promo-codes-and-offers/"
                        target="_blank"
                      >{`Promo Codes & Offers`}</a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-5">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[87px]"
                        href="https://www.brilliantearth.com/refer/"
                        target="_blank"
                      >
                        Refer a Friend
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-1">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.26px] leading-[16px] inline-block min-w-[75px]">
                        Accessibility
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[102px]"
                        href="https://www.brilliantearth.com/accessibility/"
                        target="_blank"
                      >
                        Accessibility Info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[268px] max-w-full shrink-0 text-sm-7">
            <div className="self-stretch h-[242.8px] flex flex-col items-start justify-start pt-[19.3px] px-0 pb-[19px] box-border">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px]">
                  <div className="flex flex-row items-start justify-start">
                    <a
                      className="relative tracking-[0.42px] leading-[20px] uppercase text-[inherit] inline-block [text-decoration:none] min-w-[93px]"
                      href="https://www.brilliantearth.com/contact/"
                      target="_blank"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-smi-3">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.26px] leading-[16px] inline-block min-w-[58px]">
                        Live Chat
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-8">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[15.6px] text-[inherit] inline-block [text-decoration:none] min-w-[117px]"
                        href="https://www.brilliantearth.com/stores/"
                        target="_blank"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-1">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[39px]"
                        href="https://www.brilliantearth.com/stores/"
                        target="_blank"
                      >
                        Stores
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-4">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.26px] leading-[15.6px] inline-block min-w-[53px]">
                        Email Us
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-4">
                    <div className="flex flex-row items-start justify-start">
                      <a
                        className="relative tracking-[0.26px] leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[83px]"
                        href="https://www.brilliantearth.com/contact/"
                        target="_blank"
                      >
                        650.530.1828
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
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
            <div className="self-stretch flex flex-col items-start justify-start pt-[19.2px] px-0 pb-[53.5px] gap-[20px] z-[1] text-sm-8">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px] shrink-0">
                <div className="self-stretch relative tracking-[0.42px] leading-[20px] uppercase">
                  Sign Up for Email
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px] shrink-0 text-smi-3">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative tracking-[0.26px] leading-[16px]">
                    Send me Brilliant Earth news, updates and offers.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 bg-wwwbrilliantearthcom-nero box-border flex flex-col items-start justify-start pt-[13px] px-4 pb-[11px] min-w-[204px] border-[1px] border-solid border-wwwbrilliantearthcom-mercury">
                      <input
                        className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[18px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0.5 box-border font-wwwbrilliantearthcom-inter-regular-1125 text-smi-5 text-wwwbrilliantearthcom-mine-shaft min-w-[168px]"
                        placeholder="Your Email Address"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <img
                        className="w-11 h-[45px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/button--submit-email-address@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[98px] pl-0 [row-gap:20px] mq450:pr-5 mq450:box-border mq950:flex-wrap">
                <div className="flex flex-row items-center justify-start pt-[5px] px-0 pb-[5.3px]">
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onLinkContainerClick}
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
                <div className="w-[39.3px] flex flex-row items-center justify-start pt-[5px] pb-[5.3px] pr-0 pl-[15px] box-border">
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onLinkContainerClick1}
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
                <div className="w-[39.3px] flex flex-row items-center justify-start pt-[5px] pb-[5.3px] pr-0 pl-[15px] box-border z-[1]">
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onLinkContainerClick2}
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
                <div className="w-[39.3px] flex flex-row items-center justify-start pt-[5px] pb-[5.3px] pr-0 pl-[15px] box-border">
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onButtonContainerClick}
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
                <div className="w-[39.3px] flex flex-row items-center justify-start pt-[5px] pb-[5.3px] pr-0 pl-[15px] box-border">
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onLinkContainerClick3}
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
                <div className="w-[39.3px] flex flex-row items-center justify-start pt-[5px] pb-[5.3px] pr-0 pl-[15px] box-border z-[1]">
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onLinkContainerClick4}
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
                <div className="w-[39.3px] flex flex-row items-center justify-start pt-[5px] pb-[5.3px] pr-0 pl-[15px] box-border">
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer"
                    onClick={onLinkContainerClick5}
                  >
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-[24.3px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/icon-13.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-start pt-3 px-[13px] pb-[9.5px] box-border max-w-[1200px] [row-gap:20px] text-xs-3 mq1425:max-w-full mq1900:flex-wrap">
          <div className="relative tracking-[0.26px] leading-[18px]">
            ©2024 Brilliant Earth, LLC
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.1px]">
            <img
              className="w-[24.9px] h-3 relative object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <a className="[text-decoration:none] relative text-xs-4 tracking-[0.26px] leading-[18px] text-[inherit] inline-block min-w-[110px] ml-[-0.1px]">{`Terms & Conditions`}</a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.1px]">
            <img
              className="w-[24.9px] h-3 relative object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <a className="[text-decoration:none] relative text-xs-1 tracking-[0.26px] leading-[17.14px] text-[inherit] inline-block min-w-[77px] ml-[-0.1px]">
            Privacy Policy
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.1px]">
            <img
              className="w-[24.9px] h-3 relative object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <a
            className="relative tracking-[0.26px] leading-[17.14px] text-[inherit] inline-block [text-decoration:none] min-w-[108px] ml-[-0.1px]"
            href="https://www.brilliantearth.com/security-and-privacy-policies/#interest_based_ads"
            target="_blank"
          >
            Interest-Based Ads
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.1px]">
            <img
              className="w-[24.9px] h-3 relative object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <a
            className="relative text-xs-4 tracking-[0.26px] leading-[18px] text-[inherit] inline-block [text-decoration:none] max-w-full ml-[-0.1px]"
            href="https://www.brilliantearth.com/security-and-privacy-policies/#donotshare"
            target="_blank"
          >
            Do Not Share My Personal Information (California Residents)
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.1px]">
            <img
              className="w-[24.9px] h-3 relative object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <a
            className="relative tracking-[0.26px] leading-[18px] text-[inherit] inline-block [text-decoration:none] min-w-[118px] ml-[-0.1px]"
            href="https://www.brilliantearth.com/ca-transparency-act/"
            target="_blank"
          >
            CA Transparency Act
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.1px]">
            <img
              className="w-[24.9px] h-3 relative object-cover z-[1]"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <a
            className="relative text-xs-8 tracking-[0.26px] leading-[18px] text-[inherit] inline-block [text-decoration:none] min-w-[33px] z-[2] ml-[-0.1px]"
            href="https://www.brilliantearth.com/security-and-privacy-policies/#CPRA"
            target="_blank"
          >
            CPRA
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.1px]">
            <img
              className="w-[24.9px] h-3 relative object-cover z-[3]"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <a className="[text-decoration:none] relative text-xs-6 tracking-[0.26px] leading-[18px] text-[inherit] inline-block min-w-[51px] z-[4] ml-[-0.1px]">
            Site Map
          </a>
        </div>
      </div>
      <div className="h-[141px] flex flex-col items-start justify-start">
        <div className="w-14 h-14 shadow-[1px_1px_5px_rgba(45,_45,_45,_0.5)] rounded-9xl bg-wwwbrilliantearthcom-gable-green overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] px-[13px] box-border relative z-[2]">
          <div className="!m-[0] absolute top-[calc(50%_-_17px)] left-[calc(50%_-_15px)] flex flex-row items-start justify-center pt-[1.5px] px-0 pb-[2.5px] box-border max-w-[56px] max-h-[56px]">
            <img
              className="h-[30px] w-[30px] relative"
              alt=""
              src="/svg-2.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
