import { Fade } from "react-awesome-reveal";
import { socialLinks } from "../data/socialLinks";

export default function FollowOnGithub() {
  return (
    <Fade delay={2200}>
      <div
        className="absolute top-10 md:top-20 rotate-45 -right-[80px] shadow-2xl flex items-center justify-center cursor-pointer bg-[#BC2C2C] hover:bg-[#bc2c2cc6] duration-300
      transition-all z-[9999]"
      >
        <a
          className="py-2 px-[100px] text-white"
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-[10px] md:text-[16px] font-thin">
            Follow On Github
          </h1>
        </a>
      </div>
    </Fade>
  );
}
