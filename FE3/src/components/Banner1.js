import { useCallback } from "react";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/engagement-rings/settings/");
  }, []);

  return (
    <div
      className={`self-stretch h-[680px] flex flex-col items-start justify-start max-w-full text-left text-17xl-2 text-wwwbrilliantearthcom-nero font-wwwbrilliantearthcom-inter-regular-1125 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center max-w-full">
        <div className="self-stretch bg-wwwbrilliantearthcom-mercury1 flex flex-col items-start justify-center relative max-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
            <div
              className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <div className="flex-1 flex flex-row items-center justify-center max-w-full">
                <img
                  className="h-[600px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f50301f6894414f49b5913e504fd5cbf0@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[calc(100%_-_1440px)] !m-[0] absolute h-[calc(100%_-_440.4px)] top-[221.3px] right-[64px] bottom-[219.1px] left-[1376px] flex flex-row items-center justify-end max-w-full z-[1]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-[480px] mq950:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px]">
                <div className="self-stretch relative leading-[54px] font-medium mq450:text-3xl mq450:leading-[32px] mq950:text-10xl mq950:leading-[43px]">
                  Save the Date
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-px px-0 pb-0.5 text-mini">
                <div className="self-stretch relative">
                  This summer, RSVP yes to a style you'll melt over.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-between pt-2 px-0 pb-0 gap-[14px] text-center text-sm-3 text-wwwbrilliantearthcom-mine-shaft1">
                <div className="bg-wwwbrilliantearthcom-nero overflow-hidden flex flex-col items-center justify-start py-0 px-[38px] box-border min-w-[128px] max-w-[232px] whitespace-nowrap">
                  <a
                    className="relative leading-[44px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://www.brilliantearth.com/engagement-rings/settings/"
                    target="_blank"
                  >
                    Shop Engagement Rings
                  </a>
                </div>
                <div className="w-[232px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[49px] min-w-[128px] max-w-[232px] text-wwwbrilliantearthcom-nero border-[1px] border-solid border-wwwbrilliantearthcom-nero">
                  <a
                    className="self-stretch relative leading-[42px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://www.brilliantearth.com/wedding-rings/shop-all/"
                    target="_blank"
                  >
                    Shop Wedding Rings
                  </a>
                </div>
              </div>
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
