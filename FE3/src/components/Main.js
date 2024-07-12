import { useCallback } from "react";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/stores/virtual-appointment/");
  }, []);

  const onLinkHomeClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/");
  }, []);

  const onLinkMyAccountClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/accounts/login/");
  }, []);

  const onLinkWishListClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/shop/wishlist/");
  }, []);

  const onLinkShoppingBagClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/shop/cart/");
  }, []);

  return (
    <section
      className={`self-stretch h-[158.9px] relative shrink-0 max-w-full text-center text-xs-8 text-wwwbrilliantearthcom-nero font-wwwbrilliantearthcom-inter-regular-1106 mq1050:h-auto mq1050:min-h-[158.89999999999964] ${className}`}
    >
      <header className="absolute top-[30.9px] left-[0px] box-border w-full flex flex-row items-start justify-center p-5 min-h-[128px] max-h-[999999px] max-w-full z-[1] text-left text-sm-2 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 border-b-[0.9px] border-solid border-wwwbrilliantearthcom-mercury1">
        <div className="w-[1200px] flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-[1200px] max-h-[999999px] lg:max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start max-h-[999999px] max-w-full [row-gap:20px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[12.7px] box-border min-h-[1px] max-h-[999999px] shrink-0">
              <div className="flex flex-row items-center justify-start py-0 pr-[115px] pl-0 box-border gap-[3.9px] max-h-[999999px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-start justify-start pt-0 pb-[0.7px] pr-[9px] pl-0 box-border max-h-[999999px]">
                  <div className="flex flex-row items-start justify-start max-h-[999999px]">
                    <a
                      className="relative leading-[20px] text-[inherit] inline-block [text-decoration:none] min-w-[86px]"
                      href="https://www.brilliantearth.com/contact/"
                      target="_blank"
                    >
                      800.691.0952
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-[9px] pb-[0.7px] box-border max-h-[999999px] text-smi-9">
                  <div className="flex flex-row items-start justify-start max-h-[999999px]">
                    <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[40px]">
                      Stores
                    </a>
                  </div>
                </div>
                <div className="h-[27px] flex flex-row items-start justify-center py-0 px-[9px] box-border max-h-[999999px] text-sm-6">
                  <div
                    className="h-full flex flex-col items-start justify-center pt-[2.9px] pb-[3.4px] px-0 box-border relative max-h-[999999px] cursor-pointer"
                    onClick={onLinkContainerClick}
                  >
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-[19.6px] w-[26.1px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[452.87%] !m-[0] absolute top-[2.8px] right-[-464.37%] left-[111.49%] flex flex-col items-start justify-start pt-0 pb-[0.7px] pr-0 pl-[3px] box-border max-h-[999999px]">
                      <a
                        className="w-[129px] relative leading-[20px] text-[inherit] flex items-center [text-decoration:none] whitespace-nowrap"
                        href="https://www.brilliantearth.com/stores/virtual-appointment/"
                        target="_blank"
                      >
                        Virtual Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border relative min-w-[344px] min-h-[1px] max-h-[999999px] max-w-full shrink-0 mq450:min-w-full">
              <nav className="!m-[0] w-[1636.4px] absolute bottom-[-67.8px] left-[-553.2px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[3.6px] max-h-[999999px] text-center text-smi text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106">
                <div className="flex flex-row items-start justify-center py-0 pr-1 pl-0 box-border max-h-[999999px]">
                  <div className="flex flex-row items-start justify-center py-[18px] px-5 box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] text-[inherit] whitespace-nowrap">
                      ENGAGEMENT RINGS
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-0 px-1 box-border max-h-[999999px]">
                  <div className="flex flex-row items-start justify-center py-[18px] px-[19px] box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.65px] leading-[18.57px] text-[inherit] inline-block min-w-[114px] whitespace-nowrap">
                      WEDDING RINGS
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-0 px-1 box-border max-h-[999999px]">
                  <div className="flex flex-row items-start justify-center py-[18px] px-5 box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] text-[inherit] inline-block min-w-[76px]">
                      DIAMONDS
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-0 px-1 box-border max-h-[999999px]">
                  <div className="flex flex-row items-start justify-center py-[18px] px-5 box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] text-[inherit] inline-block min-w-[87px]">
                      GEMSTONES
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-0 px-1 box-border max-h-[999999px] text-smi-5">
                  <div className="flex flex-row items-start justify-center py-[18px] px-[19px] box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] text-[inherit] inline-block min-w-[62px]">
                      JEWELRY
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-0 px-1 box-border max-h-[999999px] text-smi-6">
                  <div className="flex flex-row items-start justify-center py-[18px] px-[19px] box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] text-[inherit] inline-block min-w-[40px]">
                      GIFTS
                    </a>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-0 pr-0 pl-1 box-border max-h-[999999px]">
                  <div className="flex flex-row items-start justify-center py-[18px] px-[19px] box-border max-h-[999999px]">
                    <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] text-[inherit] inline-block min-w-[49px]">
                      ABOUT
                    </a>
                  </div>
                </div>
              </nav>
              <div
                className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-h-[999999px] cursor-pointer"
                onClick={onLinkHomeClick}
              >
                <img
                  className="w-full h-[24.7px] relative max-w-[530px] overflow-hidden shrink-0 max-h-[999999px] mq750:max-w-full"
                  loading="lazy"
                  alt=""
                  src="/logonewsvg.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 pb-[12.7px] pr-0 pl-[19px] box-border min-h-[1px] max-h-[999999px] shrink-0 text-sm-6">
              <div className="flex flex-row items-end justify-start gap-[3.9px] max-h-[999999px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start pt-0.5 pb-0 pr-2.5 pl-0 box-border max-h-[999999px]">
                  <div className="h-6 flex flex-row items-end justify-start pt-0 px-0 pb-[0.3px] box-border max-h-[999999px]">
                    <div className="ml-[-5.9px] h-[25.7px] w-[25.9px] relative max-h-[999999px] shrink-0">
                      <img
                        className="absolute top-[0.9px] left-[6.9px] w-[19px] h-[19.5px] overflow-hidden"
                        alt=""
                        src="/icon-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[9px] box-border max-h-[999999px]">
                  <div
                    className="flex flex-row items-end justify-start pt-0.5 px-0 pb-[3.8px] box-border gap-[7.8px] max-h-[999999px] cursor-pointer"
                    onClick={onLinkMyAccountClick}
                  >
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
                      <a
                        className="relative leading-[20px] text-[inherit] inline-block [text-decoration:none] min-w-[53px] whitespace-nowrap"
                        href="https://www.brilliantearth.com/accounts/login/"
                        target="_blank"
                      >
                        Hi, phan
                      </a>
                    </div>
                    <div className="h-[19.6px] w-[19px] relative max-h-[999999px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center py-0 px-[9px] box-border max-h-[999999px]">
                  <div
                    className="flex flex-col items-start justify-center pt-[3.6px] px-0 pb-[3.8px] box-border max-h-[999999px] cursor-pointer"
                    onClick={onLinkWishListClick}
                  >
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-[19.6px] w-[19px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/icon-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[27px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border text-xs text-wwwbrilliantearthcom-deep-sea-green">
                  <div className="flex-1 flex flex-row items-start justify-center py-0 px-[9px] box-border max-h-[999999px]">
                    <div
                      className="h-full flex flex-col items-start justify-center pt-[3.6px] pb-0.5 px-0 box-border relative max-h-[999999px] cursor-pointer"
                      onClick={onLinkShoppingBagClick}
                    >
                      <div className="flex flex-row items-start justify-start max-h-[999999px]">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="h-[19.6px] w-[19px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/icon-4.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[45.79%] !m-[0] absolute right-[-45.79%] bottom-[2px] left-[100%] flex flex-col items-start justify-start py-0 pr-0 pl-0.5 box-border max-h-[999999px]">
                        <a className="[text-decoration:none] relative leading-[12px] font-bold text-[inherit] inline-block min-w-[6px]">
                          1
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[-4px] flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-h-[999999px] text-sm">
                  <div className="h-[27px] flex flex-row items-start justify-start pt-0 px-0 pb-[7.6px] box-border gap-[5.3px] max-h-[999999px]">
                    <img
                      className="h-[17px] w-[17px] relative rounded-681xl object-cover"
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                    <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[32.1px] whitespace-nowrap">{`USD `}</a>
                    <div className="flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0">
                      <img
                        className="w-2.5 h-2.5 relative"
                        alt=""
                        src="/image-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="absolute top-[0px] left-[0px] bg-wwwbrilliantearthcom-gable-green w-full flex flex-row items-start justify-start py-px px-0 box-border min-h-[30px] max-h-[999999px] max-w-full z-[2]">
        <div className="flex-1 rounded overflow-hidden flex flex-row items-start justify-start py-[5.9px] px-[15px] box-border max-h-[999999px] max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border max-h-[999999px] max-w-full [row-gap:20px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
              <div className="h-[15.1px] flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border relative max-h-[999999px]">
                <div className="mt-[-1px] relative tracking-[1.2px] leading-[17.14px]">{`Free Shipping & 30 Day Returns `}</div>
                <div className="h-1 w-1 absolute !m-[0] right-[3.75px] bottom-[5.12px] bg-wwwbrilliantearthcom-nero [transform:_rotate(45deg)] [transform-origin:0_0]" />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start max-h-[999999px] text-xs-6">
              <a
                className="relative [text-decoration:underline] tracking-[1.2px] leading-[17.14px] text-[inherit]"
                href="https://www.brilliantearth.com/virtual-appointment/"
                target="_blank"
              >
                Book a Virtual Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
