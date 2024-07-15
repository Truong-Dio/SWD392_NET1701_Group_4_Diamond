import { useCallback } from "react";
import Footer from "../components/Footer";
import BannerPromo from "../components/BannerPromo";
import SignatureCol from "../components/SignatureCol";
import Shopbyshape from "../components/Shopbyshape";
import Banner1 from "../components/Banner1";
import Shopbycategory from "../components/Shopbycategory";
import Navpage from "../components/Navpage";

const Homepage = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.brilliantearth.com/about/");
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-xs-4 text-wwwbrilliantearthcom-nero font-wwwbrilliantearthcom-inter-regular-1125">
      <div className="self-stretch bg-wwwbrilliantearthcom-gable-green flex flex-row items-center justify-center pt-[2.4px] px-5 pb-[2.5px] box-border min-h-[32px] max-w-full">
        <div className="rounded flex flex-row items-center justify-center py-[5px] pr-[3px] pl-1 box-border gap-[2.6px] max-w-full">
          <div className="flex flex-row items-start justify-center max-w-[calc(100%_-_11px)]">
            <a
              className="w-[461px] relative tracking-[1.2px] leading-[18px] text-[inherit] flex items-center justify-center [text-decoration:none]"
              target="_blank"
            >
              ENDS SOON! Receive a Sapphire Necklace With Purchase Over $1,000.
            </a>
          </div>
          <div className="flex flex-row items-start justify-center text-[9px]">
            <a
              className="relative tracking-[1.2px] leading-[13px] text-[inherit] inline-block [text-decoration:none] min-w-[8px]"
              href="https://www.brilliantearth.com/promo-codes-and-offers/"
              target="_blank"
            >{`>`}</a>
          </div>
        </div>
      </div>
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border min-h-[1200px] max-w-full text-center text-11xl-1 text-wwwbrilliantearthcom-mine-shaft1 font-wwwbrilliantearthcom-inter-regular-1125 mq950:pb-5 mq950:box-border mq1425:pb-[22px] mq1425:box-border">
          <Navpage />
          <Banner1 />
          <Shopbyshape />
          <SignatureCol />
          <BannerPromo />
          <Shopbycategory />
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-20 box-border min-h-[350px] max-w-full">
            <div className="w-full flex flex-col items-start justify-start bg-[url('/public/background@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[1440px] mq1900:max-w-full">
              <div
                className="self-stretch flex flex-row items-start justify-center max-w-full cursor-pointer"
                onClick={onLinkContainerClick}
              >
                <div className="flex-1 flex flex-col items-center justify-center py-14 px-0 box-border max-w-full">
                  <div className="w-[384.5px] flex flex-col items-center justify-start pt-0 px-0 pb-10 box-border min-h-[114px] max-w-full">
                    <div className="w-full h-[74px] flex flex-col items-start justify-start pt-0 px-6 pb-0 box-border gap-[16px] max-w-[912px] mq950:max-w-full">
                      <div className="self-stretch flex flex-col items-center justify-start pt-[3px] px-[35px] pb-1">
                        <a
                          className="self-stretch relative text-[inherit] [text-decoration:none] mq450:text-lg mq950:text-5xl"
                          href="https://www.brilliantearth.com/about/"
                          target="_blank"
                        >
                          Jewelry Redefined
                        </a>
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-start pt-0.5 px-0 pb-[3px] shrink-0 text-sm-3">
                        <div className="self-stretch h-8 relative flex items-center justify-center">
                          Join us in transforming the jewelry industry for
                          good. 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-sm-5 text-wwwbrilliantearthcom-nero">
                    <div className="bg-wwwbrilliantearthcom-gable-green overflow-hidden flex flex-col items-center justify-start py-px px-[26px] box-border min-w-[128px] whitespace-nowrap">
                      <a className="[text-decoration:none] relative leading-[42px] font-medium text-[inherit] inline-block min-w-[74px]">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
