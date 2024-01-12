import Card from "../../base/card";
import { ListIcon } from "../../../assets/icon/list.icon";
import Original from "../../../assets/image/original.jpg";
import { GlobeIcon } from "../../../assets/icon/globe.icon";

const BuildYourWorld = () => {
  return (
    <div id="#build-your-world">
      <Card
        className="mt-16 md:mt-48 mx-auto md:flex-col"
        icon={<GlobeIcon />}
        title="Create your Story"
        content={
          <div>
            <div className="flex flex-wrap md:  flex-row gap-6 mb-8 md:mb-12 ">
              <div className="grid">
                <div>
                  <h6 className="flex items-center text-[#ffffffcc] font-bold text-base md:text-xl mt-6 mb-2">
                    <span className="pr-3">
                      <ListIcon />
                    </span>
                    Embark on an Epic Questline
                  </h6>
                  <p className="text-sm md:text-base">
                    Dive into an immersive gaming odyssey with a rich questline,
                    offering dynamic story arcs and rewarding challenges for
                    those seeking the extraordinary.
                  </p>
                </div>
                <div>
                  <h6 className="flex items-center text-[#ffffffcc] font-bold text-base md:text-xl mt-6 mb-2">
                    <span className="pr-3">
                      <ListIcon />
                    </span>
                    Collective Universe Crafting
                  </h6>
                  <p className="text-sm md:text-base">
                    Join a robust gaming community where your decisions shape
                    the game's evolution. Be part of a collective force
                    determining the fate of our digital universe.
                  </p>
                </div>
                <div>
                  <h6 className="flex items-center text-[#ffffffcc] font-bold text-base md:text-xl mt-6 mb-2">
                    <span className="pr-3">
                      <ListIcon />
                    </span>
                    Seasonality Model Unleashed
                  </h6>
                  <p className="text-sm md:text-base">
                    Discover the ever-shifting realms of the BitMesh world with
                    our seasonality model. Every six months, a new chapter
                    unfolds, injecting continuous excitement and
                    unpredictability.
                  </p>
                </div>
              </div>
              <div className="grid">
                <div>
                  <h6 className="flex items-center text-[#ffffffcc] font-bold text-base md:text-xl mt-6 mb-2">
                    <span className="pr-3">
                      <ListIcon />
                    </span>
                    Ordinals NFTs - Real BTC Loot
                  </h6>
                  <p className="text-sm md:text-base">
                    Unlock treasures with Ordinals NFTs, earning genuine
                    satoshis of Bitcoin as rewards.
                  </p>
                </div>

                <div>
                  <h6 className="flex items-center text-[#ffffffcc] font-bold text-base md:text-xl mt-6 mb-2">
                    <span className="pr-3">
                      <ListIcon />
                    </span>
                    Craft Your Gaming Empire
                  </h6>
                  <p className="text-sm md:text-base">
                    Harness your entrepreneurial spirit. Use our platform to
                    create and launch mini-games within the BitMesh universe,
                    building a unique gaming ecosystem and earning crypto
                    rewards.
                  </p>
                </div>

                <div>
                  <h6 className="flex items-center text-[#ffffffcc] font-bold text-base md:text-xl mt-6 mb-2">
                    <span className="pr-3">
                      <ListIcon />
                    </span>
                    No Code Game Engine Mastery
                  </h6>
                  <p className="text-sm md:text-base">
                    Dominate game development effortlessly. Our intuitive
                    no-code game engine allows anyone to create engaging
                    experiences, fostering a diverse gaming world.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-t-xl border pb-0 border border-b-0 border-[#146EF4]">
              <img src={Original} className="rounded-t-xl md:" alt="" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default BuildYourWorld;
