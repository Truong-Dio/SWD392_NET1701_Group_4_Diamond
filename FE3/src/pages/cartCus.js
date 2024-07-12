import { useCallback } from "react";
import HorizontalBorder1 from "../components/HorizontalBorder1";
import Container from "../components/Container";
import CartContainer from "../components/Container1";
import HorizontalBorder from "../components/HorizontalBorder1";

const cartCus = () => {
  const onItemLinkClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/");
  }, []);

  return (
    <div className="w-full relative bg-wwwbrilliantearthcom-nero overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-smi text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106">
      <div className="w-[200px] h-px relative overflow-hidden shrink-0 hidden z-[0]">
        <div className="absolute top-[-0.2px] left-[0px] leading-[20px] flex items-center w-[181.4px] h-5">
          Press Alt+1 for screen-reader
        </div>
      </div>
      <div className="w-[200px] h-px relative overflow-hidden shrink-0 hidden z-[1] text-smi-8 text-wwwbrilliantearthcom-tundora">
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-wwwbrilliantearthcom-nero" />
      <HorizontalBorder1 />
      <main className="self-stretch h-[1457.7px] relative shrink-0 max-w-full text-left text-xs-6 text-wwwbrilliantearthcom-tundora font-wwwbrilliantearthcom-inter-regular-1106 mq1050:h-auto mq1050:min-h-[1457.7000000000005]">
        <div className="absolute top-[0px] left-[303.2px] flex flex-col items-start justify-start py-0 px-[15px] box-border max-w-[1030px] max-h-[999999px] z-[1] mq1050:max-w-full">
          <div className="rounded flex flex-row items-start justify-start pt-[18px] pb-3 pr-[927px] pl-0 box-border max-h-[999999px]">
            <div
              className="flex flex-row items-start justify-start max-h-[999999px] cursor-pointer"
              onClick={onItemLinkClick}
            >
              <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[33px]">
                Home
              </a>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border gap-[7.3px] max-h-[999999px] text-xs text-wwwbrilliantearthcom-mine-shaft">
              <div className="relative leading-[18px] inline-block min-w-[5px]">
                /
              </div>
              <a className="[text-decoration:none] relative text-xs-1 leading-[18px] text-[inherit] inline-block min-w-[23px]">
                Cart
              </a>
            </div>
          </div>
        </div>
        <CartContainer />
        <footer className="absolute top-[886.5px] left-[0px] box-border w-full h-[572px] flex flex-col items-start justify-start pt-[30.9px] px-0 pb-16 gap-[0.1px] max-h-[999999px] max-w-full z-[3] border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto mq1050:h-auto">
          <HorizontalBorder />
          <Container />
        </footer>
      </main>
      <div className="w-14 h-14 !m-[0] absolute top-[-153px] right-[18px] shadow-[2px_2px_5px_rgba(45,_45,_45,_0.5)] rounded-[28px] bg-wwwbrilliantearthcom-gable-green overflow-hidden shrink-0 flex flex-row items-start justify-start">
        <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[4.4px] box-border max-h-[999999px]">
          <img className="w-14 h-14 relative" alt="" src="/svg.svg" />
        </div>
      </div>
    </div>
  );
};

export default cartCus;
export const cartCusPath = "/path/to/cart";