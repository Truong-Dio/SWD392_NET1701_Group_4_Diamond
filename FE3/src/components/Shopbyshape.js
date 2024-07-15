import { useCallback } from "react";
import PropTypes from "prop-types";

const Shopbyshape = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/round/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/oval/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/emerald-cut/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/cushion/");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/pear/");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/radiant/");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/princess/");
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/marquise/");
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/asscher/");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/heart/");
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-20 box-border min-h-[268px] max-w-full text-center text-11xl-4 text-wwwbrilliantearthcom-mine-shaft1 font-wwwbrilliantearthcom-inter-regular-1125 ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-start max-w-[1440px] max-h-[278px] mq1900:max-w-full">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
          <div className="flex flex-col items-center justify-start pt-[3px] px-0 pb-1">
            <div className="relative font-medium mq450:text-lg mq950:text-5xl">
              Shop Diamonds by Shape
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full text-base-1">
          <div className="w-[1267.2px] overflow-hidden flex flex-row items-start justify-center max-w-full">
            <div className="flex-1 overflow-x-auto flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="h-28 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border text-base-5">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-[11px] pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[47px]"
                      href="https://www.brilliantearth.com/diamond/round/"
                      target="_blank"
                    >
                      Round
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-28 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border text-base-9">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick1}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-[18px] pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[34px]"
                      href="https://www.brilliantearth.com/diamond/oval/"
                      target="_blank"
                    >
                      Oval
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-28 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border text-base-5">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick2}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-[5px] pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[60px]"
                      href="https://www.brilliantearth.com/diamond/emerald-cut/"
                      target="_blank"
                    >
                      Emerald
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[100px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <div
                  className="self-stretch flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick3}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-4@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start pt-px px-[5px] pb-0.5">
                    <a
                      className="self-stretch relative text-[inherit] inline-block [text-decoration:none] min-w-[59px]"
                      href="https://www.brilliantearth.com/diamond/cushion/"
                      target="_blank"
                    >
                      Cushion
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick4}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-5@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-[18px] pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[33px]"
                      href="https://www.brilliantearth.com/diamond/pear/"
                      target="_blank"
                    >
                      Pear
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 text-base-3">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick5}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-[7px] pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[55px]"
                      href="https://www.brilliantearth.com/diamond/radiant/"
                      target="_blank"
                    >
                      Radiant
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 text-mini-5">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick6}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-7@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-[5px] pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[59px]"
                      href="https://www.brilliantearth.com/diamond/princess/"
                      target="_blank"
                    >
                      Princess
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 text-base-3">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick7}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-8@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-px pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[67px]"
                      href="https://www.brilliantearth.com/diamond/marquise/"
                      target="_blank"
                    >
                      Marquise
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 text-mini-6">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick8}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-9@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-[7px] pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[56px]"
                      href="https://www.brilliantearth.com/diamond/asscher/"
                      target="_blank"
                    >
                      Asscher
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
                <div
                  className="flex flex-col items-center justify-start pt-2.5 px-[15px] pb-0 gap-[13px] cursor-pointer"
                  onClick={onLinkContainerClick9}
                >
                  <img
                    className="w-[70px] h-[70px] relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image-10@2x.png"
                  />
                  <div className="flex flex-col items-center justify-start pt-px px-3.5 pb-0.5">
                    <a
                      className="relative text-[inherit] inline-block [text-decoration:none] min-w-[41px]"
                      href="https://www.brilliantearth.com/diamond/heart/"
                      target="_blank"
                    >
                      Heart
                    </a>
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

Shopbyshape.propTypes = {
  className: PropTypes.string,
};

export default Shopbyshape;
