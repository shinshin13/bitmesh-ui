import { CollectionIcon } from "../../../assets/icon/collection.icon";
import SpinArrow from "../../../assets/icon/spin-arrow.icon";
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
    name: "Exclusive Access Code",
    desc: `Owning a BitMesh Ordinal isn't just about collecting; it's about pioneering. Gain exclusive entry to BitMesh's inaugural season, a six-month epic awaiting those with the coveted NFT access code.`,
  },
  {
    name: "Airdrops of Galactic BTC",
    desc: `The journey extends beyond access. Anticipate a series of airdrops, bestowing exclusive in-game assets, rewards, and the sought-after Galactic BTC currency. These airdrops are your gateway to the full BitMesh gaming experience.`,
  },
  {
    name: "Galactic BTC Saga",
    desc: `Dive into the enthralling BitMesh universe, where blockchain, sci-fi, and crypto converge. As an NFT holder, you're a key player in the fate of this digital dystopia.`,
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
const NativeNftCollection = () => {
  return (
    <div className="container max-w-[1128px] mx-auto py-12 lg:pt-40 lg:pb-20 px-4">
      <div className="bg-component-background px-6 pt-6 lg:px-8 lg:pt-8 rounded-xl lg:rounded-2xl">
        <div className="flex items-center">
          <CollectionIcon size={40}></CollectionIcon>{" "}
          <p className="text-largest pl-3">Native NFT Collection</p>
        </div>
        <div className="py-6">
          <p className="text-larger">
            Join the Elite 10,000: Be among the first 10,000 players to receive
            airdrops of Galactic BTC in-game currency.
          </p>
          <p className="px-2 rounded text-larger text-sm lg:text-lg bg-[#146EF4] inline-block my-3">
            First 3rd NFTs as Bitcoin Ordinals
          </p>
          <p className="text-small">
            Introducing BTC Ordinals 3rd NFTs – a groundbreaking blend of
            blockchain technology and digital artistry.
          </p>
          <div className="mt-6">
            <div className="grid grid-cols gap-5 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6">
              {items.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center">
                      <SpinArrow size={30} />
                      <p className="pl-3 text-normal">{item.name}</p>
                    </div>
                    <p className="text-small mt-3">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 border lg:grid-cols-4 px-3 pt-4 lg:px-4 lg:pt-4 gap-2 rounded-t-2xl border-[#146EF4] border-b-0">
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
  );
};
export default NativeNftCollection;
