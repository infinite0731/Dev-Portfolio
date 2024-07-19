const filterKey = [
  { title: "show all", key: "*" },
  { title: "NFT", key: "nft" },
  { title: "DEFI", key: "defi" },
  { title: "P2E Game", key: "game" },
  { title: "Trading Bot", key: "bot" },
];

const projectData = [
  {
    type: ["nft", "game"],
    role: "Lead Blockchain Developer",
    skills: ["BTC Ordinals", "Node.js", "Next.js", "Web3.js", "Web Socket", "Stress Test"],
    imgUrl: "imgs/works/work1.png",
    summary:
      "Galactic Kingdom is a Web 3 intergalactic empire-building strategy mobile game that brings players to fight each other in high-stakes thrilling battles in the pursuit of great hidden treasures.",
    siteUrl: "https://www.galactickingdom.io/",
  },
  {
    type: ["nft", "game"],
    role: "BTC Web3 Developer",
    skills: ["BTC Runes", "Next.js", "Web3.js", "Figma"],
    imgUrl: "imgs/works/work2.jpg",
    summary:
      "The central location where you can monitor and control your Rune Guardians and Rune tokens. Explore the Rune Guardians realm further",
    siteUrl: "https://world-map-game-v2.vercel.app/",
  },
  {
    type: ["nft"],
    role: "Solana Backend Developer",
    skills: ["Rust","Supabase", "Anchor", "Web3.js", "Solana", "Smart Contract"],
    imgUrl: "imgs/works/work4.png",
    summary:
      "Foster Marketplace is the first DAO-governed NFT marketplace & web3 streaming protocol for art and music. It is a decentralized application (DApp) built on the Solana Blockchain that offers alternative monetizing opportunities for creators, and composable consumpotion for collectors and curators.",
    siteUrl: "https://fostermarketplace.app/",
  },
  {
    type: ["bot"],
    role: "Solana Developer",
    skills: ["Raydium SDK", "Jito Bundle", "Next.js", "Node.js", "Solana Web3"],
    imgUrl: "imgs/works/work3.png",
    summary:
      "This Solana Bot Package is designed to automate interactions with the Raydium decentralized exchange and the Solana blockchain. The package includes two main bots: the Raydium Sniper Bot and the Meme Coin Bot.",
    siteUrl: "https://solana-trading-bot-fe-production.up.railway.app/sniper",
  },
  {
    type: ["game"],
    role: "Solana Smart Contract Developer",
    skills: ["Rust", "Anchor", "Node.js", "Next.js","Web3.js", "Tokenomics"],
    imgUrl: "imgs/works/work5.png",
    summary:
      "Space Falcon is a gaming studio & tech startup scaling the Web3 gaming experience and revolutionizing virtual adventures with GameFi initiatives. We created $FCON token and Sol staking platform there and enabled users to stake their tokens to get reward",
    siteUrl: "https://spacefalcon.com/",
  },
  {
    type: ["defi"],
    role: "Bitcoin Developer",
    skills: ["BRC-20", "Cybord Pool", "Node.js", "Next.js","Web3.js"],
    imgUrl: "imgs/works/work12.png",
    summary:
      "BRC-20 & CBRC-20 Token Exchanage and Staking Project. DexOrdi provides a seamless and intuitive trading environment that empowers users to explore the world of decentralized trading on the Bitcoin network.",
    siteUrl: "https://dexordi.com/",
  },
  {
    type: ["game"],
    role: "Full Stack Web3 Developer",
    skills: ["Next.js", "WebGL", "Node.js", "Web3.js", "Tatum API"],
    imgUrl: "imgs/works/work7.png",
    summary:
      "This is a crypto betting game site which players can enjoy several betting games with multiple coins like BTC, ETH, Tron, USDT, and USDC etc. There are many intersting games like Scissors, Dice, Crash, Mines, Roulette in this project.",
    siteUrl: "https://playzelo.xyz/en/",
  },
  {
    type: ["game"],
    role: "Game Developer",
    skills: ["Node.js", "Web3.js", "Unity"],
    imgUrl: "imgs/works/work8.png",
    summary:
      "Mechagotchis is a Multi-player RPG game which players can enjoy exploring Mechagothis world and fighting each other.",
    siteUrl: "https://mechagotchi.com/",
  },
  {
    type: ["nft"],
    role: "Blockchain Developer",
    skills: ["Solidity", "Node.js", "Next.js", "Web3.js", "MongoDB", "API Integration"],
    imgUrl: "imgs/works/work6.png",
    summary:
      "BloodLoop is the first gaming product of 7 Digital Labs, a Gaming Studio focused on producing gaming solutions that bridge the web2 and web3 worlds through the adoption of a gameplay-centric system and the streamlining of onboarding barriers.",
    siteUrl: "https://app.bloodloop.com/",
  },
  {
    type: ["defi"],
    role: "Blockchain Developer",
    skills: ["Solidity", "Node.js", "Next.js", "Web3.js", "Uniswap SDK"],
    imgUrl: "imgs/works/work9.png",
    summary:
      "360 Ecosystem is a DeFi platform which is built on Polygon network. It includes all DeFi activities like 360 token staking, vesting, bonding etc.",
    siteUrl: "https://360.foundation/",
  },
  {
    type: "defi",
    role: "Full Stack Developer",
    skills: ["React.js", "Node.Jj", "Token Bridge", "DEX"],
    imgUrl: "imgs/works/work10.png",
    summary:
      "The DEX platform offers a decentralized and secure way to trade cryptocurrencies while providing users with a range of features that enhance their trading experience.",
    siteUrl: "https://justshift.io/",
  },
  {
    type: "defi",
    role: "Blockchain Developer",
    skills: ["Solidity", "Node.js", "Next.js", "Web3.js", "ZK Tech"],
    imgUrl: "imgs/works/work11.png",
    summary: "Lucia is a non custodial lending and borrowing protocol that aims to grant individuals and startups access to credit through a foundation of trust.",
    siteUrl: "https://www.luciaprotocol.com/",
  },
];

export { filterKey, projectData };
