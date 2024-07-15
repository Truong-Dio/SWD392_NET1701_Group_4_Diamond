import { useCallback } from "react";
import PropTypes from "prop-types";

const BannerPromo = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/promo-codes-and-offers/");
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-20 box-border min-h-[215px] max-w-full text-left text-base text-wwwbrilliantearthcom-nero font-wwwbrilliantearthcom-inter-regular-1125 ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start max-w-[1440px] min-h-[135px] mq1900:max-w-full">
        <div className="w-full h-[135px] bg-wwwbrilliantearthcom-gable-green flex flex-row items-start justify-end py-0 px-0 box-border relative max-w-[1440px] max-h-[135px] mq950:h-auto mq1900:max-w-full">
          <div
            className="w-[1123.2px] flex flex-row flex-wrap items-center justify-start max-w-[calc(100%_-_0px)] shrink-0 [row-gap:20px] cursor-pointer"
            onClick={onLinkContainerClick}
          >
            <img
              className="h-[135px] w-[220px] relative overflow-hidden shrink-0 object-cover max-h-[135px]"
              loading="lazy"
              alt=""
              src="/fd5785dadf7837d3ad2d2e007792ddd2jpg@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-7 px-4 pb-[61px] box-border gap-[12px] min-w-[587px] min-h-[146px] max-w-full mq950:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <a
                  className="self-stretch relative leading-[23px] font-medium text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/promo-codes-and-offers/"
                  target="_blank"
                >
                  ENDS SOON!
                </a>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-px px-0 pb-0.5 text-base-4">
                <a
                  className="self-stretch relative text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/promo-codes-and-offers/"
                  target="_blank"
                >
                  Receive a Sapphire Necklace with purchase over $1,000.
                </a>
              </div>
            </div>
          </div>
          <div className="!m-[0] absolute right-[7.8px] bottom-[8px] flex flex-col items-start justify-start z-[1] text-5xs-3">
            <div className="flex flex-row items-start justify-start">
              <div className="relative [text-decoration:underline] leading-[16px] inline-block min-w-[37px]">
                See Terms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerPromo.propTypes = {
  className: PropTypes.string,
};

export default BannerPromo;
