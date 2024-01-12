import Card from "../../base/card";
import OrangeDiamond from "../../../assets/image/orange-diamond.jpg";
import PurpleDiamond from "../../../assets/image/purple-diamond.jpg";
import { StackIcon } from "../../../assets/icon/stack.icon";
import { ListIcon } from "../../../assets/icon/list.icon";

const TheEconomy = () => {
  return (
    <div id="#the-economy" className="p-4">
      <Card
        className="mt-16 md:mt-48 mx-auto"
        icon={<StackIcon />}
        title="The Economy"
        subTitle="Galactic BTC: The Currency of BitMesh"
        content={
          <div>
            <div>
              <p className="flex text-[#ffffffcc] mt-6 mb-2 text-sm md:text-base">
                <span className="pr-3">
                  <ListIcon />
                </span>
                In BitMesh, Galactic BTC is the exclusive in-game currency,
                rewarding creators with real SATS of Bitcoin. Dive into a
                futuristic metaverse where NFTs transform into Bitcoin ordinals,
                opening a new realm of ownership and rarity.
              </p>
            </div>
            <div>
              <p className="flex text-[#ffffffcc] mt-6 mb-2 text-sm md:text-base">
                <span className="pr-3">
                  <ListIcon />
                </span>
                Players traverse a cosmic landscape, tackling challenges and
                vying for rewards in SATS of Bitcoin. The innovative integration
                of NFTs as Bitcoin ordinals adds a thrilling dimension, enabling
                players to collect, trade, and possess digital assets linked to
                the world's most renowned cryptocurrency.
              </p>
            </div>
          </div>
        }
        image={
          <div>
            <img className="rounded-xl mb-6" src={PurpleDiamond} alt="" />
            <img className="rounded-t-xl" src={OrangeDiamond} alt="" />
          </div>
        }
        imageClass="mt-8 md:mt-12"
      />
    </div>
  );
};

export default TheEconomy;
