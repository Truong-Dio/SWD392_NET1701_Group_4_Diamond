import { useCallback } from "react";
import PropTypes from "prop-types";

const FilterDiamond1 = ({ className = "" }) => {
  const onTabContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/round/#setting_styles");
  }, []);

  const onTabContainerClick1 = useCallback(() => {
    window.open(
      "https://www.brilliantearth.com/diamond/round/#setting_morefilters"
    );
  }, []);

  const onLinkNextClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/diamond/round/");
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm-5 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 ${className}`}
    >
      <div className="w-[1200.4px] flex flex-col items-start justify-start pt-[50px] pb-[14.9px] pr-0 pl-[15px] box-border max-w-[1200.4px] max-h-[999999px] z-[1] mq850:pt-8 mq850:pb-5 mq850:box-border mq1225:max-w-full">
        <div className="w-[1260px] flex flex-row items-start justify-start pt-5 px-0 pb-0 box-border max-h-[999999px] max-w-[107%] shrink-0">
          <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border max-h-[999999px] max-w-full">
            <div className="w-[890px] flex flex-col items-start justify-start gap-[10px] max-w-[1260px] max-h-[999999px] mq1525:max-w-full">
              <div className="self-stretch box-border flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-1 max-h-[999999px] max-w-full border-b-[0.9px] border-solid border-wwwbrilliantearthcom-silver">
                <div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-20 box-border min-w-[136px] max-h-[999999px] gap-[20px] mq450:pl-5 mq450:box-border">
                  <div
                    className="flex flex-row items-start justify-start max-h-[999999px] cursor-pointer"
                    onClick={onTabContainerClick}
                  >
                    <a
                      className="relative tracking-[-0.01px] leading-[20px] text-[inherit] [text-decoration:none]"
                      href="https://www.brilliantearth.com/diamond/round/#setting_styles"
                      target="_blank"
                    >{`Shape, Carat, & Price`}</a>
                  </div>
                  <div className="h-5 w-px relative bg-wwwbrilliantearthcom-silver" />
                </div>
                <div className="w-[593.3px] flex flex-row items-start justify-center [row-gap:20px] max-w-full text-sm-8 text-wwwbrilliantearthcom-gray mq850:flex-wrap">
                  <div className="w-[348.5px] flex flex-col items-start justify-start max-w-full">
                    <div className="w-[297.5px] flex flex-row items-start justify-between py-0 pr-px pl-[84px] box-border max-h-[999999px] shrink-0 gap-[20px] mq450:pl-5 mq450:box-border">
                      <div
                        className="flex flex-row items-start justify-start max-h-[999999px] cursor-pointer"
                        onClick={onTabContainerClick1}
                      >
                        <div className="relative leading-[20px] flex items-center justify-center min-w-[128px]">{`Color, Clarity, & Cut`}</div>
                      </div>
                      <div className="h-5 w-px relative bg-wwwbrilliantearthcom-silver" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border min-w-[77px] max-h-[999999px] shrink-0 z-[1] ml-[-51.9px] text-sm-7">
                    <div className="flex flex-row items-start justify-start max-h-[999999px]">
                      <a
                        className="relative leading-[20px] text-[inherit] inline-block [text-decoration:none] min-w-[77px]"
                        href="https://www.brilliantearth.com/diamond/round/#tracebility"
                        target="_blank"
                      >
                        More Filters
                      </a>
                    </div>
                  </div>
                  <div className="h-6 flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border gap-[15.9px] max-h-[999999px] shrink-0 z-[2] ml-[-51.9px]">
                    <div className="h-[19.6px] w-3 relative box-border border-t-[9.8px] border-solid border-wwwbrilliantearthcom-silver1 border-r-[8px] border-b-[9.8px]" />
                    <div className="h-[19.6px] w-3 relative box-border border-t-[9.8px] border-solid border-wwwbrilliantearthcom-mine-shaft border-b-[9.8px] border-l-[8px]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-5 px-0 box-border max-h-[999999px] max-w-full text-left text-sm-6">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border max-h-[999999px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border min-w-[182px] max-h-[999999px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-h-[30px] max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border max-h-[20px] max-w-full">
                        <div className="flex-1 relative tracking-[0.35px] leading-[20px] capitalize inline-block max-w-full">
                          Diamond Shape
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-h-[1000009px] max-w-full text-center text-xs-6 text-wwwbrilliantearthcom-deep-sea-green">
                      <div className="h-[88.4px] flex-1 flex flex-col items-start justify-start relative gap-[10px] max-h-[999999px] max-w-full mq1525:h-auto mq1525:min-h-[88.40000000000009]">
                        <div
                          className="w-[25px] h-[99.21%] !m-[0] absolute top-[0%] right-[-8px] bottom-[0.79%] flex flex-col items-start justify-start py-5 px-[7px] box-border max-h-[999999px] cursor-pointer"
                          onClick={onLinkNextClick}
                        >
                          <img
                            className="w-2.5 h-[17px] relative object-cover max-h-[999999px]"
                            alt=""
                            src="/image-26@2x.png"
                          />
                        </div>
                        <div className="w-[408px] !m-[0] absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start max-h-[999999px] max-w-full z-[1]">
                          <div className="flex flex-row items-start justify-center py-0 pr-[1370px] pl-0 box-border gap-[10px] max-h-[999999px] shrink-0 max-w-[434%] mq1525:flex-wrap">
                            <div className="flex flex-col items-start justify-start gap-[4.5px] max-h-[999999px]">
                              <div className="w-[58px] h-[58px] rounded-39xl bg-wwwbrilliantearthcom-desert-storm box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.8px] px-1 pb-[5.2px] max-h-[999999px] border-[1px] border-solid border-wwwbrilliantearthcom-deep-sea-green">
                                <img
                                  className="w-12 h-12 relative rounded-29xl overflow-hidden shrink-0 object-cover max-h-[999999px]"
                                  loading="lazy"
                                  alt=""
                                  src="/round-newjpg@2x.png"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pt-0 px-2.5 pb-[0.5px] box-border max-h-[999999px]">
                                <div className="relative tracking-[0.3px] leading-[15px] capitalize inline-block min-w-[37px]">
                                  round
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[4.5px] max-h-[999999px] text-xs">
                              <div className="w-[58px] h-[58px] rounded-39xl bg-wwwbrilliantearthcom-desert-storm box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.8px] px-1 pb-[5.2px] max-h-[999999px] border-[1px] border-solid border-wwwbrilliantearthcom-deep-sea-green">
                                <img
                                  className="w-12 h-12 relative rounded-29xl overflow-hidden shrink-0 object-cover max-h-[999999px]"
                                  loading="lazy"
                                  alt=""
                                  src="/oval-newjpg@2x.png"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pt-0 px-[15px] pb-[0.5px] box-border max-h-[999999px]">
                                <div className="relative tracking-[0.3px] leading-[15px] capitalize inline-block min-w-[27px]">
                                  oval
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[4.5px] max-h-[999999px]">
                              <div className="w-[58px] h-[58px] rounded-39xl bg-wwwbrilliantearthcom-desert-storm box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.8px] px-1 pb-[5.2px] max-h-[999999px] border-[1px] border-solid border-wwwbrilliantearthcom-deep-sea-green">
                                <img
                                  className="w-12 h-12 relative rounded-29xl overflow-hidden shrink-0 object-cover max-h-[999999px]"
                                  loading="lazy"
                                  alt=""
                                  src="/emerald-newjpg@2x.png"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pt-0 px-[5px] pb-[0.5px] box-border max-h-[999999px]">
                                <div className="relative tracking-[0.3px] leading-[15px] capitalize inline-block min-w-[47px]">
                                  emerald
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[4.5px] max-h-[999999px] text-xs-4 text-wwwbrilliantearthcom-mine-shaft">
                              <div className="w-[58px] h-[58px] rounded-39xl bg-wwwbrilliantearthcom-desert-storm overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.8px] px-[5px] pb-[5.2px] box-border max-h-[999999px]">
                                <img
                                  className="w-12 h-12 relative rounded-29xl overflow-hidden shrink-0 object-cover max-h-[999999px]"
                                  loading="lazy"
                                  alt=""
                                  src="/cushion-newjpg@2x.png"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pt-0 px-1.5 pb-[0.5px] box-border max-h-[999999px]">
                                <div className="relative tracking-[0.3px] leading-[15px] capitalize inline-block min-w-[46px]">
                                  cushion
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[4.5px] max-h-[999999px] text-xs-3 text-wwwbrilliantearthcom-mine-shaft">
                              <div className="w-[58px] h-[58px] rounded-39xl bg-wwwbrilliantearthcom-desert-storm overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.8px] px-[5px] pb-[5.2px] box-border max-h-[999999px]">
                                <img
                                  className="w-12 h-12 relative rounded-29xl overflow-hidden shrink-0 object-cover max-h-[999999px]"
                                  loading="lazy"
                                  alt=""
                                  src="/pear-newjpg@2x.png"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pt-0 px-4 pb-[0.5px] box-border max-h-[999999px]">
                                <div className="relative tracking-[0.3px] leading-[15px] capitalize inline-block min-w-[26px]">
                                  pear
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[4.5px] max-h-[999999px] text-xs-4 text-wwwbrilliantearthcom-mine-shaft">
                              <div className="w-[58px] h-[58px] rounded-39xl bg-wwwbrilliantearthcom-desert-storm overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.8px] px-[5px] pb-[5.2px] box-border max-h-[999999px]">
                                <img
                                  className="w-12 h-12 relative rounded-29xl overflow-hidden shrink-0 object-cover max-h-[999999px]"
                                  loading="lazy"
                                  alt=""
                                  src="/radiant-ir353jpg@2x.png"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start pt-0 px-[7px] pb-[0.5px] box-border max-h-[999999px]">
                                <div className="relative tracking-[0.3px] leading-[15px] capitalize inline-block min-w-[43px]">
                                  radiant
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-px relative hidden max-h-[999999px] z-[0]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[20.4px] pr-0 pl-[25px] box-border min-w-[182px] max-h-[999999px] max-w-full ml-[-2px] text-sm">
                    <div className="self-stretch flex flex-col items-start justify-start pt-[15px] px-0 pb-2.5 box-border max-h-[45px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[360px] pl-0 box-border max-h-[20px] [row-gap:20px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                        <div className="flex-1 relative tracking-[0.35px] leading-[20px] capitalize inline-block min-w-[28px]">
                          carat 
                        </div>
                        <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[2.5px] box-border max-h-[999999px] mq450:ml-0">
                          <div className="flex flex-row items-start justify-start opacity-[0.2] max-h-[999999px]">
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-4 w-[16.4px] relative overflow-hidden shrink-0"
                                alt=""
                                src="/icon-15.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border max-h-[999999px] max-w-full text-xs">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-h-[999999px] max-w-full">
                        <div className="self-stretch shadow-[0px_1px_1px_#f0f0f0_inset,_0px_3px_6px_-5px_#bbb] rounded-3xs bg-wwwbrilliantearthcom-mercury1 overflow-hidden flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                          <div className="h-1 flex-1 relative bg-wwwbrilliantearthcom-deep-sea-green max-h-[999999px] max-w-full">
                            <div className="absolute h-[calc(100%_+_16px)] w-[69.5%] top-[-7px] right-[0%] bottom-[-9px] left-[30.5%] rounded-sm flex flex-row items-start justify-end pt-[7px] pb-[9px] px-0 box-border max-h-[999999px]">
                              <div className="h-5 w-5 relative rounded-xl bg-wwwbrilliantearthcom-deep-sea-green hidden max-h-[999999px]" />
                              <div className="h-1 w-px shadow-[0px_1px_1px_#f0f0f0_inset] rounded-3xs bg-wwwbrilliantearthcom-nero-02 flex flex-row items-start justify-start relative">
                                <div className="h-5 w-5 absolute !m-[0] bottom-[-9px] left-[-10px] rounded-xl bg-wwwbrilliantearthcom-deep-sea-green z-[1]" />
                              </div>
                            </div>
                            <div className="absolute w-[33%] top-[0px] right-[67%] left-[0%] bg-wwwbrilliantearthcom-mercury1 h-1.5 z-[1]" />
                          </div>
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[5px] px-0 pb-2.5 box-border max-h-[999999px] gap-[20px] mq450:flex-wrap">
                          <div className="w-[66.7px] flex flex-col items-start justify-center py-0 px-[3px] box-border max-h-[999999px]">
                            <div className="self-stretch bg-wwwbrilliantearthcom-nero flex flex-row items-start justify-center pt-1 px-1 pb-0.5 border-[1px] border-solid border-wwwbrilliantearthcom-mercury">
                              <div className="flex-1 overflow-auto flex flex-col items-start justify-start">
                                <div className="w-[50.2px] relative flex items-center">
                                  0.91
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[66.7px] flex flex-col items-start justify-center py-0 px-[3px] box-border max-h-[999999px] text-right">
                            <div className="self-stretch bg-wwwbrilliantearthcom-nero flex flex-row items-start justify-center pt-1 pb-0.5 pr-1 pl-[3px] border-[1px] border-solid border-wwwbrilliantearthcom-mercury">
                              <div className="flex-1 overflow-auto flex flex-col items-start justify-start py-0 pr-0 pl-5">
                                <div className="w-[30px] relative flex items-center">
                                  15.11
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border max-h-[999999px] max-w-full text-sm-9">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[24.1px] pr-[25px] pl-0 box-border min-w-[182px] max-h-[999999px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] box-border max-h-[35px] max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-start max-h-[20px] max-w-full">
                        <div className="flex-1 relative tracking-[0.35px] leading-[20px] capitalize inline-block max-w-full">
                          Diamond Origin
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-1.5 px-0 pb-0 box-border max-h-[1000005px] max-w-full text-center text-mini-3">
                      <div className="flex-1 flex flex-row items-start justify-start max-h-[999999px] max-w-full [row-gap:20px] mq450:flex-wrap">
                        <div className="flex-1 flex flex-row items-start justify-center min-w-[257px] max-h-[999999px] max-w-full [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-col items-start justify-center py-0 pr-2.5 pl-0 box-border min-w-[132px] max-h-[999999px]">
                            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-h-[999999px]">
                              <div className="self-stretch shadow-[0px_0px_0px_2px_#0d6363] rounded-lg bg-wwwbrilliantearthcom-nero-02 overflow-hidden flex flex-col items-center justify-start py-[9px] pr-9 pl-[35px] box-border max-h-[999999px] whitespace-nowrap">
                                <a
                                  className="self-stretch relative leading-[20px] capitalize text-[inherit] inline-block [text-decoration:none] min-w-[121.1px]"
                                  href="https://www.brilliantearth.com/diamond/shop-all/"
                                  target="_blank"
                                >
                                  Natural Diamonds
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-h-[999999px]">
                            <div className="shadow-[0px_0px_0px_2px_#dedede] rounded-lg bg-wwwbrilliantearthcom-nero-02 overflow-hidden flex flex-col items-center justify-start py-[9px] px-12 box-border max-h-[999999px] whitespace-nowrap">
                              <a
                                className="relative leading-[20px] capitalize text-[inherit] inline-block [text-decoration:none] min-w-[97px]"
                                href="https://www.brilliantearth.com/lab-diamond/"
                                target="_blank"
                              >
                                Lab Diamonds
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="h-[37.9px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                          <div className="flex flex-row items-start justify-end py-0 pr-0 pl-2 box-border max-h-[999999px]">
                            <div
                              className="h-[37.9px] w-4 relative opacity-[0.2] max-h-[999999px] cursor-pointer"
                              onClick={onLinkNextClick}
                            >
                              <img
                                className="absolute top-[2.7px] left-[0px] w-4 h-4 overflow-hidden"
                                alt=""
                                src="/icon-16.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-[25px] box-border min-w-[182px] max-h-[999999px] max-w-full ml-[-2px] text-sm-5">
                    <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-0 box-border max-h-[1000019px]">
                      <div className="self-stretch flex flex-row items-start justify-start max-h-[999999px]">
                        <div className="flex flex-col items-start justify-start max-h-[999999px]">
                          <div className="flex flex-col items-start justify-start max-h-[20px]">
                            <div className="relative tracking-[0.35px] leading-[20px] capitalize inline-block min-w-[98px]">
                              Diamond Price
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[10px] max-h-[999999px] max-w-full text-right text-xs-3">
                      <div className="self-stretch shadow-[0px_1px_1px_#f0f0f0_inset,_0px_3px_6px_-5px_#bbb] rounded-3xs bg-wwwbrilliantearthcom-mercury1 overflow-hidden flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                        <div className="h-1 flex-1 relative bg-wwwbrilliantearthcom-deep-sea-green max-h-[999999px] max-w-full">
                          <div className="absolute h-[calc(100%_+_16px)] w-[75.26%] top-[-7px] right-[0%] bottom-[-9px] left-[24.74%] rounded-sm flex flex-row items-start justify-end pt-[7px] pb-[9px] px-0 box-border max-h-[999999px]">
                            <div className="h-5 w-5 relative rounded-xl bg-wwwbrilliantearthcom-deep-sea-green hidden max-h-[999999px]" />
                            <div className="h-1 w-px shadow-[0px_1px_1px_#f0f0f0_inset] rounded-3xs bg-wwwbrilliantearthcom-nero-02 flex flex-row items-start justify-start relative">
                              <div className="h-5 w-5 absolute !m-[0] bottom-[-9px] left-[-10px] rounded-xl bg-wwwbrilliantearthcom-deep-sea-green z-[1]" />
                            </div>
                          </div>
                          <div className="absolute w-[27.24%] top-[0px] right-[72.76%] left-[0%] bg-wwwbrilliantearthcom-mercury1 h-1.5 z-[1]" />
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[5px] px-0 pb-2.5 box-border max-h-[999999px] gap-[20px] mq450:flex-wrap">
                        <div className="w-[100px] flex flex-col items-start justify-center max-h-[999999px]">
                          <div className="self-stretch bg-wwwbrilliantearthcom-nero flex flex-row items-start justify-center p-1 border-[1px] border-solid border-wwwbrilliantearthcom-mercury">
                            <input
                              className="w-full [border:none] [outline:none] bg-[transparent] h-[13px] flex-1 overflow-auto flex flex-col items-start justify-start font-wwwbrilliantearthcom-inter-regular-1106 text-xs-1 text-wwwbrilliantearthcom-mine-shaft min-w-[54px]"
                              placeholder="$5,720"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="w-[100px] flex flex-col items-start justify-center max-h-[999999px]">
                          <div className="self-stretch bg-wwwbrilliantearthcom-nero flex flex-row items-start justify-center pt-1 px-1 pb-[3px] border-[1px] border-solid border-wwwbrilliantearthcom-mercury">
                            <div className="flex-1 overflow-auto flex flex-col items-end justify-start">
                              <div className="w-[90.2px] relative flex items-center whitespace-nowrap">
                                $561,960
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
          </div>
        </div>
        <div className="w-[1260px] flex flex-row items-start justify-center py-0 px-5 box-border max-h-[999999px] max-w-[107%] shrink-0 text-wwwbrilliantearthcom-gray">
          <div className="w-[890px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[30px] max-w-[1260px] max-h-[999999px] mq1525:max-w-full">
            <div className="self-stretch box-border flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-1 max-h-[999999px] max-w-full border-b-[0.9px] border-solid border-wwwbrilliantearthcom-silver">
              <div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-20 box-border min-w-[136px] max-h-[999999px] gap-[20px] mq450:pl-5 mq450:box-border">
                <div
                  className="flex flex-row items-start justify-start max-h-[999999px] cursor-pointer"
                  onClick={onTabContainerClick}
                >
                  <a
                    className="relative tracking-[-0.01px] leading-[20px] text-[inherit] [text-decoration:none]"
                    href="https://www.brilliantearth.com/diamond/round/#setting_styles"
                    target="_blank"
                  >{`Shape, Carat, & Price`}</a>
                </div>
                <div className="h-5 w-px relative bg-wwwbrilliantearthcom-silver" />
              </div>
              <div className="h-6 w-[593.3px] relative max-w-full text-sm-8 text-wwwbrilliantearthcom-mine-shaft">
                <div className="absolute top-[0px] left-[0px] w-[296.7px] flex flex-row items-start justify-between py-0 pr-px pl-[84px] box-border max-h-[999999px] gap-[20px]">
                  <div
                    className="flex flex-row items-start justify-start max-h-[999999px] cursor-pointer"
                    onClick={onTabContainerClick1}
                  >
                    <div className="relative leading-[20px] flex items-center justify-center min-w-[128px]">{`Color, Clarity, & Cut`}</div>
                  </div>
                  <div className="h-5 w-px relative bg-wwwbrilliantearthcom-silver" />
                </div>
                <div className="absolute top-[0px] left-[296.6px] w-[296.7px] flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-h-[999999px] z-[1] text-sm-7 text-wwwbrilliantearthcom-gray">
                  <div className="flex flex-row items-start justify-start max-h-[999999px]">
                    <a
                      className="relative leading-[20px] text-[inherit] inline-block [text-decoration:none] min-w-[77px]"
                      href="https://www.brilliantearth.com/diamond/round/#tracebility"
                      target="_blank"
                    >
                      More Filters
                    </a>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[541.4px] h-6 flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border gap-[15.9px] max-h-[999999px] z-[2]">
                  <div className="h-[19.6px] w-3 relative box-border border-t-[9.8px] border-solid border-wwwbrilliantearthcom-mine-shaft border-r-[8px] border-b-[9.8px]" />
                  <div className="h-[19.6px] w-3 relative box-border border-t-[9.8px] border-solid border-wwwbrilliantearthcom-mine-shaft border-b-[9.8px] border-l-[8px]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[0.1px] box-border max-h-[999999px] max-w-full [row-gap:20px] text-left text-sm text-wwwbrilliantearthcom-mine-shaft">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[289px] max-w-full">
                <div className="self-stretch h-[81.1px] flex flex-col items-start justify-start pt-0 pb-[51.1px] pr-[25px] pl-0 box-border max-h-[999999px] shrink-0 max-w-full mq450:h-auto">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border max-h-[30px] shrink-0">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[361px] pl-0 box-border max-h-[20px] [row-gap:20px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="flex-1 relative tracking-[0.35px] leading-[20px] capitalize inline-block min-w-[27px]">
                        color 
                      </div>
                      <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[2.5px] box-border max-h-[999999px] mq450:ml-0">
                        <div className="flex flex-row items-start justify-start opacity-[0.2] max-h-[999999px]">
                          <div className="flex flex-row items-start justify-start">
                            <img
                              className="h-4 w-[16.4px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon-17.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 box-border gap-[10px] max-h-[999999px] shrink-0 max-w-full text-center text-xs">
                    <div className="self-stretch shadow-[0px_1px_1px_#f0f0f0_inset,_0px_3px_6px_-5px_#bbb] rounded-3xs bg-wwwbrilliantearthcom-mercury1 overflow-hidden flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                      <div className="h-1 flex-1 bg-wwwbrilliantearthcom-deep-sea-green flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                        <div className="w-[115.3px] bg-wwwbrilliantearthcom-mercury1 flex flex-row items-start justify-between py-0 pr-0 pl-[57px] box-border gap-[20px] z-[1]">
                          <div className="h-1.5 w-[114.3px] relative bg-wwwbrilliantearthcom-mercury1 hidden" />
                          <div className="h-[7px] w-px relative box-border z-[2] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero" />
                          <div className="h-[7px] w-px relative box-border z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero" />
                        </div>
                        <div className="mt-[-7px] w-[295.7px] rounded-sm flex flex-row items-start justify-start pt-[7px] pb-1.5 pr-14 pl-[67px] box-border gap-[56.1px] max-h-[999999px] ml-[-11px] mq450:gap-[28px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                          <div className="h-5 w-5 relative rounded-xl bg-wwwbrilliantearthcom-deep-sea-green hidden max-h-[999999px]" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero" />
                          <div className="h-1 w-px shadow-[0px_1px_1px_#f0f0f0_inset] rounded-3xs bg-wwwbrilliantearthcom-nero-02 flex flex-row items-start justify-start relative shrink-0">
                            <div className="h-5 w-5 absolute !m-[0] bottom-[-9px] left-[-10px] rounded-xl bg-wwwbrilliantearthcom-deep-sea-green z-[1]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border max-h-[999999px] mq450:flex-wrap">
                      <div className="flex-[0.7297] overflow-hidden flex flex-row items-start justify-start py-0 pr-6 pl-[25px] box-border min-w-[56px] max-w-[57px] max-h-[999999px] mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[7.2px]">
                          J
                        </div>
                      </div>
                      <div className="flex-[0.4595] overflow-hidden flex flex-row items-start justify-start py-0 px-[26px] box-border min-w-[56px] max-w-[57px] max-h-[999999px] mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[4.6px]">
                          I
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-[23px] box-border min-w-[56px] max-w-[57px] max-h-[999999px]">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[10.1px]">
                          H
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-[23px] box-border min-w-[56px] max-w-[57px] max-h-[999999px]">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[10.8px]">
                          G
                        </div>
                      </div>
                      <div className="flex-[0.8198] overflow-hidden flex flex-row items-start justify-start py-0 px-6 box-border min-w-[56px] max-w-[57px] max-h-[999999px] mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[8.1px]">
                          F
                        </div>
                      </div>
                      <div className="flex-[0.8198] overflow-hidden flex flex-row items-start justify-start py-0 px-6 box-border min-w-[56px] max-w-[57px] max-h-[999999px] mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[8.6px]">
                          E
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-[23px] box-border min-w-[56px] max-w-[57px] max-h-[999999px]">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[10.3px]">
                          D
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border max-h-[1000009px] shrink-0 max-w-full">
                  <div className="h-[96.1px] flex-1 flex flex-col items-start justify-start pt-0 pb-[61.1px] pr-[25px] pl-0 box-border max-h-[999999px] max-w-full mq850:h-auto">
                    <div className="self-stretch flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border relative max-h-[35px] shrink-0">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[374px] pl-0 box-border max-h-[20px] mq450:pr-5 mq450:box-border">
                        <div className="w-[29px] relative tracking-[0.35px] leading-[20px] capitalize flex items-center">
                          cut 
                        </div>
                        <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[2.5px] box-border max-h-[999999px]">
                          <div className="flex flex-row items-start justify-start opacity-[0.2] max-h-[999999px]">
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-4 w-[16.4px] relative overflow-hidden shrink-0"
                                alt=""
                                src="/icon-18.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="!m-[0] absolute bottom-[-4.8px] left-[70px] flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border min-h-[20px] max-h-[999999px] z-[1] text-xs-8">
                        <div className="flex flex-row items-start justify-start gap-[11px] max-h-[999999px]">
                          <input
                            className="m-0 h-4 w-4 relative box-border max-h-[999999px] shrink-0 border-[1px] border-solid border-wwwbrilliantearthcom-silver1"
                            type="checkbox"
                          />
                          <div className="relative tracking-[0.5px] leading-[16px] inline-block min-w-[103px] shrink-0">{`Hearts & Arrows `}</div>
                        </div>
                        <div className="flex flex-row items-start justify-start pt-[0.8px] px-0 pb-0 box-border max-h-[999999px]">
                          <div className="h-4 w-[16.5px] relative opacity-[0.2] max-h-[999999px]">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
                              alt=""
                              src="/icon-19.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border max-h-[1000009px] shrink-0 max-w-full text-center text-xs-4">
                      <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 box-border gap-[10px] max-h-[999999px] max-w-full">
                        <div className="self-stretch shadow-[0px_1px_1px_#f0f0f0_inset,_0px_3px_6px_-5px_#bbb] rounded-3xs bg-wwwbrilliantearthcom-mercury1 overflow-hidden flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                          <div className="h-1 flex-1 bg-wwwbrilliantearthcom-deep-sea-green flex flex-row items-start justify-start max-h-[999999px] max-w-full mq850:h-auto">
                            <div className="mt-[-7px] ml-[-10px] w-[410px] rounded-sm flex flex-row items-start justify-start pt-[7px] pb-1.5 pr-[79px] pl-[90px] box-border gap-[79px] max-h-[999999px] shrink-0 max-w-[103%] mq850:flex-wrap mq850:gap-[39px] mq850:pl-[45px] mq850:pr-[39px] mq850:box-border">
                              <div className="h-5 w-5 relative rounded-xl bg-wwwbrilliantearthcom-deep-sea-green hidden max-h-[999999px]" />
                              <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                              <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                              <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                              <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                              <div className="h-1 w-px shadow-[0px_1px_1px_#f0f0f0_inset] rounded-3xs bg-wwwbrilliantearthcom-nero-02 flex flex-row items-start justify-start relative shrink-0">
                                <div className="h-5 w-5 absolute !m-[0] bottom-[-9px] left-[-10px] rounded-xl bg-wwwbrilliantearthcom-deep-sea-green z-[1]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border max-h-[999999px] [row-gap:20px] mq450:flex-wrap">
                          <div className="flex-[0.3438] flex flex-row items-start justify-start py-0 px-[29px] box-border min-w-[78px] max-w-[80px] max-h-[999999px] text-xs-3 mq450:flex-1">
                            <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[21.8px]">
                              Fair
                            </div>
                          </div>
                          <div className="flex-[0.5313] flex flex-row items-start justify-start py-0 px-[23px] box-border min-w-[78px] max-w-[80px] max-h-[999999px] text-xs mq450:flex-1">
                            <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[32.9px]">
                              Good
                            </div>
                          </div>
                          <div className="flex-[0.9375] flex flex-row items-start justify-start py-0 px-2.5 box-border min-w-[78px] max-w-[80px] max-h-[999999px] mq450:flex-1">
                            <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[59.4px]">
                              Very Good
                            </div>
                          </div>
                          <div className="flex-[0.4688] flex flex-row items-start justify-start py-0 px-[25px] box-border min-w-[78px] max-w-[80px] max-h-[999999px] text-xs-6 mq450:flex-1">
                            <div className="w-[28.3px] relative leading-[18px] capitalize flex items-center justify-center shrink-0 min-w-[28.3px]">
                              Ideal
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start py-0 px-2 box-border min-w-[78px] max-w-[80px] max-h-[999999px]">
                            <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[63px]">
                              Super Ideal
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[289px] max-w-full">
                <div className="self-stretch h-[81.1px] flex flex-col items-start justify-start pt-0 pb-[51.1px] pr-0 pl-[25px] box-border max-h-[999999px] shrink-0 max-w-full mq850:h-auto">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border max-h-[30px] shrink-0">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[353px] pl-0 box-border max-h-[20px] mq450:pr-5 mq450:box-border">
                      <div className="w-[50px] relative tracking-[0.35px] leading-[20px] capitalize flex items-center">
                        clarity 
                      </div>
                      <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[2.5px] box-border max-h-[999999px]">
                        <div className="flex flex-row items-start justify-start opacity-[0.2] max-h-[999999px]">
                          <div className="flex flex-row items-start justify-start">
                            <img
                              className="h-4 w-[16.4px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon-20.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 box-border gap-[10px] max-h-[999999px] shrink-0 max-w-full text-center text-xs-1">
                    <div className="self-stretch shadow-[0px_1px_1px_#f0f0f0_inset,_0px_3px_6px_-5px_#bbb] rounded-3xs bg-wwwbrilliantearthcom-mercury1 overflow-hidden flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                      <div className="h-1 flex-1 bg-wwwbrilliantearthcom-deep-sea-green flex flex-row items-start justify-start max-h-[999999px] max-w-full mq850:h-auto">
                        <div className="mt-[-7px] ml-[-10px] w-[410px] rounded-sm flex flex-row items-start justify-start pt-[7px] pb-1.5 pr-[49px] pl-[60px] box-border gap-[49px] max-h-[999999px] shrink-0 max-w-[103%] mq450:gap-[24px] mq450:pl-[30px] mq450:pr-6 mq450:box-border mq850:flex-wrap">
                          <div className="h-5 w-5 relative rounded-xl bg-wwwbrilliantearthcom-deep-sea-green hidden max-h-[999999px]" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                          <div className="h-[7px] w-px relative box-border shrink-0 z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-nero mq850:w-full mq850:h-px" />
                          <div className="h-1 w-px shadow-[0px_1px_1px_#f0f0f0_inset] rounded-3xs bg-wwwbrilliantearthcom-nero-02 flex flex-row items-start justify-start relative shrink-0">
                            <div className="h-5 w-5 absolute !m-[0] bottom-[-9px] left-[-10px] rounded-xl bg-wwwbrilliantearthcom-deep-sea-green z-[1]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border max-h-[999999px] [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-[0.6] overflow-hidden flex flex-row items-start justify-start py-0 px-4 box-border min-w-[49px] max-w-[50px] max-h-[999999px] mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[17.8px]">
                          SI2
                        </div>
                      </div>
                      <div className="flex-[0.6] overflow-hidden flex flex-row items-start justify-start py-0 px-4 box-border min-w-[49px] max-w-[50px] max-h-[999999px] text-xs mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[17.8px]">
                          SI1
                        </div>
                      </div>
                      <div className="flex-[0.7333] overflow-hidden flex flex-row items-start justify-start py-0 px-3.5 box-border min-w-[49px] max-w-[50px] max-h-[999999px] text-2xs-9 mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[21.9px]">
                          VS2
                        </div>
                      </div>
                      <div className="flex-[0.7333] overflow-hidden flex flex-row items-start justify-start py-0 px-3.5 box-border min-w-[49px] max-w-[50px] max-h-[999999px] text-xs-6 mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[21.9px]">
                          VS1
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-2.5 box-border min-w-[49px] max-w-[50px] max-h-[999999px] text-2xs-7">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[29.3px]">
                          VVS2
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-2.5 box-border min-w-[49px] max-w-[50px] max-h-[999999px] text-xs-4">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[29.3px]">
                          VVS1
                        </div>
                      </div>
                      <div className="flex-[0.4] overflow-hidden flex flex-row items-start justify-start py-0 px-[19px] box-border min-w-[49px] max-w-[50px] max-h-[999999px] text-xs-6 mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[11.1px]">
                          IF
                        </div>
                      </div>
                      <div className="flex-[0.4667] overflow-hidden flex flex-row items-start justify-start py-0 px-[18px] box-border min-w-[49px] max-w-[50px] max-h-[999999px] mq450:flex-1">
                        <div className="flex-1 relative leading-[18px] capitalize inline-block min-w-[13.9px]">
                          FL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[55px] pb-[15.1px] pr-0 pl-[25px] box-border max-h-[999999px] shrink-0 max-w-full text-sm-1">
                  <div className="flex-1 bg-wwwbrilliantearthcom-wild-sand flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                      <div className="flex-1 bg-wwwbrilliantearthcom-nero box-border flex flex-row items-start justify-start pt-[7px] pb-1.5 pr-[11px] pl-4 max-h-[999999px] max-w-full border-[1px] border-solid border-wwwbrilliantearthcom-silver">
                        <div className="flex-1 overflow-hidden flex flex-row items-end justify-between py-0 pr-0.5 pl-0 box-border max-h-[999999px] max-w-full gap-[20px]">
                          <div className="relative tracking-[0.35px] leading-[20px] capitalize">
                            What Matters Most to You?
                          </div>
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.2px]">
                            <img
                              className="w-2.5 h-2.5 relative object-cover z-[1]"
                              alt=""
                              src="/image-2@2x.png"
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
      </div>
    </section>
  );
};

FilterDiamond1.propTypes = {
  className: PropTypes.string,
};

export default FilterDiamond1;
