import { useCallback } from "react";
import PropTypes from "prop-types";

const Shopbycategory = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/engagement-rings/settings/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.brilliantearth.com/wedding-rings/womens/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.brilliantearth.com/wedding-rings/mens/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.brilliantearth.com/gemstones/shop-all/");
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-11xl-4 text-wwwbrilliantearthcom-mine-shaft1 font-wwwbrilliantearthcom-inter-regular-1125 mq950:pb-[52px] mq950:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[32px] max-w-[1440px] mq950:gap-[16px] mq1900:max-w-full">
        <div className="relative leading-[45px] font-medium mq450:text-lg mq450:leading-[27px] mq950:text-5xl mq950:leading-[36px]">
          Shop By Category
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-start min-h-[200px] max-w-full text-mid-2">
          <div className="overflow-hidden flex flex-row items-start justify-start max-w-[1920px] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
            <div className="w-[1440px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[24px] max-w-full">
              <div
                className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[23.4px] max-w-full cursor-pointer"
                onClick={onLinkContainerClick}
              >
                <div className="self-stretch bg-wwwbrilliantearthcom-wild-sand flex flex-row items-start justify-start max-w-full">
                  <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                  <img
                    className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f31e008b11e6f457e9d0240435c77a313@2x.png"
                  />
                </div>
                <a
                  className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/engagement-rings/settings/"
                  target="_blank"
                >
                  Engagement Rings
                </a>
              </div>
              <div
                className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[23.4px] max-w-full cursor-pointer text-mid-3"
                onClick={onLinkContainerClick1}
              >
                <div className="self-stretch bg-wwwbrilliantearthcom-wild-sand flex flex-row items-start justify-start max-w-full">
                  <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                  <img
                    className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f86e35f29cae14a08bb6fcc6a25bca484@2x.png"
                  />
                </div>
                <a
                  className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/wedding-rings/womens/"
                  target="_blank"
                >
                  Women's Wedding Rings
                </a>
              </div>
              <div
                className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[23.4px] max-w-full cursor-pointer text-mid-3"
                onClick={onLinkContainerClick2}
              >
                <div className="self-stretch bg-wwwbrilliantearthcom-wild-sand flex flex-row items-start justify-start max-w-full">
                  <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                  <img
                    className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/assets2f9f2a69003c86470ea05deb9ecb9887be2fa6b8799f188d4d38a8ed85460df45a29@2x.png"
                  />
                </div>
                <a
                  className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/wedding-rings/mens/"
                  target="_blank"
                >
                  Men's Wedding Rings
                </a>
              </div>
              <div
                className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[20.2px] max-w-full cursor-pointer"
                onClick={onLinkContainerClick3}
              >
                <div className="self-stretch h-[457.7px] relative max-w-full">
                  <div className="absolute top-[0px] left-[0px] bg-wwwbrilliantearthcom-wild-sand w-full flex flex-row items-start justify-start max-w-full h-full">
                    <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                    <img
                      className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                      alt=""
                      src="/assets2f9f2a69003c86470ea05deb9ecb9887be2fc566e030fcb54568af048fbe0b59b22a@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[123.3px] flex flex-col items-start justify-center pt-[206.8px] px-0 pb-[206.9px] z-[1]">
                    <div className="w-11 h-11 rounded-9980xl bg-wwwbrilliantearthcom-nero flex flex-col items-center justify-center pt-[12.4px] px-[11px] pb-[12.6px] box-border">
                      <div className="flex flex-row items-start justify-center">
                        <div className="w-[22px] flex flex-row items-start justify-start">
                          <img
                            className="h-[19px] w-[21.4px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/icon-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/gemstones/shop-all/"
                  target="_blank"
                >
                  Gemstone Rings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Shopbycategory.propTypes = {
  className: PropTypes.string,
};

export default Shopbycategory;
