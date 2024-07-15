import { useCallback } from "react";
import PropTypes from "prop-types";

const SignatureCol = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open(
      "https://www.brilliantearth.com/jewelry/collections/secret-garden/"
    );
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.brilliantearth.com/engagement-rings/sets/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.brilliantearth.com/engagement-rings/three-stone/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.brilliantearth.com/engagement-rings/nature/");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.brilliantearth.com/engagement-rings/solitaire/");
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-mid-7 text-wwwbrilliantearthcom-mine-shaft1 font-wwwbrilliantearthcom-inter-regular-1125 mq950:pb-[34px] mq950:box-border mq1425:pb-[52px] mq1425:box-border ${className}`}
    >
      <div className="w-[1440px] flex flex-col items-start justify-start gap-[80px] max-w-full mq450:gap-[20px] mq950:gap-[40px]">
        <div className="w-full flex flex-row items-start justify-start max-w-[1440px] shrink-0 [row-gap:20px] mq1425:flex-wrap mq1900:max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px] box-border min-w-[468px] max-w-full mq950:min-w-full mq1425:flex-1">
            <div
              className="self-stretch flex flex-col items-start justify-start max-w-full cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                <img
                  className="h-[545.3px] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f7599ef8280b24678b3e08c4867366e1c@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="flex-[0.8667] bg-wwwbrilliantearthcom-nero flex flex-col items-start justify-start pt-[164.2px] px-12 pb-[164.8px] box-border gap-[16px] min-w-[468px] max-w-full mq950:py-[107px] mq950:px-6 mq950:box-border mq950:min-w-full mq1425:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
              <div className="relative leading-[26px] font-medium">
                SIGNATURE COLLECTION
              </div>
              <div className="self-stretch relative text-11xl-3 leading-[45px] font-medium mq450:text-lg mq450:leading-[27px] mq950:text-5xl mq950:leading-[36px]">
                The Secret Garden
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 text-base-1">
              <div className="relative leading-[22.86px]">
                <p className="m-0">
                  Marquise diamond accents, purposefully nestled within sweeping
                  branches and vines,
                </p>
                <p className="m-0">
                  give the illusion of climbing leaves and buds.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-center text-sm-6 mq950:flex-wrap">
              <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-center py-0 px-5 min-w-[128px] border-[1px] border-solid border-wwwbrilliantearthcom-mine-shaft1">
                <a
                  className="relative leading-[42px] font-medium text-[inherit] inline-block [text-decoration:none] min-w-[67px]"
                  href="https://www.brilliantearth.com/jewelry/collections/secret-garden/"
                  target="_blank"
                >
                  Shop Now
                </a>
              </div>
              <div className="flex-[0.6145] box-border overflow-hidden flex flex-row items-start justify-start py-0 pr-[70px] pl-[71px] min-w-[128px] text-sm-5 border-[1px] border-solid border-wwwbrilliantearthcom-mine-shaft1 mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                <a
                  className="relative leading-[42px] font-medium text-[inherit] [text-decoration:none]"
                  href="https://www.brilliantearth.com/jewelry/collections/"
                  target="_blank"
                >
                  Explore More Collections
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[32px] max-w-[1440px] shrink-0 text-11xl-9 mq950:gap-[16px] mq1900:max-w-full">
          <div className="relative leading-[45px] font-medium inline-block max-w-full mq450:text-lgi mq450:leading-[27px] mq950:text-6xl mq950:leading-[36px]">
            Our Most Coveted Bridal Designs
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start min-h-[200px] max-w-full text-[16.9px]">
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-[1920px] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
              <div className="w-[1440px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[24px] max-w-full">
                <div
                  className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[23.4px] max-w-full cursor-pointer"
                  onClick={onLinkContainerClick1}
                >
                  <div className="self-stretch bg-wwwbrilliantearthcom-wild-sand flex flex-row items-start justify-start max-w-full">
                    <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                    <img
                      className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f6b3af857d629481ba1f0398b76c88156@2x.png"
                    />
                  </div>
                  <a
                    className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://www.brilliantearth.com/engagement-rings/sets/"
                    target="_blank"
                  >
                    Bridal Sets
                  </a>
                </div>
                <div
                  className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[23.4px] max-w-full cursor-pointer"
                  onClick={onLinkContainerClick2}
                >
                  <div className="self-stretch bg-wwwbrilliantearthcom-wild-sand flex flex-row items-start justify-start max-w-full">
                    <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                    <img
                      className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f1e37173274224cf09a03ff4185711380@2x.png"
                    />
                  </div>
                  <a
                    className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://www.brilliantearth.com/engagement-rings/three-stone/"
                    target="_blank"
                  >
                    Three Stone Rings
                  </a>
                </div>
                <div
                  className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[23.4px] max-w-full cursor-pointer text-mid-2"
                  onClick={onLinkContainerClick3}
                >
                  <div className="self-stretch bg-wwwbrilliantearthcom-wild-sand flex flex-row items-start justify-start max-w-full">
                    <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                    <img
                      className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/assets2f9f2a69003c86470ea05deb9ecb9887be2fd8e00f0888c24bc88dd38a62804c5b05@2x.png"
                    />
                  </div>
                  <a
                    className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://www.brilliantearth.com/engagement-rings/nature/"
                    target="_blank"
                  >
                    Nature Inspired Rings
                  </a>
                </div>
                <div
                  className="w-[392.2px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border gap-[20.2px] max-w-full cursor-pointer"
                  onClick={onLinkContainerClick4}
                >
                  <div className="self-stretch h-[457.7px] relative max-w-full">
                    <div className="absolute top-[0px] left-[0px] bg-wwwbrilliantearthcom-wild-sand w-full flex flex-row items-start justify-start max-w-full h-full">
                      <div className="self-stretch w-[392.2px] relative bg-wwwbrilliantearthcom-wild-sand hidden max-w-full" />
                      <img
                        className="h-[454.5px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                        alt=""
                        src="/assets2f9f2a69003c86470ea05deb9ecb9887be2f5bf074cc27e74fbcbcb5d15a077e9db2@2x.png"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[123.3px] flex flex-col items-start justify-center pt-[206.9px] px-0 pb-[206.8px] z-[1]">
                      <div className="w-11 h-11 rounded-9980xl bg-wwwbrilliantearthcom-nero flex flex-col items-center justify-center pt-[12.4px] px-[11px] pb-[12.6px] box-border">
                        <div className="flex flex-row items-start justify-center">
                          <div className="w-[22px] flex flex-row items-start justify-start">
                            <img
                              className="h-[19px] w-[21.4px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon-6.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="self-stretch relative leading-[26px] font-medium text-[inherit] [text-decoration:none]"
                    href="https://www.brilliantearth.com/engagement-rings/solitaire/"
                    target="_blank"
                  >
                    Solitaire Rings
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

SignatureCol.propTypes = {
  className: PropTypes.string,
};

export default SignatureCol;
