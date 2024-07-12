import Main from "../components/Main";
import FooterWrapper from "../components/FooterWrapper";
import Footer from "../components/Footer";
import ContainerCus from "../components/Container";

const cusProfile = () => {
  return (
    <div className="w-full h-[1807.3px] relative bg-wwwbrilliantearthcom-nero overflow-y-auto flex flex-col items-end justify-start pt-0 px-0 pb-[604.5px] box-border leading-[normal] tracking-[normal] text-left text-smi-8 text-wwwbrilliantearthcom-mine-shaft font-wwwbrilliantearthcom-inter-regular-1106 mq1050:h-auto">
      <div className="w-[200px] h-px relative overflow-hidden shrink-0 hidden z-[0]">
        <a
          className="absolute top-[-0.2px] left-[0px] leading-[20px] text-[inherit] flex items-center w-[171.6px] h-5 [text-decoration:none]"
          href="https://accessibe.com/blog/knowledgebase/screen-reader-guide"
          target="_blank"
        >
          Accessibility Screen-Reader
        </a>
      </div>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-wwwbrilliantearthcom-nero" />
      <Main />
      <FooterWrapper />
      <footer className="self-stretch box-border flex flex-col items-end justify-start pt-[30px] px-0 pb-0 max-h-[999999px] max-w-full shrink-0 z-[1] border-t-[0.9px] border-solid border-wwwbrilliantearthcom-alto">
        <Footer />
        <ContainerCus />
      </footer>
      <div className="w-14 h-14 !m-[0] absolute top-[-153px] right-[18px] shadow-[2px_2px_5px_rgba(45,_45,_45,_0.5)] rounded-[28px] bg-wwwbrilliantearthcom-gable-green overflow-hidden shrink-0 flex flex-row items-start justify-start">
        <div className="flex flex-col items-center justify-start pt-0 px-0 pb-[4.4px] box-border max-h-[999999px]">
          <img className="w-14 h-14 relative" alt="" src="/svg.svg" />
        </div>
      </div>
    </div>
  );
};

export default cusProfile;
export const cusProfilePath = "/path/to/profile";
