import { useCallback } from "react";
import PropTypes from "prop-types";

const FooterWrapper = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/engagement-rings/settings/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.brilliantearth.com/wedding-rings/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.brilliantearth.com/gemstones/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://www.brilliantearth.com/jewelry/");
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[33.3px] box-border max-w-full shrink-0 text-left text-xs-1 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 ${className}`}
    >
      <div className="w-[1130px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full shrink-0 lg:pl-[25px] lg:pr-[25px] lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start shrink-0 max-w-full">
            <div className="w-full flex flex-col items-start justify-start py-0 px-[15px] box-border max-w-[1030px] max-h-[999999px] z-[1] mq1050:max-w-full">
              <div className="self-stretch rounded flex flex-row items-start justify-start pt-[18px] pb-3 pr-[829px] pl-0 box-border max-h-[999999px] mq450:pr-5 mq450:box-border mq750:pr-[207px] mq750:box-border mq1050:pr-[414px] mq1050:box-border">
                <div className="flex flex-row items-start justify-start max-h-[999999px]">
                  <a
                    className="relative leading-[18px] text-[inherit] inline-block [text-decoration:none] min-w-[94px] whitespace-nowrap"
                    href="https://www.brilliantearth.com/customer-care/"
                    target="_blank"
                  >
                    Customer Service
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border gap-[4px] max-h-[999999px] text-xs">
                  <div className="relative leading-[18px] inline-block min-w-[5px]">
                    /
                  </div>
                  <a className="[text-decoration:none] relative text-xs-3 leading-[18px] text-[inherit] inline-block min-w-[64px] whitespace-nowrap">
                    My Account
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border max-w-[1030px] max-h-[999999px] z-[2] mt-[-0.8px] text-base-5 mq1050:max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start max-h-[999999px] max-w-full">
                <div className="h-[540px] w-[216.3px] flex flex-col items-start justify-start py-0 px-[15px] box-border relative min-w-[216px] min-h-[1px] max-h-[999999px] mq750:hidden">
                  <div className="w-[calc(100%_-_30px)] !m-[0] absolute top-[0px] right-[15px] left-[15px] flex flex-col items-start justify-start max-h-[999999px]">
                    <div className="flex flex-row items-center justify-start py-4 pr-[72px] pl-4 box-border gap-[5px] max-h-[999999px]">
                      <div className="flex flex-col items-start justify-start pt-[6.2px] px-0 pb-[6.6px] box-border max-h-[999999px]">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="h-[32.9px] w-8 relative overflow-hidden shrink-0"
                            alt=""
                            src="/icon-5.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px] box-border max-h-[999999px]">
                        <div className="relative leading-[23px] inline-block min-w-[61px]">
                          Hi, phan
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px] text-sm-3">
                      <div className="self-stretch box-border flex flex-col items-start justify-start pt-[0.8px] px-0 pb-[0.1px] max-h-[999999px] border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                        <div className="self-stretch bg-wwwbrilliantearthcom-wild-sand flex flex-col items-start justify-start py-2.5 pr-3.5 pl-[15px] box-border max-h-[999999px] whitespace-nowrap">
                          <div className="self-stretch relative leading-[20px]">
                            Account Overview
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-col items-start justify-start max-h-[999999px] z-[1] text-sm-5 border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                        <div className="self-stretch flex flex-col items-start justify-start py-2.5 pr-3.5 pl-[15px] box-border max-h-[999999px]">
                          <a
                            className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                            href="https://www.brilliantearth.com/accounts/order-history/"
                            target="_blank"
                          >
                            Order History
                          </a>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-col items-start justify-start max-h-[999999px] text-sm-2 border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                        <div className="self-stretch flex flex-col items-start justify-start py-2.5 pr-3.5 pl-[15px] box-border max-h-[999999px]">
                          <a
                            className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                            href="https://www.brilliantearth.com/accounts/settings/"
                            target="_blank"
                          >{`Settings & Preferences`}</a>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-col items-start justify-start max-h-[999999px] text-sm-6 border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                        <div className="self-stretch flex flex-col items-start justify-start py-2.5 pr-3.5 pl-[15px] box-border max-h-[999999px]">
                          <div className="self-stretch relative leading-[20px]">
                            Shopping Bag
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-col items-start justify-start max-h-[999999px] text-smi border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                        <div className="self-stretch flex flex-col items-start justify-start py-2.5 pr-3.5 pl-[15px] box-border max-h-[999999px]">
                          <a
                            className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                            href="https://www.brilliantearth.com/shop/wishlist/"
                            target="_blank"
                          >
                            Wish List
                          </a>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-col items-start justify-start max-h-[999999px] border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                        <div className="self-stretch flex flex-col items-start justify-start py-2.5 pr-3.5 pl-[15px] box-border max-h-[999999px]">
                          <a
                            className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                            href="https://www.brilliantearth.com/refer/"
                            target="_blank"
                          >
                            Refer a Friend
                          </a>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-col items-start justify-start max-h-[999999px] text-sm-8 border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto1 border-b-[0.9px]">
                        <div className="self-stretch flex flex-col items-start justify-start py-2.5 pr-3.5 pl-[15px] box-border max-h-[999999px]">
                          <a
                            className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                            href="https://www.brilliantearth.com/accounts/logout/"
                            target="_blank"
                          >
                            Sign Out
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[0.46%] h-full absolute !m-[0] top-[0%] right-[6.89%] bottom-[0%] left-[92.65%] box-border z-[1] border-r-[0.9px] border-solid border-wwwbrilliantearthcom-alto1" />
                </div>
                <div className="flex-1 flex flex-row items-start justify-start min-h-[1px] max-h-[999999px] max-w-[calc(100%_-_216px)] text-sm-1 mq750:max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start py-0 px-[15px] box-border max-h-[999999px] max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-h-[999999px] max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29.9px] max-w-full">
                        <div className="flex-1 bg-wwwbrilliantearthcom-nero box-border flex flex-col items-start justify-start pt-[0.8px] px-0 pb-[0.9px] min-w-[245px] min-h-[160px] max-h-[999999px] shrink-0 max-w-full border-[1px] border-solid border-wwwbrilliantearthcom-alto1">
                          <div className="self-stretch rounded-t-10xs rounded-b-none bg-wwwbrilliantearthcom-wild-sand box-border flex flex-col items-start justify-start py-2.5 px-[15px] max-h-[999999px] border-b-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                            <input
                              className="w-full [border:none] [outline:none] font-wwwbrilliantearthcom-inter-regular-1106 text-sm-8 bg-[transparent] self-stretch h-5 relative leading-[20px] text-wwwbrilliantearthcom-mine-shaft1 text-left flex items-center min-w-[207px] p-0"
                              placeholder="Order History"
                              type="text"
                            />
                          </div>
                          <div className="self-stretch h-[82.3px] flex flex-col items-start justify-start p-[15px] box-border max-h-[999999px]">
                            <div className="self-stretch flex flex-row items-start justify-start max-h-[999999px]">
                              <div className="overflow-hidden flex flex-col items-start justify-start max-h-[999999px]">
                                <div className="relative leading-[20px]">
                                  You have no recent orders.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch rounded-t-none rounded-b-10xs flex flex-col items-start justify-start pt-0 px-[15px] pb-[15px] box-border max-h-[999999px]">
                            <div className="flex flex-row items-start justify-start max-h-[999999px]">
                              <div className="relative [text-decoration:underline] leading-[20px] inline-block min-w-[118px]">
                                View Order History
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 bg-wwwbrilliantearthcom-nero box-border flex flex-col items-start justify-start pt-[0.8px] px-0 pb-[0.9px] min-w-[245px] min-h-[160px] max-h-[999999px] shrink-0 max-w-full text-sm-2 border-[1px] border-solid border-wwwbrilliantearthcom-alto1">
                          <div className="self-stretch rounded-t-10xs rounded-b-none bg-wwwbrilliantearthcom-wild-sand box-border flex flex-col items-start justify-start py-2.5 px-[15px] max-h-[999999px] border-b-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                            <input
                              className="w-full [border:none] [outline:none] font-wwwbrilliantearthcom-inter-regular-1106 text-sm-3 bg-[transparent] self-stretch h-5 relative leading-[20px] text-wwwbrilliantearthcom-mine-shaft1 text-left flex items-center min-w-[207px] p-0"
                              placeholder={`Settings & Preferences`}
                              type="text"
                            />
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[47px] box-border min-h-[82px] max-h-[999999px]">
                            <div className="self-stretch relative leading-[20px]">
                              Update your name, email or change your password.
                            </div>
                          </div>
                          <div className="self-stretch rounded-t-none rounded-b-10xs flex flex-col items-start justify-start pt-0 px-[15px] pb-[15px] box-border max-h-[999999px] text-smi">
                            <div className="flex flex-row items-start justify-start max-h-[999999px]">
                              <div className="relative [text-decoration:underline] leading-[20px] inline-block min-w-[123px]">
                                Update Preferences
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-sm-3">
                        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29.9px] max-w-full">
                          <div className="flex-1 bg-wwwbrilliantearthcom-nero box-border flex flex-col items-start justify-start pt-[0.8px] px-0 pb-[0.9px] min-w-[245px] min-h-[160px] max-h-[999999px] shrink-0 max-w-full border-[1px] border-solid border-wwwbrilliantearthcom-alto1">
                            <div className="self-stretch rounded-t-10xs rounded-b-none bg-wwwbrilliantearthcom-wild-sand box-border flex flex-col items-start justify-start py-2.5 px-[15px] max-h-[999999px] border-b-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                              <input
                                className="w-full [border:none] [outline:none] font-wwwbrilliantearthcom-inter-regular-1106 text-sm-6 bg-[transparent] self-stretch h-5 relative leading-[20px] text-wwwbrilliantearthcom-mine-shaft1 text-left flex items-center min-w-[207px] p-0"
                                placeholder="Shopping Bag"
                                type="text"
                              />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[17.3px] box-border max-h-[999999px]">
                              <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                                <img
                                  className="w-[50px] h-[50px] relative overflow-hidden shrink-0 object-cover max-w-[55px] max-h-[999999px]"
                                  loading="lazy"
                                  alt=""
                                  src="/item--stilljpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-10xs flex flex-col items-start justify-start pt-0 px-[15px] pb-[15px] box-border max-h-[999999px]">
                              <div className="flex flex-row items-start justify-start max-h-[999999px]">
                                <div className="relative [text-decoration:underline] leading-[20px] inline-block min-w-[123px]">
                                  View Shopping Bag
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 bg-wwwbrilliantearthcom-nero box-border flex flex-col items-start justify-start pt-[0.8px] px-0 pb-[0.9px] min-w-[245px] min-h-[160px] max-h-[999999px] shrink-0 max-w-full text-sm-1 border-[1px] border-solid border-wwwbrilliantearthcom-alto1">
                            <div className="self-stretch rounded-t-10xs rounded-b-none bg-wwwbrilliantearthcom-wild-sand box-border flex flex-col items-start justify-start py-2.5 px-[15px] max-h-[999999px] border-b-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                              <input
                                className="w-full [border:none] [outline:none] font-wwwbrilliantearthcom-inter-regular-1106 text-sm-3 bg-[transparent] self-stretch h-5 relative leading-[20px] text-wwwbrilliantearthcom-mine-shaft1 text-left flex items-center min-w-[207px] p-0"
                                placeholder="Wish List"
                                type="text"
                              />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[47px] box-border min-h-[82px] max-h-[999999px]">
                              <div className="self-stretch relative leading-[20px]">
                                View your bag items and checkout.
                              </div>
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-10xs flex flex-col items-start justify-start pt-0 px-[15px] pb-[15px] box-border max-h-[999999px] text-smi">
                              <div className="flex flex-row items-start justify-start max-h-[999999px]">
                                <div className="relative [text-decoration:underline] leading-[20px] inline-block min-w-[112px]">
                                  View My Wish List
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[376.9px] bg-wwwbrilliantearthcom-nero box-border flex flex-col items-start justify-start pt-[0.8px] px-0 pb-[0.9px] min-h-[160px] max-h-[999999px] max-w-full text-sm-1 border-[1px] border-solid border-wwwbrilliantearthcom-alto1">
                          <div className="self-stretch rounded-t-10xs rounded-b-none bg-wwwbrilliantearthcom-wild-sand box-border flex flex-col items-start justify-start py-2.5 px-[15px] max-h-[999999px] border-b-[0.9px] border-solid border-wwwbrilliantearthcom-alto1">
                            <input
                              className="w-full [border:none] [outline:none] font-wwwbrilliantearthcom-inter-regular-1106 text-sm-6 bg-[transparent] self-stretch h-5 relative leading-[20px] text-wwwbrilliantearthcom-mine-shaft1 text-left flex items-center min-w-[207px] p-0"
                              placeholder="Refer a Friend"
                              type="text"
                            />
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[47px] box-border min-h-[82px] max-h-[999999px]">
                            <div className="self-stretch relative leading-[20px]">
                              Love Brilliant Earth? Tell your friends!
                            </div>
                          </div>
                          <div className="self-stretch rounded-t-none rounded-b-10xs flex flex-col items-start justify-start pt-0 px-[15px] pb-[15px] box-border max-h-[999999px] text-sm-2">
                            <div className="flex flex-row items-start justify-start max-h-[999999px]">
                              <div className="relative [text-decoration:underline] leading-[20px] inline-block min-w-[88px]">
                                Refer a Friend
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
        <div className="w-full flex flex-col items-start justify-start py-0 px-[15px] box-border max-w-[1130px] max-h-[999999px] shrink-0 z-[1] text-2xl-6 lg:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-h-[999999px]">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-0 box-border gap-[20px] min-h-[1px] max-h-[999999px]">
              <div className="self-stretch flex flex-col items-start justify-start max-h-[999999px]">
                <div className="self-stretch relative capitalize mq450:text-mid">
                  Continue Shopping
                </div>
              </div>
              <div className="self-stretch grid flex-row items-start justify-center max-h-[999999px] grid-cols-[repeat(4,_minmax(209px,_1fr))] text-sm-6 mq450:grid-cols-[minmax(209px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(209px,_362px))]">
                <div className="h-[360.7px] flex flex-col items-start justify-center pt-0 px-0 pb-2.5 box-border max-w-[1115px] max-h-[1000009px] lg:max-w-full">
                  <div className="w-full flex-1 flex flex-col items-start justify-start pt-0 px-[7px] pb-0 box-border max-w-[1115px] max-h-[999999px] lg:max-w-full">
                    <div
                      className="self-stretch flex-1 flex flex-col items-start justify-start max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick}
                    >
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-[999999px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/picture--engagementringsdtjpg@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start py-[11px] px-0 box-border max-h-[999999px]">
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[0.6px] box-border max-h-[999999px]">
                          <a
                            className="relative tracking-[0.7px] leading-[15.4px] capitalize text-[inherit] [text-decoration:none]"
                            href="https://www.brilliantearth.com/engagement-rings/settings/"
                            target="_blank"
                          >
                            Engagement Rings
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[360.7px] flex flex-col items-start justify-center pt-0 px-0 pb-2.5 box-border max-w-[1115px] max-h-[1000009px] z-[1] text-sm-7 lg:max-w-full">
                  <div className="w-full flex-1 flex flex-col items-start justify-start pt-0 px-[7px] pb-0 box-border max-w-[1115px] max-h-[999999px] lg:max-w-full">
                    <div
                      className="self-stretch flex-1 flex flex-col items-start justify-start max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick1}
                    >
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-[999999px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/picture--weddingringsdtjpg@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start py-[11px] px-0 box-border max-h-[999999px]">
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[0.6px] box-border max-h-[999999px]">
                          <a
                            className="relative tracking-[0.7px] leading-[15.4px] capitalize text-[inherit] inline-block [text-decoration:none] min-w-[106px]"
                            href="https://www.brilliantearth.com/wedding-rings/"
                            target="_blank"
                          >
                            Wedding Rings
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[360.7px] flex flex-col items-start justify-center pt-0 px-0 pb-2.5 box-border max-w-[1115px] max-h-[1000009px] lg:max-w-full">
                  <div className="w-full flex-1 flex flex-col items-start justify-start pt-0 px-[7px] pb-0 box-border max-w-[1115px] max-h-[999999px] lg:max-w-full">
                    <div
                      className="self-stretch flex-1 flex flex-col items-start justify-start max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick2}
                    >
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-[999999px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/picture--gemstoneringsdtjpg@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start py-[11px] px-0 box-border max-h-[999999px]">
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[0.6px] box-border max-h-[999999px]">
                          <a
                            className="relative tracking-[0.7px] leading-[15.4px] capitalize text-[inherit] inline-block [text-decoration:none] min-w-[115px]"
                            href="https://www.brilliantearth.com/gemstones/"
                            target="_blank"
                          >
                            Gemstone Rings
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[360.7px] flex flex-col items-start justify-center pt-0 px-0 pb-2.5 box-border max-w-[1115px] max-h-[1000009px] z-[1] text-sm-5 lg:max-w-full">
                  <div className="w-full flex-1 flex flex-col items-start justify-start pt-0 px-[7px] pb-0 box-border max-w-[1115px] max-h-[999999px] lg:max-w-full">
                    <div
                      className="self-stretch flex-1 flex flex-col items-start justify-start max-h-[999999px] cursor-pointer"
                      onClick={onLinkContainerClick3}
                    >
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-[999999px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/picture--finejewelrydtjpg@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start py-[11px] px-0 box-border max-h-[999999px]">
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[0.6px] box-border max-h-[999999px]">
                          <a
                            className="relative tracking-[0.7px] leading-[15.4px] capitalize text-[inherit] inline-block [text-decoration:none] min-w-[89px]"
                            href="https://www.brilliantearth.com/jewelry/"
                            target="_blank"
                          >
                            Fine Jewelry
                          </a>
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

FooterWrapper.propTypes = {
  className: PropTypes.string,
};

export default FooterWrapper;
