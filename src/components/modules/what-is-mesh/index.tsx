import Card from "../../base/card";
import { BitmeshIcon } from "../../../assets/icon/bitmesh.icon";
import { ListIcon } from "../../../assets/icon/list.icon";
import Parrish from "../../../assets/image/parrish.jpg";

const WhatIsMesh = () => {
  return (
    <div>
      <Card
        className="mt-48 mx-auto"
        icon={<BitmeshIcon />}
        title="What is BitMesh"
        subTitle="A New Era in RTS Gaming"
        content={
          <div className="pb-8">
            <p className="mb-2">
              BitMesh isn't just a game; it's a revolution in real-time strategy
              (RTS) gaming. Set against the haunting remnants of Earth, this
              game is a battleground where AI adversaries evolve relentlessly.
              BitMesh stands as the first RTS game dynamically sculpted by
              player strategies and community aspirations, offering a war-torn
              landscape where tactical genius is key to outmaneuvering the AI's
              inexorable rise.
              <br /> <br />
              As players delve into this dystopian saga, BitMesh masterfully
              blends RTS mechanics with clan-building elements, creating an
              addictive gameplay loop. Here, every decision counts in the face
              of escalating AI threats.
            </p>
            <h6 className="flex items-center text-[#ffffffcc] font-bold text-xl mt-6 mb-2">
              <span className="pr-3">
                <ListIcon />
              </span>
              Dynamic Story Arcs
            </h6>
            <p>
              In BitMesh, you're not just playing a game; you're influencing its
              future. Your choices and community votes are woven into the game's
              sci-fi fabric, steering the narrative in this ever-evolving AI
              world.
            </p>
          </div>
        }
        image={<img className="rounded-t-xl" src={Parrish} alt="" />}
      />
    </div>
  );
};

export default WhatIsMesh;
