import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Bounce, Fade } from "react-awesome-reveal";

import { socialLinks } from "../data/socialLinks";

export default function Home() {
  return (
    <div className="flex flex-col h-full px-3 overflow-x-hidden overflow-y-auto dark:bg-[#2a2a2a] bg-white py-100 transition-all duration-300">
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="max-w-[650px] items-center justify-center flex flex-col md:gap-10 gap-5 text-center relative avatar">
          {/* <Fade delay={1000} triggerOnce={true}>
            <div className="p-2 center min-h-[200px]">
              <div className="ring"></div>
              <div className="relative p-2">
                <img
                  src="imgs/avatar.png"
                  className="w-[200px] rounded-full"
                  alt=""
                />
              </div>
            </div>
          </Fade> */}
          <Fade delay={1200} triggerOnce={true}>
            <h1 className="uppercase md:text-[40px] text-[28px] font-semibold dark:text-[#cacaca] text-[#434343]">
              {/* Hello, my name is <br />
              Adam Glab */}
              Adam Glab
            </h1>
          </Fade>
          <Fade delay={1400} triggerOnce={true}>
            <p className="text-[#8a8a8a] text-sm md:text-md">
              {`As an accomplished blockchain developer with a decade of experience in web and decentralized app development, I possess a deep passion for the emerging possibilities of the web3 world. Since beginning my career as a blockchain developer in 2018, I have specialized in developing DApps on various chains including EVM, Solana, BTC Ordinals, honing my skills in DeFi, NFT, P2E Games and Trading Bots development as well as web3 integration for the frontend. With my expertise in emerging technologies like Bitcoin Runes, Solana Blink, ZK-rollup, Account Abstraction, Metaverse, I am committed to delivering pioneering and impactful applications that improve the lives of millions worldwide.`}
            </p>
          </Fade>
          <Bounce delay={1600} triggerOnce={true}>
            <AwesomeButton
              type="danger"
              className="w-[160px] uppercase"
              href={socialLinks.telegram}
            >
              <span className="font-medium">Contact Me</span>
            </AwesomeButton>
          </Bounce>
        </div>
      </div>
    </div>
  );
}
