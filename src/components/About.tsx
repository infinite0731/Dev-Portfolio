import "react-awesome-button/dist/styles.css";
import { Fade } from "react-awesome-reveal";
// import { PiStudentFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { SiRetool } from "react-icons/si";

import { skillSets, knowledgeSets } from "../data/aboutData";

export default function About() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen overflow-x-hidden overflow-y-auto dark:bg-[#2a2a2a] bg-white px-3 transition-all duration-300 z-[9998]">
      <div className="max-w-[880px] md:min-w-[700px] flex items-center justify-center flex-col gap-2">
        <div className="max-w-[650px] items-start justify-start flex flex-col gap-4 md:gap-10 text-center relative w-full">
          {/* <Fade delay={1000} triggerOnce={true} className="w-full">
            <h1 className="uppercase text-2xl md:text-[30px] font-normal dark:text-[#cacaca] text-[#434343] flex gap-2 items-center justify-center">
              <PiStudentFill size={32} />
              Education
            </h1>
            <div className="flex items-center justify-start dark:bg-[#313131] bg-gray-100 p-1 rounded-md w-full">
              <img
                src="/imgs/universityMark.jpg"
                alt=""
                className="w-[100px] object-cover rounded-md hidden md:block"
              />
              <div className="flex flex-col items-start justify-start gap-3 p-1">
                <span className="text-md dark:text-gray-200 text-[#434343]">
                  Osaka University
                </span>
                <p className="text-[#8a8a8a] text-sm text-left">
                  {`2011.4 ~ 2015.6`}
                </p>
                <p className="text-[#8a8a8a] text-sm text-left">
                  Bachelor Degree of Computer Science
                </p>
              </div>
            </div>
          </Fade> */}
          <Fade delay={1500} triggerOnce={true} className="w-full">
            <h1 className="flex items-center justify-center gap-4 uppercase text-2xl md:text-[30px] font-normal dark:text-[#cacaca] text-[#434343]">
              <FaTools size={24} />
              Skill Sets
            </h1>
            <div className="grid items-center justify-start w-full grid-cols-4 gap-3 md:grid-cols-6">
              {skillSets.map((item, key) => (
                <div
                  key={key}
                  className={`px-1 py-2 font-medium border-[1px] dark:border-[#222] border-gray-200 border-r-2 dark:text-[#999]
                   text-[#434343] bg-gray-100 border-b-[3px] shadow-lg uppercase dark:bg-[#313131] rounded-[4px] 
                    md:text-[12px] text-[9px] cursor-pointer dark:hover:bg-[#474747] hover:bg-gray-300 duration-300 transition-all text-center`}
                >
                  {item}
                </div>
              ))}
            </div>
          </Fade>
          <Fade delay={1550} triggerOnce={true} className="w-full">
            <h1 className="flex items-center justify-center gap-3 uppercase text-2xl md:text-[29px] font-normal dark:text-[#cacaca] text-[#434343]">
              <SiRetool size={22} />
              KNOWLEDGE
            </h1>
            <div className="grid items-center justify-center w-full grid-cols-3 gap-3 md:grid-cols-4">
              {knowledgeSets.map((item, key) => (
                <div
                  key={key}
                  className={`w-full px-1 py-2 flex items-center justify-center border-gray-200 border-r-2 text-[#636363]
                   bg-gray-100 font-medium border-[1px] dark:border-[#222] dark:text-[#999] border-b-[3px] shadow-lg uppercase dark:bg-[#313131] rounded-[4px]
                     md:text-[12px] text-[9px] cursor-pointer dark:hover:bg-[#474747] duration-300 transition-all text-center hover:bg-gray-300`}
                >
                  {item}
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
