import SpinArrow from "../../../assets/icon/spin-arrow.icon";
import { TechnologyIcon } from "../../../assets/icon/technology.icon";
import nft1 from "../../../assets/image/nft-collection-1.png";
import nft2 from "../../../assets/image/nft-collection-2.png";
import nft3 from "../../../assets/image/nft-collection-3.png";
import nft4 from "../../../assets/image/nft-collection-4.png";
import nft5 from "../../../assets/image/nft-collection-5.png";
import nft6 from "../../../assets/image/nft-collection-6.png";
import nft7 from "../../../assets/image/nft-collection-7.png";
import nft8 from "../../../assets/image/nft-collection-8.png";
const items = [
  {
    name: "Built-in CLI (Command Line Interface)",
    desc: `Empowering moderators with advanced tools, the web command-line interface allows precise control over various game aspects.`,
  },
  {
    name: "Scalability ",
    desc: `BitMesh is equipped with built-in tools to confidently handle sudden spikes in traffic, ensuring a smooth and uninterrupted gaming experience for players even during peak times.`,
  },
  {
    name: "Instant Updates",
    desc: `Experience seamless gameplay with zero downtime during updates. BitMesh's architecture allows for instant updates, ensuring that players can enjoy the latest features and improvements without interruption.`,
  },
  {
    name: "Collaboration",
    desc: `The development team can iterate on game improvements in real-time, fostering a collaborative environment that responds swiftly to player feedback and emerging trends.`,
  },
  {
    name: "Built-in AI",
    desc: `Engage in battles not only against fellow players but also against formidable automated opponents owned and maintained by the Community DAO. AI integration adds a dynamic and challenging layer to the gaming experience, offering endless possibilities for strategic gameplay.`,
  },
  {
    name: "Security",
    desc: `Developed in collaboration with cybersecurity experts, BitMesh prioritizes platform and user security. The platform undergoes rigorous testing, including automated and manual OWASP tests, to ensure a secure and trustworthy gaming ecosystem.`,
  },
  {
    name: "Customization",
    desc: `All game mechanics are fully customizable, eliminating the need for hard-coding. This flexibility empowers developers and the community to create a dynamic and ever-evolving gaming environment.`,
  },
];
const nfts = [
  {
    imgUrl: nft1,
  },
  {
    imgUrl: nft2,
  },
  {
    imgUrl: nft3,
  },
  {
    imgUrl: nft4,
  },
  {
    imgUrl: nft5,
  },
  {
    imgUrl: nft6,
  },
  {
    imgUrl: nft7,
  },
  {
    imgUrl: nft8,
  },
];
const Technology = () => {
  return (
    <div
      id="#our-technology"
      className="container max-w-[1128px] mx-auto mt-12 lg:mt-48 px-4"
    >
      <div className="bg-component-background px-6 pt-6 lg:px-8 lg:pt-8 rounded-xl lg:rounded-2xl">
        <div className="flex items-center">
          <TechnologyIcon size={40}></TechnologyIcon>
          <p className="text-largest pl-3">Our Technology</p>
        </div>
        <div className="pt-6">
          <p className="text-larger">BitMesh crafted entirely in-house,</p>

          <p className="text-small py-3">
            BitMesh boasts a highly progressive game engine designed to
            seamlessly integrate the ambitious visions of our development team
            and the expansive community.
          </p>
          <p className="text-larger">Unique Features</p>
          <div className="mt-6">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-x-12 lg:gap-y-6">
              <div className="flex flex-col lg:w-1/2 gap-6">
                {items.map((item, index) => {
                  return index + 1 <= 4 ? (
                    <div key={index}>
                      <div className="flex items-center">
                        <SpinArrow size={30} />
                        <p className="pl-3 text-normal">{item.name}</p>
                      </div>
                      <p className="text-small mt-3">{item.desc}</p>
                    </div>
                  ) : null;
                })}
              </div>
              <div className="flex justify-between flex-col lg:w-1/2 gap-6 lg:gap-0">
                {items.map((item, index) => {
                  return index + 1 > 4 ? (
                    <div key={index}>
                      <div className="flex items-center">
                        <SpinArrow size={30} />
                        <p className="pl-3 text-normal">{item.name}</p>
                      </div>
                      <p className="text-small mt-3">{item.desc}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-10 grid grid-cols-2 border lg:grid-cols-4 px-3 pt-4 lg:px-4 lg:pt-4 gap-2 rounded-t-2xl border-[#146EF4] border-b-0">
            {nfts.map((item, index) => {
              return (
                <div key={index}>
                  <img alt="nft collection" src={item.imgUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
