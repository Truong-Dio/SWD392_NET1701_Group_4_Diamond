import { useCallback } from "react";
import PropTypes from "prop-types";

const Container4 = ({ className = "" }) => {
  const onLinkWereHereForYouClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/stores/");
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-20 box-border min-h-[890px] max-w-full text-left text-12xl-3 text-wwwbrilliantearthcom-mine-shaft1 font-wwwbrilliantearthcom-inter-regular-1125 mq450:pb-[34px] mq450:box-border mq950:pb-[52px] mq950:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start max-w-[1440px] mq1900:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-center max-w-full">
          <div
            className="self-stretch flex flex-col items-start justify-start max-w-full cursor-pointer"
            onClick={onLinkWereHereForYouClick}
          >
            <div className="self-stretch flex flex-row items-center justify-center max-w-full">
              <img
                className="h-[626.9px] flex-1 relative max-w-[1440px] overflow-hidden object-cover mq1900:max-w-full"
                loading="lazy"
                alt=""
                src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f96c8bfbd49de468babfdeefa3faf6125@2x.png"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border gap-[8px] max-w-[600px] mq950:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start shrink-0">
              <div className="self-stretch relative leading-[45px] font-medium mq450:text-lgi mq450:leading-[27px] mq950:text-6xl mq950:leading-[36px]">
                We're Here For You
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-px px-0 pb-0.5 shrink-0 text-base-1">
              <div className="relative">
                <p className="m-0">
                  Appointments curated just for you. Start your stack, find your
                  fit, design the perfect
                </p>
                <p className="m-0">piece.</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-4 px-0 pb-0 gap-[16px] text-center text-sm-1">
              <div className="flex-1 box-border overflow-hidden flex flex-row items-center justify-center py-3 px-5 min-w-[128px] max-w-[480px] border-[1px] border-solid border-wwwbrilliantearthcom-mine-shaft1 mq950:max-w-full">
                <a
                  className="w-[110px] relative leading-[16px] font-medium text-[inherit] flex items-center justify-center [text-decoration:none] min-w-[110px]"
                  href="https://www.brilliantearth.com/stores/"
                  target="_blank"
                >
                  Visit a Showroom
                </a>
              </div>
              <div className="box-border overflow-hidden flex flex-row items-center justify-center py-3 px-14 min-w-[128px] max-w-[480px] text-sm-5 border-[1px] border-solid border-wwwbrilliantearthcom-mine-shaft1 mq450:pl-5 mq450:pr-5 mq450:box-border mq950:max-w-full">
                <a
                  className="relative leading-[16px] font-medium text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/stores/virtual-appointment/"
                  target="_blank"
                >
                  Book a Virtual Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
};

export default Container4;
