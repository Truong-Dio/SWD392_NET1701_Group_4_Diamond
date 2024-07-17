import { useCallback } from "react";
import PropTypes from "prop-types";
import { cusProfilePath } from '../pages/cusProfile';
import cartCus, { cartCusPath } from "../pages/cartCus";
import {BrowserRouter, Route,Routes, Link, useNavigate} from "react-router-dom";

const Navpage = ({ className = "" }) => {

  const navigate = useNavigate();
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/stores/palo-alto-ca-94303/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("wishlist");
  }, []);


  const onLinkContainerClick5 = useCallback(() => {
    navigate("/myprofile");
  }, [navigate]);

  const onLinkContainerClick6 = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <header
      className={`self-stretch h-32 box-border flex flex-row items-start justify-center p-5 max-w-full text-left text-sm-3 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1125 border-b-[1px] border-solid border-wwwbrilliantearthcom-mercury2 ${className}`}
    >
      <div className="w-[1200px] flex flex-row items-start justify-start py-0 px-[15px] box-border gap-[55.8px] max-w-[1200px] mq950:gap-[28px] mq1425:max-w-full">
        <div className="flex flex-row items-start justify-start py-0 pr-[141px] pl-0 gap-[18px] mq450:pr-5 mq450:box-border">
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
            <a
              className="relative leading-[20px] text-[inherit] inline-block [text-decoration:none] min-w-[86px]"
              target="_blank"
            >
              650.530.1828
            </a>
          </div>
          <div
            className="h-[27px] w-[19px] relative cursor-pointer text-sm-6"
            onClick={onLinkContainerClick}
          >
            <img
              className="absolute top-[4px] left-[0px] w-[19px] h-[19px] overflow-hidden"
              alt=""
              src="/icon.svg"
            />
            <a
              className="absolute top-[3.5px] left-[23.2px] leading-[20px] text-[inherit] flex items-center w-24 h-5 [text-decoration:none] min-w-[96px] whitespace-nowrap"
              href="https://www.brilliantearth.com/stores/palo-alto-ca-94303/"
              target="_blank"
            >
              Palo Alto Store
            </a>
            <img
              className="absolute top-[11.2px] left-[121.2px] w-3 h-1.5 object-contain"
              alt=""
              src="/svg.svg"
            />
          </div>
        </div>
        <div className="w-[530px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border relative max-w-full">
          <nav className="!m-[0] w-[1920px] absolute bottom-[-67.7px] left-[-695px] flex flex-row items-center justify-center py-0 px-5 box-border text-center text-smi text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1125">
            <div className="flex flex-row items-start justify-center py-0 pr-1 pl-0">
              <div className="flex flex-row items-start justify-center py-[18px] px-[19px]">
                <a className="[text-decoration:none] relative tracking-[0.65px] leading-[18.57px] uppercase font-medium text-[inherit] whitespace-nowrap">
                  ENGAGEMENT RINGS
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 px-1">
              <div className="flex flex-row items-start justify-center py-[18px] px-5">
                <a
                  className="relative tracking-[0.65px] leading-[19px] uppercase font-medium text-[inherit] inline-block [text-decoration:none] min-w-[114px] whitespace-nowrap"
                  href="https://www.brilliantearth.com/wedding-rings/"
                  target="_blank"
                >
                  WEDDING RINGS
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 px-1">
              <div className="flex flex-row items-start justify-center py-[18px] px-[19px]">
                <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] uppercase font-medium text-[inherit] inline-block min-w-[77px]">
                  DIAMONDS
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 px-1">
              <div className="flex flex-row items-start justify-center py-[18px] px-[19px]">
                <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] uppercase font-medium text-[inherit] inline-block min-w-[88px]">
                  GEMSTONES
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 px-1 text-smi-5">
              <div className="flex flex-row items-start justify-center py-[18px] px-[19px]">
                <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] uppercase font-medium text-[inherit] inline-block min-w-[63px]">
                  JEWELRY
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 px-1 text-smi-6">
              <div className="flex flex-row items-start justify-center py-[18px] px-5">
                <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] uppercase font-medium text-[inherit] inline-block min-w-[40px]">
                  GIFTS
                </a>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center py-0 pr-0 pl-1 text-smi-9">
              <div className="flex flex-row items-start justify-center py-[18px] px-[19px]">
                <a className="[text-decoration:none] relative tracking-[0.65px] leading-[19px] uppercase font-medium text-[inherit] inline-block min-w-[49px]">
                  ABOUT
                </a>
              </div>
            </div>
          </nav>
          <div
            className="self-stretch flex flex-col items-center justify-start py-0 px-5 cursor-pointer"
            onClick={onLinkContainerClick1}
          >
            <img
              className="w-full h-[24.7px] relative max-w-[530px] overflow-hidden shrink-0 mq950:max-w-full"
              loading="lazy"
              alt=""
              src="/logonewsvg.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[11px]">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-[19px] h-[19px] relative overflow-hidden shrink-0"
              alt=""
              src="/icon-1.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start py-0 px-[9px]">
              <div
                className="flex flex-col items-start justify-center py-1 pr-0 pl-1 cursor-pointer"
                onClick={onLinkContainerClick5}
              >
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 px-1">
              <div className="flex flex-col items-start justify-start py-0 px-[9px]">
                <div
                  className="flex flex-col items-start justify-center py-1 px-0 cursor-pointer"
                  onClick={onLinkContainerClick3}
                >
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/icon-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 px-[9px]">
              <div
                className="flex flex-col items-start justify-center py-1 px-0 cursor-pointer"
                onClick={onLinkContainerClick6}
              >
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[5.4px]">
              <img
                className="h-[17px] w-[17px] relative rounded-681xl object-cover"
                alt=""
                src="/image@2x.png"
              />
              <div className="relative leading-[20px] inline-block min-w-[28.2px]">
                USD
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.7px] px-0 pb-0">
                <img
                  className="w-3 h-1.5 relative object-contain"
                  alt=""
                  src="/svg-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navpage.propTypes = {
  className: PropTypes.string,
};

export default Navpage;
