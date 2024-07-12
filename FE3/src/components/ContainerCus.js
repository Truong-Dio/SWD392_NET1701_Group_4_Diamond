import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-3.5 px-5 pb-2.5 box-border max-h-[999999px] max-w-full text-left text-xs-3 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start pt-0 px-[15px] pb-2.5 box-border max-w-[1200px] max-h-[999999px] lg:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-3 pb-0 pr-3.5 pl-0 box-border max-h-[999999px] max-w-full [row-gap:20px]">
          <div className="flex flex-row items-start justify-start max-h-[999999px]">
            <div className="relative tracking-[0.26px] leading-[17.14px]">
              ©2024 Brilliant Earth, LLC
            </div>
            <img
              className="h-[15.1px] w-[24.9px] relative object-cover"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start max-h-[999999px] text-xs-4">
            <div className="flex flex-row items-start justify-start max-h-[999999px]">
              <a
                className="relative tracking-[0.26px] leading-[18px] text-[inherit] inline-block [text-decoration:none] min-w-[110px]"
                href="https://www.brilliantearth.com/terms-and-conditions/"
                target="_blank"
              >{`Terms & Conditions`}</a>
            </div>
            <img
              className="h-[15.1px] w-[24.9px] relative object-cover"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start max-h-[999999px] text-xs-1">
            <div className="flex flex-row items-start justify-start max-h-[999999px]">
              <a className="[text-decoration:none] relative tracking-[0.26px] leading-[17.14px] text-[inherit] inline-block min-w-[76px] whitespace-nowrap">
                Privacy Policy
              </a>
            </div>
            <input
              className="m-0 h-[15.1px] w-[24.9px] relative"
              type="checkbox"
            />
          </div>
          <div className="flex flex-row items-start justify-start max-h-[999999px] text-xs-1">
            <div className="flex flex-row items-start justify-start max-h-[999999px]">
              <a
                className="relative tracking-[0.26px] leading-[18px] text-[inherit] inline-block [text-decoration:none] min-w-[106px]"
                href="https://www.brilliantearth.com/security-and-privacy-policies/#interest_based_ads"
                target="_blank"
              >
                Interest-Based Ads
              </a>
            </div>
            <input
              className="m-0 h-[15.1px] w-[24.9px] relative"
              type="checkbox"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start min-w-[238px] max-h-[999999px] max-w-full [row-gap:20px] text-xs-4 mq450:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start min-w-[222px] max-h-[999999px] max-w-full">
              <a
                className="relative tracking-[0.26px] leading-[18px] text-[inherit] [text-decoration:none]"
                href="https://www.brilliantearth.com/security-and-privacy-policies/#donotshare"
                target="_blank"
              >
                Do Not Share My Personal Information (California Residents)
              </a>
            </div>
            <input
              className="m-0 h-[15.1px] w-[24.9px] relative mq450:ml-0"
              type="checkbox"
            />
          </div>
          <div className="flex flex-row items-start justify-start max-h-[999999px]">
            <div className="flex flex-row items-start justify-start max-h-[999999px]">
              <a
                className="relative tracking-[0.26px] leading-[18px] text-[inherit] inline-block [text-decoration:none] min-w-[118px]"
                href="https://www.brilliantearth.com/ca-transparency-act/"
                target="_blank"
              >
                CA Transparency Act
              </a>
            </div>
            <img
              className="h-[15.1px] w-[24.9px] relative object-cover"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start max-h-[999999px] text-xs-8">
            <div className="flex flex-row items-start justify-start max-h-[999999px]">
              <a
                className="relative tracking-[0.26px] leading-[18px] text-[inherit] inline-block [text-decoration:none] min-w-[33px]"
                href="https://www.brilliantearth.com/security-and-privacy-policies/#CPRA"
                target="_blank"
              >
                CPRA
              </a>
            </div>
            <img
              className="h-[15.1px] w-[24.9px] relative object-cover"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start max-h-[999999px] text-xs-6">
            <div className="flex flex-row items-start justify-start max-h-[999999px]">
              <a className="[text-decoration:none] relative tracking-[0.26px] leading-[18px] text-[inherit] inline-block min-w-[51px]">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
