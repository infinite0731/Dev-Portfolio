import { AwesomeButton } from "react-awesome-button";
import { Fade } from "react-awesome-reveal";
import { BsDiscord, BsGithub, BsTelegram, BsTwitter } from "react-icons/bs";
import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  return (
    <div className="flex items-start justify-center w-full h-full overflow-x-hidden overflow-y-auto dark:bg-[#2a2a2a] bg-white px-3 transition-all duration-300">
      <div className="max-w-[880px] md:min-w-[700px] lg:min-w-[880px] flex items-center justify-center flex-col gap-7 my-[100px]">
        <Fade delay={1000} triggerOnce={true}>
          <h1 className="dark:text-[#cacaca] uppercase md:text-[2em] text-2xl font-extrabold text-[#434343]">
            Get in touch
          </h1>
        </Fade>
        <Fade
          delay={1300}
          triggerOnce={true}
          className="flex items-center justify-center w-full text-center"
        >
          <small className="dark:text-[#9a9a9a] text-[#6e6e6e]">
            {`If you want to get in touch with me for collaboration or just saying Hi😉, please send an email to `}
            <a
              href="mailto:adamglab0731.pl@gmail.com"
              className="text-xl dark:text-[#bbbbbb] transition-all duration-300 dark:hover:text-white text-[#787878] hover:text-[#020202]"
            >
              {" "}
              adamglab0731.pl@gmail.com
              {"  "}
            </a>
            and let's talk.
          </small>
        </Fade>
        <div className="w-full">
          <Fade delay={1500} triggerOnce={true}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d19.9530085!3d50.067268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen={true}
              loading="lazy"
              title="map"
              className="min-h-[300px]"
            />.
          </Fade>
        </div>
        <Fade delay={1700} triggerOnce={true}>
          <h1 className="dark:text-[#cacaca] uppercase text-[1.25em] font-extrabold text-[#434343]">
            Let's get social
          </h1>
          <p className="dark:text-[#9a9a9a] text-center md:text-left text-sm text-[#747474]">
            Follow me on Socials.
          </p>
        </Fade>

        <Fade delay={1800} triggerOnce={true}>
          <div className="grid items-center justify-center grid-cols-2 gap-5 md:grid-cols-4">
            <AwesomeButton type="twitter" href={socialLinks.twitter}>
              <span className="flex items-center justify-center gap-1">
                <BsTwitter size={15} />
                <span className="text-sm font-light uppercase">Twitter</span>
              </span>
            </AwesomeButton>
            <AwesomeButton type="github" href={socialLinks.github}>
              <span className="flex items-center justify-center gap-1">
                <BsGithub size={15} />
                <span className="text-sm font-light uppercase">Github</span>
              </span>
            </AwesomeButton>
            <AwesomeButton type="primary" href={socialLinks.discord}>
              <span className="flex items-center justify-center gap-1">
                <BsDiscord size={15} />
                <span className="text-sm font-light uppercase">Discord</span>
              </span>
            </AwesomeButton>{" "}
            {/* <AwesomeButton type="linkedin" href={socialLinks.linkedin}>
              <span className="flex items-center justify-center gap-1">
                <BsLinkedin size={15} />
                <span className="text-sm font-light uppercase">Linkedin</span>
              </span>
            </AwesomeButton> */}
            <AwesomeButton type="twitter" href={socialLinks.telegram}>
              <span className="flex items-center justify-center gap-1">
                <BsTelegram size={15} />
                <span className="text-sm font-light uppercase">Telegram</span>
              </span>
            </AwesomeButton>
          </div>
        </Fade>
      </div>
    </div>
  );
}
