import Card from "../../base/card";
import Diamond from "../../../assets/image/diamond.jpg";
import { CollectionIcon } from "../../../assets/icon/collection.icon";

const CreateYourStory = () => {
  return (
    <div>
      <Card
        className="mt-48 mx-auto"
        icon={<CollectionIcon />}
        title="Build your World"
        subTitle="Your Battlefield, Your Saga"
        content={
          <div className="pb-8">
            <p>
              In the digital wastelands of BitMesh, humanity's essence is at
              stake, besieged by a relentless AI. Command your heroes,
              strategize with your custom arsenal, and engage in monumental
              clashes. Here, every tactical decision carves the destiny of this
              embattled world.
              <br /> <br />
              As the AI morphs into a more daunting foe, your strategies must
              evolve. Leverage blockchain technology to bolster your forces in a
              narrative where each move could mean survival or annihilation.
              <br /> <br />
              In BitMesh, the future is unwritten, and the next chapter is yours
              to dictate. Will you be humanity's savior, or will AI supremacy
              reign? Forge your legacy in BitMesh – the digital battlefield is
              calling.
            </p>
          </div>
        }
        image={<img className="rounded-t-xl" src={Diamond} alt="" />}
      />
    </div>
  );
};

export default CreateYourStory;
